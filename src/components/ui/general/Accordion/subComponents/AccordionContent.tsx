import React, { ReactNode } from 'react';

import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

import { Durations, Easings } from 'consts/transition';

import styles from '../Accordion.module.scss';

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

export const AccordionContent = ({
  children,
  className,
  ...props
}: AccordionContentProps) => {
  const { id, isActive } = props as { id: string; isActive: boolean };

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          key={id}
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: Durations.Fast, ease: Easings.InOut }}
          className={classNames(styles.content, className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
