import { useCallback, RefObject } from 'react';

import { useEventListener } from 'hooks';
import { getRefElement } from 'utils';

export const useClickOutside = (
  element: RefObject<Element> | null,
  callback: (event: MouseEvent) => void
): void => {
  const handleClick = useCallback(
    (event) => {
      console.log(getRefElement(element));
      console.log(event.target);
      if (!getRefElement(element)?.contains(event.target)) {
        console.log('useCLick');
        callback(event);
      }
    },
    [callback, element]
  );

  useEventListener({
    type: 'click',
    listener: handleClick
  });
};
