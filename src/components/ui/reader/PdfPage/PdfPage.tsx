import React, { FC, useCallback, useEffect, useRef, useState } from 'react';

import { debounce } from 'lodash';
import { RenderingCancelledException } from 'pdfjs-dist/legacy/build/pdf';
import {
  PDFDocumentProxy,
  PDFPageProxy
  // eslint-disable-next-line import/no-unresolved
} from 'pdfjs-dist/types/src/display/api';
import { useIntl } from 'react-intl';

import { Button } from 'components/ui/general';
import {
  Highlight,
  Scalars,
  useCreateHighlightMutation,
  useDeleteHighlightMutation,
  useHighlightsLazyQuery
} from 'types/graphql';
import { getPixelRatio, LinkService, optimizeClientRects } from 'utils';

import AnnotationLayer from './AnnotationLayer/AnnotationLayer';
import HighlightLayer from './HighlightLayer/HighlightLayer';
import { texts } from './PdfPage.texts';
import TextLayer from './TextLayer/TextLayer';

import styles from './PdfPage.module.scss';

interface PdfPageProps {
  pdf: PDFDocumentProxy;
  pageNumber: number;
  bookId: Scalars['ID'];
  linkService: LinkService;
  maxHeight?: number;
  maxWidth?: number;
  highlightActive: boolean;
}
interface HighlightsProps {
  [id: string]: Highlight;
}
interface mousePositionProps {
  clientX: number;
  clientY: number;
}

export const PdfPage: FC<PdfPageProps> = ({
  pdf,
  pageNumber,
  bookId,
  linkService,
  maxHeight,
  maxWidth,
  highlightActive
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const [page, setPage] = useState<PDFPageProxy | undefined>(undefined);
  const [scale, setScale] = useState<number>(0);
  const [highlightToAdd, setHighlightToAdd] = useState<Highlight[] | undefined>(
    undefined
  );
  const [renderedHighlights, setRenderedHighlights] = useState<HighlightsProps>(
    {}
  );
  const [highlightIdToRemove, setHighlightIdToRemove] = useState<
    Scalars['ID'] | undefined
  >(undefined);
  const [
    getHighlights,
    { data: { highlights: { edges: highlights = [] } = {} } = {} }
  ] = useHighlightsLazyQuery({
    fetchPolicy: 'no-cache'
  });
  const [createHighlightMutation] = useCreateHighlightMutation();
  const [removeHighlightMutation] = useDeleteHighlightMutation();
  const [mousePos, setMousePos] = useState<mousePositionProps | null>(null);
  const intl = useIntl();
  const pixelRatio = getPixelRatio();

  const getScale = useCallback(() => {
    if (page && maxWidth && maxWidth > 0 && maxHeight && maxHeight > 0) {
      const viewport = page.getViewport({ scale: 1 });
      if (viewport.width > maxWidth || viewport.height > maxHeight) {
        const heightScale = maxHeight / viewport?.height / pixelRatio;
        const widthScale = maxWidth / viewport?.width / pixelRatio;
        if (heightScale < 1 && widthScale < 1) {
          return setScale(Math.min(heightScale, widthScale));
        }
        return setScale(Math.min(heightScale, widthScale));
      }
      if (
        viewport.width > 0 &&
        viewport.width < maxWidth &&
        viewport.height > 0 &&
        viewport.height < maxHeight
      ) {
        const heightScale = maxHeight / viewport?.height / pixelRatio;
        const widthScale = maxWidth / viewport?.width / pixelRatio;
        return setScale(Math.min(heightScale, widthScale));
      }
    }
  }, [maxHeight, maxWidth, page, pixelRatio]);

  useEffect(() => {
    setPage(undefined);
    pdf?.getPage(pageNumber).then((pageRes) => {
      setPage(pageRes);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, pdf]);

  const renderViewport = () => {
    return page?.getViewport({ scale: scale * pixelRatio });
  };

  const viewport = () => {
    return page?.getViewport({ scale });
  };

  useEffect(() => {
    setScale(0);
    if (page) {
      getScale();
    }
  }, [getScale, maxHeight, maxWidth, page]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSetHighlightToAdd = useCallback(
    debounce((highlight) => {
      setHighlightToAdd(highlight);
    }, 250),
    []
  );

  const removeHighlight = async (id: Scalars['ID']) => {
    const removeHighlightRes = await removeHighlightMutation({
      variables: { id }
    });
    if (removeHighlightRes?.data?.deleteHighlight?.success) {
      const newRenderedHighlights = renderedHighlights;
      delete newRenderedHighlights[id];
      setRenderedHighlights(newRenderedHighlights);
      setHighlightIdToRemove(undefined);
    }
  };

  const addHighlight = async () => {
    if (!highlightIdToRemove) {
      const highlightJson = JSON.stringify(highlightToAdd);
      const res = await createHighlightMutation({
        variables: {
          input: {
            bookId,
            pdfPage: pageNumber,
            highlight: highlightJson
          }
        }
      });
      if (res.data?.createHighlight?.id) {
        setRenderedHighlights({
          ...renderedHighlights,
          ...{ [res.data?.createHighlight.id]: res.data.createHighlight }
        });
      }
      document.getSelection()?.removeAllRanges();
    }
  };

  useEffect(() => {
    if (highlightToAdd?.length && highlightActive) {
      addHighlight();
    }
    setHighlightToAdd(undefined);
    document.getSelection()?.removeAllRanges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highlightToAdd]);

  useEffect(() => {
    setRenderedHighlights({});
    getHighlights({
      variables: { filter: { bookId, pdfPage: pageNumber } }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  useEffect(() => {
    if (highlights.length) {
      setRenderedHighlights(
        highlights.reduce((acc, h) => {
          return { ...acc, ...{ [h.id]: h } };
        }, {})
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highlights]);

  const getXCoord = useCallback(() => {
    if (mousePos) {
      return mousePos.clientX - 50;
    }
  }, [mousePos]);
  const getYCoord = useCallback(() => {
    if (mousePos) {
      return mousePos.clientY - 50;
    }
  }, [mousePos]);

  const onSelectionChange = () => {
    const selection = document.getSelection();
    const range = selection?.rangeCount
      ? document.getSelection()?.getRangeAt(0)
      : null;

    if (range) {
      const clientRects = Array.from(range.getClientRects());
      const offset = canvasRef?.current?.getBoundingClientRect();

      const rects = clientRects
        ?.filter((rect) => {
          if (!canvasRef.current || !offset) {
            return false;
          }
          if (
            // filter out nondesierd selected elements
            rect.height >= canvasRef.current.clientHeight ||
            rect.width >= canvasRef.current.clientWidth ||
            rect.width < 1 ||
            rect.left - offset.left < 0 ||
            rect.left - offset.left > canvasRef.current.clientWidth
          ) {
            return false;
          }
          return true;
        })
        .map((rect) => {
          return {
            top: (rect.top - offset!.top) / scale / pixelRatio,
            left: (rect.left - offset!.left) / scale / pixelRatio,
            width: rect.width / scale / pixelRatio,
            height: rect.height / scale / pixelRatio
          };
        });
      const optimized = optimizeClientRects(rects);

      debounceSetHighlightToAdd(optimized);
    }
  };

  const mousePosSetter = (coords: mousePositionProps) => {
    setMousePos(coords);
  };

  const onMouseDown = (e: MouseEvent) => {
    const element = document.getElementById(`pdf-page-render${pageNumber}`);
    const target = e.target as Node;
    document.getSelection()?.removeAllRanges();
    if (element?.contains(target)) {
      setHighlightIdToRemove(undefined);
    }
  };

  useEffect(() => {
    const mouseDown = (e: MouseEvent) => {
      onMouseDown(e);
    };
    const current = pageRef.current;
    if (scale && current) {
      current.addEventListener('mousedown', mouseDown);
      current.addEventListener('mouseup', onSelectionChange);
    }
    return () => {
      current?.removeEventListener('mousedown', mouseDown);
      current?.removeEventListener('mouseup', onSelectionChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scale]);

  const removeHighlightSetter = useCallback(
    (id: Scalars['ID']) => {
      if (highlightActive) {
        setHighlightIdToRemove(id);
      }
    },
    [highlightActive]
  );

  useEffect(() => {
    if (canvasRef.current) {
      if (page && renderViewport && viewport && scale) {
        const renderSpecs = renderViewport();
        const viewportSpecs = viewport();
        const transform = [pixelRatio, 0, 0, pixelRatio, 0, 0];
        canvasRef.current.height = 0;
        canvasRef.current.width = 0;

        if (renderSpecs) {
          canvasRef.current.width = renderSpecs.width * pixelRatio;
          canvasRef.current.height = renderSpecs.height * pixelRatio;

          const renderContext = {
            canvasContext: canvasRef.current?.getContext('2d') || {},
            viewport: renderSpecs,
            transform
          };

          const pageRenderer = page.render(renderContext);
          if (viewportSpecs) {
            canvasRef.current.style.width = `${Math.floor(
              viewportSpecs.width * pixelRatio
            )}px`;
            canvasRef.current.style.height = `${Math.floor(
              viewportSpecs.height * pixelRatio
            )}px`;
          }
          return () => {
            pageRenderer.promise.catch((err: any) => {
              if (!(err instanceof RenderingCancelledException)) {
                throw err;
              }
            });
            pageRenderer.cancel();
          };
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, scale]);

  return (
    <div
      className="react-pdf__Page"
      data-page-number={pageNumber}
      style={{ position: 'relative' }}
      ref={pageRef}
    >
      {highlightIdToRemove && highlightActive ? (
        <div
          className={styles.removeTipContainer}
          style={{ left: getXCoord(), top: getYCoord() }}
        >
          <div className={styles.removeTipContent}>
            <Button
              color="primary"
              fullWidth
              onClick={() => {
                removeHighlight(highlightIdToRemove!);
              }}
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
      ) : undefined}
      <div id={`pdf-page-render${pageNumber}`}>
        <canvas
          className="react-pdf__Page__canvas"
          dir="ltr"
          ref={canvasRef}
          style={{
            display: 'block'
          }}
        />
        <TextLayer page={page} scale={scale} />
        <AnnotationLayer page={page} linkService={linkService} scale={scale} />
        <HighlightLayer
          scale={scale}
          pageNumber={pageNumber}
          renderedHighlights={renderedHighlights}
          removeHighlightSetter={removeHighlightSetter}
          mousePosSetter={mousePosSetter}
        />
      </div>
    </div>
  );
};
