import React, { ReactNode, useCallback, useRef } from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';

import { Durations, Easings } from 'consts/transition';
import { useTrapFocus } from 'hooks';
import { Aligns } from 'types/modal';

import styles from './Side.module.scss';

interface SideProps {
  children: ReactNode;
  onClose: () => void;
  align?: Aligns;
}

export const Side = ({ children, onClose, align = 'right' }: SideProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const trapFocusRef = useTrapFocus({
    updateNodes: true
  });

  const onMouseDownOverlay = useCallback(
    (event) => {
      if (!contentRef.current?.contains(event.target)) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <div
      role="button"
      tabIndex={0}
      className={classNames(styles.root, {
        [styles[`${align}Align`]]: align
      })}
      onMouseDown={onMouseDownOverlay}
    >
      <motion.div
        key="side"
        ref={trapFocusRef}
        className={styles.inner}
        transition={{
          duration: Durations.Fast,
          ease: Easings.InOut
        }}
        initial={{ opacity: 0, x: `${align === 'right' ? '' : '-'}100%` }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: `${align === 'right' ? '' : '-'}100%` }}
      >
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close modal"
        />
      </motion.div>
    </div>
  );
};
