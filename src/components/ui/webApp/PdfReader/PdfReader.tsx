import React, { FC, useCallback, useEffect, useRef, useState } from 'react';

import { debounce } from 'lodash';
import { useRouter } from 'next/router';
// @ts-ignore
import workerSrc from 'pdfjs-dist/build/pdf.worker.entry'; // TODO: troubleshoot import
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf';
// eslint-disable-next-line import/no-unresolved
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api'; // TODO: troubleshoot import
import { useIntl } from 'react-intl';

import { Button, Gutter, Spinner } from 'components/ui/general';
import {
  PdfPage,
  PdfTocRender,
  BookmarksRender,
  OutlineItemProps
} from 'components/ui/reader';
import {
  useBreakpoint,
  useIntervalStartStop,
  useKeyPress,
  useWindowSize
} from 'hooks';
import {
  Book,
  Scalars,
  useTrackMutation,
  useUpdatePlacementMutation
} from 'types/graphql';
import { LinkService } from 'utils';

import { texts } from './PdfReader.texts';

import styles from './PdfReader.module.scss';

interface ReaderProps {
  book: Book;
  refetch: () => void;
}

export const PdfReader: FC<ReaderProps> = ({ book, refetch }) => {
  const { min } = useBreakpoint();
  const intl = useIntl();
  const windowSize = useWindowSize();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [pdfDocument, setPdfDocument] = useState<PDFDocumentProxy | undefined>(
    undefined
  );
  const [error, setError] = useState(undefined);
  const [pageNum, setPageNum] = useState(
    book?.tracking?.currentPlacementPdf || 1
  );
  const [pageAmount, setPageAmount] = useState(0);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);
  const [maxWidth, setMaxWidth] = useState<number | undefined>(undefined);
  const [tocVisible, setTocVisible] = useState(false);
  const [toc, setToc] = useState<OutlineItemProps[]>([]);
  const [bookmarksVisible, setBookmarksVisible] = useState(false);
  const [highlightActive, setHighlightActive] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);

  const linkService = new LinkService();

  const id = book.id as Scalars['ID'];

  const [track] = useTrackMutation();

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

  const [trackPage] = useUpdatePlacementMutation();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceTrackPage = useCallback(
    debounce((num) => {
      if (!num) {
        return;
      }
      trackPage({ variables: { id, currentPlacementPdf: num } });
    }, 5000),
    []
  );

  useEffect(() => {
    debounceTrackPage(pageNum);
  }, [pageNum, debounceTrackPage]);

  const ref = viewerRef.current;
  useEffect(() => {
    if (ref) {
      ref.addEventListener('copy', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
      });
    }
    return () => {
      if (ref) {
        ref.removeEventListener('copy', (e) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          return false;
        });
      }
    };
  }, [ref]);

  const setupLinkService = () => {
    const viewer = {
      scrollPageIntoView: ({ pageNumber }: { pageNumber: number }) => {
        // Handling jumping to internal links target
        const pages = new Array(pdfDocument?.numPages);
        const page = pages[pageNumber - 1];

        if (page) {
          // Scroll to the page automatically
          page.scrollIntoView();
        }
      }
    };
    linkService.setDocument(pdfDocument);
    linkService.setViewer(viewer);
  };

  GlobalWorkerOptions.workerSrc = workerSrc;

  useEffect(() => {
    if (windowSize.height && windowSize.width) {
      if (min('lg')) {
        setMaxHeight(windowSize.height - 100 - 80);
        return setMaxWidth(Math.floor(windowSize.width / 2));
      }
      setMaxHeight(windowSize.height - 80 - 48 - 56);
      setMaxWidth(windowSize.width);
      setHighlightActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize]);

  useEffect(() => {
    if (book) {
      getDocument({
        url: book.bookUrl as string
      })
        .promise.then((document) => {
          setPdfDocument(document);
          setLoading(false);
        })
        .catch((e) => {
          setError(e);
          setLoading(false);
        });
      setupLinkService();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book]);

  const createToc = useCallback(
    async (outline: OutlineItemProps[]) => {
      const newOutline = await Promise.all(
        outline.map(async (item) => {
          const num = await pdfDocument?.getPageIndex(item.dest?.[0]);
          return {
            ...item,
            ...{ pageNumber: num }
          };
        })
      );
      setToc(newOutline);
    },
    [pdfDocument]
  );

  useEffect(() => {
    if (pdfDocument) {
      setPageAmount(pdfDocument.numPages);
      pdfDocument.getOutline().then((res) => {
        if (res) {
          createToc(res);
        }
      });
    }
  }, [createToc, pdfDocument]);

  const prevPage = useCallback(() => {
    if (min('lg') && pageNum - 2 > 0) {
      return setPageNum(pageNum - 2);
    }
    if (pageNum - 1 > 0) {
      return setPageNum(pageNum - 1);
    }
  }, [min, pageNum]);

  const nextPage = useCallback(() => {
    if (min('lg') && pageNum + 2 <= pageAmount) {
      return setPageNum(pageNum + 2);
    }
    if (pageNum + 1 <= pageAmount) {
      return setPageNum(pageNum + 1);
    }
  }, [min, pageAmount, pageNum]);

  const setLocation = useCallback((loc: number) => {
    setPageNum(loc);
  }, []);

  useKeyPress(37, prevPage);
  useKeyPress(39, nextPage);

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
    }
    setHighlightActive(!highlightActive);
  }, [setHighlightActive, highlightActive]);

  const buttonSize = min('lg') ? 'lg' : 'md';

  return (
    <div className={styles.root}>
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
            disabled={error}
          />
        </Gutter.Item>
        <Gutter.Item className={styles.tocButton}>
          <Button
            rounded={false}
            iconRight={{ name: 'list-ul' }}
            onClick={toggleTocVisible}
            color="alpha93"
            disabled={!toc || error}
            fullWidth={!min('sm')}
            className={styles.controlButton}
            size={buttonSize}
            stripPadding={!min('sm')}
          />
          <PdfTocRender
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
            fullWidth={!min('sm')}
            className={styles.controlButton}
            size={buttonSize}
            stripPadding={!min('sm')}
            disabled={error}
          />
          <BookmarksRender
            bookId={book.id as string}
            visible={bookmarksVisible}
            currentLocation={pageNum}
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
              fullWidth={!min('sm')}
              className={styles.controlButton}
              size={buttonSize}
              stripPadding={!min('sm')}
              disabled={error}
            />
          </Gutter.Item>
        )}
      </Gutter>
      {error && (
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
      )}
      {!error && pdfDocument && (
        <div className={styles.pdfWrapper}>
          <div className={styles.pdfViewer} ref={viewerRef}>
            <PdfPage
              pdf={pdfDocument}
              pageNumber={pageNum}
              linkService={linkService}
              maxHeight={maxHeight}
              maxWidth={maxWidth}
              bookId={id}
              highlightActive={highlightActive}
            />
            {min('lg') && pageNum < pageAmount && (
              <PdfPage
                pdf={pdfDocument}
                pageNumber={pageNum + 1}
                linkService={linkService}
                maxHeight={maxHeight}
                maxWidth={maxWidth}
                bookId={id}
                highlightActive={highlightActive}
              />
            )}
          </div>
        </div>
      )}
      {loading && (
        <div className={styles.spinnerHolder}>
          <Spinner visible />
        </div>
      )}
      <div className={styles.pageControlWrapper}>
        <Gutter
          className={styles.pageControlContainer}
          gutter={{ left: { root: 0, sm: 2 }, bottom: 0 }}
        >
          <Gutter.Item>
            <Button
              onClick={prevPage}
              rounded={false}
              iconRight={{ name: 'angle-left' }}
              color="alpha93"
              fullWidth={!min('sm')}
              size={buttonSize}
              disabled={error}
            />
          </Gutter.Item>
          <Gutter.Item>
            <Button
              onClick={nextPage}
              rounded={false}
              iconRight={{ name: 'angle-right' }}
              color="alpha93"
              fullWidth={!min('sm')}
              size={buttonSize}
              disabled={error}
            />
          </Gutter.Item>
        </Gutter>
      </div>
    </div>
  );
};
