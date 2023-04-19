/* eslint-disable max-lines */
// TODO: solve maxlength
import React, { FC, useEffect, useRef, useState, useCallback } from 'react';

import classNames from 'classnames';
import ePub, { Rendition, Book as EpubBook, NavItem, Location } from 'epubjs';
// eslint-disable-next-line import/no-unresolved
import Navigation from 'epubjs/types/navigation'; // TODO fix
import { debounce } from 'lodash';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { Button, Gutter, Spinner } from 'components/ui/general';
import { EpubTocRender, BookmarksRender } from 'components/ui/reader';
import { ReaderConsts } from 'consts/reader';
import { useBreakpoint, useIntervalStartStop, useKeyPress } from 'hooks';
import {
  Book,
  Scalars,
  useCreateHighlightMutation,
  useDeleteHighlightMutation,
  useHighlightsLazyQuery,
  useTrackMutation,
  Highlight,
  useUpdatePlacementMutation
} from 'types/graphql';
import { getIdFromCfi } from 'utils';

import { texts } from './EpubReader.texts';

import styles from './EpubReader.module.scss';

interface renderedHighlightsProps {
  [id: string]: Highlight;
}

interface mousePositionProps {
  clientX: number;
  y: number;
}
interface ReaderProps {
  book: Book;
  refetch: () => void;
}

export const EpubReader: FC<ReaderProps> = ({ book, refetch }) => {
  const { min } = useBreakpoint();
  const intl = useIntl();
  const [loading, setLoading] = useState(true);

  const viewerRef = useRef<HTMLDivElement | null>(null);
  const [epubBook, setEpubBook] = useState<EpubBook | null>(null);
  const [rendition, setRendition] = useState<Rendition | null>(null);
  const [toc, setToc] = useState<Array<NavItem> | null>(null);
  const [currentLocation, setCurrentLocation] = useState(
    book.tracking?.currentPlacementEpub || null
  );
  const [failed, setFailed] = useState<boolean>(false);
  const [tocVisible, setTocVisible] = useState(false);
  const [bookmarksVisible, setBookmarksVisible] = useState(false);
  const [highlightActive, setHighlightActive] = useState(false);
  const [highlightCfiToRemove, setHighlightCfiToRemove] = useState<
    string | null
  >(null);
  const [highlightCfiToAdd, setHighlightCfiToAdd] = useState<string | null>(
    null
  );
  const [renderedHighlights, setRenderedHighlights] =
    useState<renderedHighlightsProps>({});
  const [mousePos, setMousePos] = useState<mousePositionProps | null>(null);
  const router = useRouter();

  const url = book.bookUrl;
  const id = book.id as Scalars['ID'];

  const chapterIdentifier = epubBook?.spine.get(
    currentLocation as string
  )?.cfiBase;

  const [trackPage] = useUpdatePlacementMutation();
  const [track] = useTrackMutation();
  const [createHighlightMutation, { data: createHighlightRes = {} }] =
    useCreateHighlightMutation();
  const [removeHighlightMutation] = useDeleteHighlightMutation();
  const [
    getHighlights,
    { data: { highlights: { edges: highlights = [] } = {} } = {} }
  ] = useHighlightsLazyQuery();

  useEffect(() => {
    if (rendition && highlights.length) {
      setRenderedHighlights(
        highlights.reduce(
          (acc, highlight) => ({ ...acc, ...{ [highlight.id]: highlight } }),
          {}
        )
      );
      highlights.forEach((highlight) => {
        rendition?.annotations.highlight(
          highlight.highlight,
          {},
          () => {
            setHighlightCfiToRemove(highlight.highlight);
          },
          'hl',
          { fill: ReaderConsts.HIGHLIGHT_COLOR, 'fill-opacity': '0.3' }
        );
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rendition, highlights]);

  useEffect(() => {
    const addedHighlight = createHighlightRes?.createHighlight;
    if (addedHighlight) {
      setRenderedHighlights({
        ...renderedHighlights,
        ...{ [addedHighlight.id]: addedHighlight }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createHighlightRes]);

  useEffect(() => {
    if (chapterIdentifier) {
      Object.values(renderedHighlights).forEach((highlight) => {
        rendition?.annotations.remove(highlight.highlight, 'highlight');
      });
      setRenderedHighlights({});
      getHighlights({
        variables: { filter: { bookId: id, epubPage: chapterIdentifier } }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterIdentifier]);

  // update tracking every minute
  const tracker = useIntervalStartStop(() => {
    track({ variables: { id, startSession: false } });
  }, 60000);
  // start tracking
  useEffect(() => {
    track({ variables: { id, startSession: true } });
    tracker(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // stop tracking if book dosent load
  useEffect(() => {
    if (failed) {
      return tracker(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [failed]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceTrackPage = useCallback(
    debounce((loc) => {
      if (!loc) {
        return;
      }
      trackPage({ variables: { id, currentPlacementEpub: loc } });
    }, 5000),
    []
  );

  useEffect(() => {
    debounceTrackPage(currentLocation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  // load book as epub
  useEffect(() => {
    setRendition(null);
    if (url) {
      const newEpubBook = ePub(url, {
        requestHeaders: { 'Cache-Control': 'no-cache' }
      });
      setEpubBook(newEpubBook);
    }
  }, [url]);

  // load rendition
  useEffect(() => {
    setRendition(null);
    if (viewerRef.current && epubBook) {
      const newRendition = epubBook.renderTo(viewerRef.current, {
        width: '100%',
        height: '100%'
      });
      newRendition.display(book.tracking?.currentPlacementEpub || undefined);
      setRendition(newRendition);
    }
    return () => {
      // destroy on unmount
      epubBook?.destroy();
      rendition?.destroy(); // might not be needed
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [epubBook]);

  useEffect(() => {
    if (rendition) {
      rendition.themes.default({
        '::selection': {
          background: ReaderConsts.SELECTION_COLOR
        }
      });
      rendition?.on('selected', (cfiRange: string, contents: any) => {
        setHighlightCfiToAdd(cfiRange);
        contents.window.getSelection().removeAllRanges();
      });
      rendition?.on('mousedown', () => {
        setHighlightCfiToRemove(null);
      });
      rendition.on('rendered', (_: any, i: any) => {
        i.document.documentElement.addEventListener('mousedown', (e: any) => {
          setMousePos(e);
        });
        i.document.documentElement.addEventListener(
          'contextmenu',
          (cfiRange: any) => {
            cfiRange.preventDefault();
          }
        );
        i.document.documentElement.addEventListener('copy', (cfiRange: any) => {
          cfiRange.preventDefault();
        });
      });
    }
  }, [rendition]);

  useKeyPress(37, () => {
    rendition?.prev();
  });
  useKeyPress(39, () => {
    rendition?.next();
  });

  const addHighlight = useCallback(async () => {
    if (highlightCfiToAdd) {
      await createHighlightMutation({
        variables: {
          input: {
            bookId: id,
            epubPage: chapterIdentifier,
            highlight: highlightCfiToAdd
          }
        }
      });

      rendition?.annotations.highlight(
        highlightCfiToAdd,
        {},
        () => {
          setHighlightCfiToRemove(highlightCfiToAdd);
        },
        'hl',
        { fill: ReaderConsts.HIGHLIGHT_COLOR, 'fill-opacity': '0.3' }
      );
    }
  }, [
    chapterIdentifier,
    createHighlightMutation,
    highlightCfiToAdd,
    id,
    rendition?.annotations
  ]);

  useEffect(() => {
    if (highlightActive) {
      addHighlight();
    }
    setHighlightCfiToAdd(null);
  }, [addHighlight, highlightActive, highlightCfiToAdd]);

  const elementPosition = viewerRef?.current?.getBoundingClientRect();

  const removeHighlight = useCallback(async () => {
    if (highlightCfiToRemove) {
      const highlightId = getIdFromCfi(
        Object.values(renderedHighlights),
        highlightCfiToRemove
      );
      const removeHighlightRes = await removeHighlightMutation({
        variables: { id: highlightId }
      });
      if (removeHighlightRes?.data?.deleteHighlight?.success) {
        rendition?.annotations.remove(
          highlightCfiToRemove as string,
          'highlight'
        );
        const newRenderedHighlights = { ...renderedHighlights };
        delete newRenderedHighlights[highlightId];
        setRenderedHighlights(newRenderedHighlights);
      }
      setHighlightCfiToRemove(null);
    }
  }, [
    highlightCfiToRemove,
    removeHighlightMutation,
    renderedHighlights,
    rendition?.annotations
  ]);

  // check if book failed to load
  useEffect(() => {
    epubBook?.loaded.navigation.then((res: Navigation) => {
      setToc(res.toc);
      setLoading(false);
    });
    epubBook?.on('openFailed', () => {
      setFailed(true);
      setLoading(false);
    }); // openFailed from epub.js constants. not exposed.
  }, [epubBook]);

  // track location locally. TODO: add backend location tacking.
  useEffect(() => {
    rendition?.on('locationChanged', (loc: Location) => {
      const newLocation = loc?.start.toString(); // TODO: check this typling
      setCurrentLocation(newLocation);
    });
  }, [rendition]);

  const setLocation = useCallback(
    (loc: string) => {
      rendition?.display(loc);
    },
    [rendition]
  );

  const toggleTocVisible = useCallback(() => {
    if (bookmarksVisible) {
      setBookmarksVisible(false);
    }
    setTocVisible(!tocVisible);
  }, [bookmarksVisible, tocVisible]);

  const toggleBookmarksVisible = useCallback(() => {
    if (tocVisible) {
      setTocVisible(false);
    }
    setBookmarksVisible(!bookmarksVisible);
  }, [bookmarksVisible, tocVisible]);

  const toggleHighlightActive = useCallback(() => {
    if (highlightActive) {
      setHighlightActive(false);
      setHighlightCfiToRemove(null);
    }
    setHighlightCfiToRemove(null);
    setHighlightActive(!highlightActive);
  }, [setHighlightActive, highlightActive]);

  // X and Y coords calculated differntly because render mouse evends are weird.

  const getXCoord = () => {
    const elementWidth = viewerRef.current?.clientWidth;
    if (elementPosition && mousePos && elementWidth) {
      return elementPosition?.x + (mousePos?.clientX % elementWidth) - 50;
    }
  };
  const getYCoord = () => {
    if (elementPosition && mousePos) {
      return elementPosition?.y + mousePos?.y - 50;
    }
  };

  const buttonSize = min('lg') ? 'lg' : 'md';

  if (!book.bookUrl) {
    return null;
  }

  return (
    <div className={styles.root}>
      {highlightCfiToRemove && highlightActive && (
        <div
          className={styles.removeTipContainer}
          style={{
            left: getXCoord(),
            top: getYCoord()
          }}
        >
          <div className={styles.removeTipContent}>
            <Button
              color="primary"
              fullWidth
              onClick={removeHighlight}
              stripPadding
              naked
              rounded={false}
              iconRight={{ name: 'trash-alt' }}
              className={styles.removeButton}
            >
              {intl.formatMessage(texts.removeText)}
            </Button>
          </div>
        </div>
      )}
      <Gutter
        gutter={{ left: 0, bottom: { root: 0, sm: 2 } }}
        className={styles.controlsContainer}
      >
        <Gutter.Item>
          <Button
            rounded={false}
            iconRight={{ name: 'arrow-left' }}
            color="alpha93"
            onClick={() => router.back()}
            fullWidth={!min('sm')}
            className={styles.controlButton}
            size={buttonSize}
            stripPadding={!min('sm')}
          />
        </Gutter.Item>
        <Gutter.Item className={styles.tocButton}>
          <Button
            rounded={false}
            iconRight={{ name: 'list-ul' }}
            onClick={toggleTocVisible}
            color="alpha93"
            disabled={failed || !rendition}
            fullWidth={!min('sm')}
            className={styles.controlButton}
            size={buttonSize}
            stripPadding={!min('sm')}
          />
          <EpubTocRender
            visible={tocVisible}
            toc={toc || undefined}
            setLocation={setLocation}
            close={() => {
              setTocVisible(false);
            }}
          />
        </Gutter.Item>
        <Gutter.Item className={styles.tocButton}>
          <Button
            onClick={toggleBookmarksVisible}
            rounded={false}
            iconRight={{ name: 'bookmark' }}
            color="alpha93"
            disabled={failed || !rendition}
            fullWidth={!min('sm')}
            className={styles.controlButton}
            size={buttonSize}
            stripPadding={!min('sm')}
          />
          <BookmarksRender
            bookId={book.id as string}
            visible={bookmarksVisible}
            currentLocation={currentLocation}
            setLocation={setLocation}
            close={() => {
              setBookmarksVisible(false);
            }}
          />
        </Gutter.Item>
        {min('lg') && (
          <Gutter.Item className={styles.tocButton}>
            <Button
              onClick={toggleHighlightActive}
              rounded={false}
              iconRight={{ name: 'highlighter' }}
              color={highlightActive ? 'primary' : 'alpha93'}
              disabled={failed || !rendition}
              fullWidth={!min('sm')}
              className={styles.controlButton}
              size={buttonSize}
              stripPadding={!min('sm')}
            />
          </Gutter.Item>
        )}
        {!min('sm') && (
          <>
            <Gutter.Item>
              <Button
                onClick={() => rendition?.themes.fontSize('140%')} // TODO: what size?
                rounded={false}
                className={classNames(
                  styles.fontSizeButton,
                  styles.topRounded,
                  styles.controlButton
                )}
                color="alpha93"
                disabled={failed || !rendition}
                fullWidth={!min('sm')}
                stripPadding={!min('sm')}
              >
                <>A</>
              </Button>
            </Gutter.Item>
            <Gutter.Item>
              <Button
                onClick={() => rendition?.themes.fontSize('100%')}
                rounded={false}
                className={classNames(
                  styles.fontSizeButton,
                  styles.smallFont,
                  styles.bottomRounded,
                  styles.controlButton
                )}
                color="alpha93"
                disabled={failed || !rendition}
                fullWidth={!min('sm')}
                stripPadding={!min('sm')}
              >
                <>A</>
              </Button>
            </Gutter.Item>
          </>
        )}
        {min('sm') && (
          <Gutter.Item className={styles.noPadding}>
            <Gutter gutter={{ bottom: 0 }}>
              <Gutter.Item>
                <Button
                  onClick={() => rendition?.themes.fontSize('140%')} // TODO: what size?
                  rounded={false}
                  className={classNames(
                    styles.fontSizeButton,
                    styles.topRounded,
                    styles.controlButton
                  )}
                  color="alpha93"
                  disabled={failed || !rendition}
                  fullWidth={!min('sm')}
                >
                  <>A</>
                </Button>
              </Gutter.Item>
              <Gutter.Item>
                <Button
                  onClick={() => rendition?.themes.fontSize('100%')}
                  rounded={false}
                  className={classNames(
                    styles.fontSizeButton,
                    styles.smallFont,
                    styles.bottomRounded,
                    styles.controlButton
                  )}
                  color="alpha93"
                  disabled={failed || !rendition}
                  fullWidth={!min('sm')}
                >
                  <>A</>
                </Button>
              </Gutter.Item>
            </Gutter>
          </Gutter.Item>
        )}
      </Gutter>
      <div className={styles.epubContainer}>
        {failed ? (
          <div className={styles.reloadButtonWrapped}>
            <Button
              rounded={false}
              iconRight={{ name: 'redo' }}
              color="alpha93"
              size={min('lg') ? 'xl' : 'lg'}
              fullWidth={!min('sm')}
              onClick={refetch}
            >
              {intl.formatMessage(texts.reloadText)}
            </Button>
          </div>
        ) : (
          <div className={styles.viewHolder}>
            {loading && (
              <div className={styles.spinnerHolder}>
                <Spinner visible />
              </div>
            )}
            <div ref={viewerRef} className={styles.view} />
          </div>
        )}
      </div>
      {!failed && (
        <div className={styles.pageControlWrapper}>
          <Gutter
            className={styles.pageControlContainer}
            gutter={{ left: { root: 0, sm: 2 }, bottom: 0 }}
          >
            <Gutter.Item>
              <Button
                onClick={() => rendition?.prev()}
                rounded={false}
                iconRight={{ name: 'angle-left' }}
                color="alpha93"
                disabled={!toc}
                fullWidth={!min('sm')}
                size={buttonSize}
              />
            </Gutter.Item>
            <Gutter.Item>
              <Button
                onClick={() => rendition?.next()}
                rounded={false}
                iconRight={{ name: 'angle-right' }}
                color="alpha93"
                disabled={!toc}
                fullWidth={!min('sm')}
                size={buttonSize}
              />
            </Gutter.Item>
          </Gutter>
        </div>
      )}
    </div>
  );
};
