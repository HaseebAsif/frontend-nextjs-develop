import React, { ReactNode } from 'react';

import classNames from 'classnames';

import {
  AccordionItem,
  AccordionLabel,
  AccordionContent
} from 'components/ui/general/Accordion/subComponents';
import { passPropsToChildren } from 'utils';

import { AccordionContextProvider } from '../../../../context/accordion';

import styles from './Accordion.module.scss';

export interface AccordionProps {
  children: ReactNode;
  multiple?: boolean;
  activeIds?: string[];
  className?: string;
}

const Accordion = ({
  children,
  activeIds,
  className,
  ...props
}: AccordionProps) => {
  return (
    <AccordionContextProvider activeIds={activeIds}>
      <div className={classNames(styles.root, className)}>
        {passPropsToChildren(children, props)}
      </div>
    </AccordionContextProvider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Label = AccordionLabel;
Accordion.Content = AccordionContent;

export default Accordion;
