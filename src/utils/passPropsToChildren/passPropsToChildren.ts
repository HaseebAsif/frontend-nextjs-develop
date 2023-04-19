import { Children, isValidElement, cloneElement, ReactNode } from 'react';

export const passPropsToChildren = (children: ReactNode, props: any) =>
  Children.map(children, (child) => {
    return isValidElement(child) ? cloneElement(child, { ...props }) : child;
  });
