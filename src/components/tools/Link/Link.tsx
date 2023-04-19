import React, {
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode
} from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

export interface LinkProps extends NextLinkProps {
  children: ReactNode;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  'data-cy'?: string;
  activeClassName?: string;
}

export const Link = ({
  children,
  className,
  target,
  onClick,
  // TODO fix active class name
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  activeClassName,
  ...props
}: LinkProps) => {
  return (
    <NextLink
      {...props}
      className={className}
      target={target}
      onClick={onClick}
      data-cy={props['data-cy']}
    >
      {children}
    </NextLink>
  );
};
