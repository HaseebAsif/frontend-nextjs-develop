import { RefObject } from 'react';

export const getRefElement = <T>(
  element?: RefObject<Element> | T
): Element | T | undefined | null => {
  // @ts-ignore
  if (element && 'current' in element) {
    return element.current;
  }

  return element;
};
