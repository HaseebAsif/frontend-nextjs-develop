import { ReactNode, useMemo } from 'react';

import { createPortal } from 'react-dom';

import { useIsBrowser } from 'hooks/useIsBrowser';

interface PortalProps {
  children: ReactNode;
  selector?: string;
}

export const Portal = ({ children, selector = '#portal' }: PortalProps) => {
  const isBrowser = useIsBrowser();
  const portalSelector = useMemo(
    () => (!isBrowser ? null : document.querySelector(selector) ?? null),
    [selector, isBrowser]
  );

  if (children && portalSelector) {
    return createPortal(children, portalSelector);
  }

  return null;
};
