import React, { FC, useCallback, useEffect, useRef } from 'react';

import { AnnotationLayer as Annotations } from 'pdfjs-dist/legacy/build/pdf';
// eslint-disable-next-line import/no-unresolved
import { AnnotationLayerParameters } from 'pdfjs-dist/types/src/display/annotation_layer';
// eslint-disable-next-line import/no-unresolved
import { PDFPageProxy } from 'pdfjs-dist/types/src/display/api';
// eslint-disable-next-line import/no-unresolved
import { PageViewport } from 'pdfjs-dist/types/src/display/display_utils';

import { getPixelRatio } from 'utils';
import { LinkService } from 'utils/linkService';

import styles from './AnnotationLayer.module.scss';

interface AnnotationLayerProps {
  page?: PDFPageProxy;
  linkService: LinkService;
  scale?: number;
}

const AnnotationLayer: FC<AnnotationLayerProps> = ({
  page,
  linkService,
  scale = 1
}) => {
  const pixelRatio = getPixelRatio();
  const annotationsDiv = useRef<HTMLDivElement | null>(null);
  const renderAnnotationLayer = useCallback(async () => {
    if (page) {
      const annotations = await page.getAnnotations();
      const viewport = page
        .getViewport({ scale: scale * pixelRatio })
        .clone({ dontFlip: true });

      const parameters: AnnotationLayerParameters = {
        annotations,
        div: annotationsDiv.current as HTMLDivElement,
        linkService,
        page,
        renderInteractiveForms: false,
        downloadManager: null,
        viewport: viewport as PageViewport
      };
      if (annotationsDiv.current) {
        annotationsDiv.current.innerHTML = '';
      }

      Annotations.render(parameters);
    }
  }, [linkService, page, pixelRatio, scale]);

  useEffect(() => {
    renderAnnotationLayer();
  }, [renderAnnotationLayer]);

  return <div ref={annotationsDiv} className={styles.annotationLayer} />;
};

export default AnnotationLayer;
