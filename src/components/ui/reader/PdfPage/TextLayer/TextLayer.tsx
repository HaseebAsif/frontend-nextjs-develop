import React, { FC, useEffect, useRef, useState } from 'react';

import {
  PDFPageProxy,
  TextItem,
  TextMarkedContent
  // eslint-disable-next-line import/no-unresolved
} from 'pdfjs-dist/types/src/display/api';

import { getPixelRatio } from 'utils';

interface TextLayerProps {
  page?: PDFPageProxy;
  scale?: number;
}

const TextLayer: FC<TextLayerProps> = ({ page, scale = 1 }) => {
  const [textItems, setTextitems] = useState<(TextItem | TextMarkedContent)[]>(
    []
  );
  const loadTextItems = () => {
    page?.getTextContent().then(({ items }) => setTextitems(items));
  };

  useEffect(() => {
    setTextitems([]);
    if (page) {
      loadTextItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (!page) {
    return null;
  }

  const pixelRatio = getPixelRatio();

  return (
    <div
      className="react-pdf__Page__textContent"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: `${page?.getViewport({ scale: scale * pixelRatio }).width}px`,
        height: `${page?.getViewport({ scale: scale * pixelRatio }).height}px`,
        color: 'transparent',
        transform: `translate(-50%, -50%)`,
        pointerEvents: 'none'
      }}
    >
      {textItems?.map((textItem, i) => {
        return (
          <TextLayerItem
            // eslint-disable-next-line react/no-array-index-key
            key={`text-layer-item-${i}`}
            item={textItem as TextItem}
            page={page}
            scale={scale}
            pixelRatio={pixelRatio}
          />
        );
      })}
    </div>
  );
};

interface TextLayerItemProps {
  item: TextItem;
  page: PDFPageProxy;
  scale?: number;
  pixelRatio?: number;
}

const TextLayerItem: FC<TextLayerItemProps> = ({
  item,
  page,
  scale = 1,
  pixelRatio = 1
}) => {
  const textItemRef = useRef<HTMLSpanElement | null>(null);

  const getTop = () => {
    const { transform } = item;

    const [, , , offsetY, , y] = transform;
    const [, , , yMax] = page.getViewport({ scale }).viewBox;
    return yMax - (y + offsetY);
  };
  const getLeft = () => {
    const { transform } = item;

    const [, , , , x] = transform;
    const [xMin] = page.getViewport({ scale }).viewBox;

    return x - xMin;
  };

  const getFontSize = () => {
    const { transform } = item;
    const [fontHeightPx] = transform;
    return fontHeightPx;
  };

  const alignTextItem = () => {
    const element = textItemRef.current;
    if (!element) {
      return;
    }

    element.style.transform = '';

    const { fontName, width } = item;
    element.style.fontFamily = `${fontName}, sans-serif`;

    // eslint-disable-next-line no-new
    new Promise((resolve) => {
      page.commonObjs.get(fontName, resolve);
    }).then((fontData: any) => {
      const fallbackFontName = fontData ? fontData.fallbackName : 'sans-serif';
      element.style.fontFamily = `${fontName}, ${fallbackFontName}`;

      const targetWidth = width * scale * pixelRatio;
      const bound = element.getBoundingClientRect();
      const actualWidth = bound.width || bound.y - bound.x;

      let transform = `scaleX(${targetWidth / actualWidth})`;

      const ascent = fontData ? fontData.ascent : 0;

      if (ascent) {
        transform += ` translateY(${(1 - ascent) * 100}%)`;
      }

      element.style.transform = transform;
    });
  };

  useEffect(() => {
    alignTextItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      ref={textItemRef}
      style={{
        userSelect: 'text',
        height: '1em',
        fontFamily: 'sans-serif',
        fontSize: `${getFontSize() * scale * pixelRatio}px`,
        lineHeight: `${getFontSize() * scale * pixelRatio}px`,
        position: 'absolute',
        top: getTop() * scale * pixelRatio,
        left: getLeft() * scale * pixelRatio,

        transformOrigin: 'left bottom',
        whiteSpace: 'pre',
        pointerEvents: 'all'
      }}
    >
      {item.str}
    </span>
  );
};

export default TextLayer;
