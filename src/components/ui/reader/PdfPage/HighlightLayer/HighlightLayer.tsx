/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FC, useEffect, useRef } from 'react';

import { Highlight, Scalars } from 'types/graphql';
import { getPixelRatio } from 'utils';

import styles from './HighlightLayer.module.scss';

interface HighlightsProps {
  [id: string]: Highlight;
}
interface mousePositionProps {
  clientX: number;
  clientY: number;
}
interface HighlightLayerProps {
  scale?: number;
  pageNumber: number;
  renderedHighlights: HighlightsProps;
  removeHighlightSetter: (id: Scalars['ID']) => void;
  mousePosSetter: (coords: mousePositionProps) => void;
}

const HighlightLayer: FC<HighlightLayerProps> = ({
  scale = 1,
  pageNumber,
  renderedHighlights,
  removeHighlightSetter,
  mousePosSetter
}) => {
  return (
    <>
      {Object.values(renderedHighlights).map((item: any, i: number) => {
        return (
          <HighlightLayerItem
            item={item}
            // eslint-disable-next-line react/no-array-index-key
            key={`text-highlight-item-${pageNumber}-${i}`}
            scale={scale}
            setter={removeHighlightSetter}
            mousePosSetter={mousePosSetter}
          />
        );
      })}
    </>
  );
};

interface HighlightLayerItemProps {
  item: Highlight;
  scale: number;
  setter: (id: Scalars['ID']) => void;
  mousePosSetter: (coords: mousePositionProps) => void;
}

const HighlightLayerItem: FC<HighlightLayerItemProps> = ({
  item,
  scale,
  setter,
  mousePosSetter
}) => {
  useEffect(() => {
    const current = itemRef.current;
    if (current) {
      current.addEventListener('mousedown', (e) => {
        mousePosSetter(e);
      });
    }
    return () => {
      if (current) {
        current.removeEventListener('mousedown', (e) => {
          mousePosSetter(e);
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const itemRef = useRef<HTMLSpanElement>(null);
  const rects = JSON.parse(item.highlight);
  const pixelRatio = getPixelRatio();
  return rects.map((rect: any, i: number) => (
    <HighlightItemRectRender
      // eslint-disable-next-line react/no-array-index-key
      key={`${rect}-${i}`}
      highlightId={item.id}
      rect={rect}
      setter={setter}
      mousePosSetter={mousePosSetter}
      scale={scale}
      pixelRatio={pixelRatio}
    />
  ));
};

interface HighlightItemRectProps {
  highlightId: Scalars['ID'];
  rect: any;
  scale: number;
  pixelRatio?: number;
  setter: (id: Scalars['ID']) => void;
  mousePosSetter: (coords: mousePositionProps) => void;
}

const HighlightItemRectRender: FC<HighlightItemRectProps> = ({
  highlightId,
  rect,
  scale = 1,
  pixelRatio = 1,
  setter,
  mousePosSetter
}) => {
  useEffect(() => {
    if (itemRef.current) {
      itemRef.current.addEventListener('mousedown', (e) => {
        mousePosSetter(e);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const itemRef = useRef<HTMLSpanElement>(null);
  return (
    <span
      ref={itemRef}
      className={styles.highlightItem}
      onClick={() => setter(highlightId)}
      style={{
        height: rect.height * scale * pixelRatio,
        width: rect.width * scale * pixelRatio,
        top: rect.top * scale * pixelRatio,
        left: rect.left * scale * pixelRatio
      }}
    />
  );
};

export default HighlightLayer;
