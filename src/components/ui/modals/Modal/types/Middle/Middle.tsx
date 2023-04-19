import React, { ReactNode, useCallback, useRef } from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';

import { Durations, Easings } from 'consts/transition';
import { useTrapFocus } from 'hooks';

import styles from './Middle.module.scss';

interface MiddleProps {
  children: ReactNode;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export const Middle = ({ children, onClose, size = 'md' }: MiddleProps) => {
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
        [styles[`${size}Size`]]: size
      })}
      onMouseDown={onMouseDownOverlay}
    >
      <div className={styles.body}>
        <motion.div
          key="middle"
          ref={trapFocusRef}
          className={styles.dialog}
          transition={{
            duration: Durations.Fast,
            ease: Easings.InOut
          }}
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          exit={{ y: 50 }}
        >
          <div ref={contentRef} className={styles.content}>
            {children}
            <button
              type="button"
              className={styles.close}
              onClick={onClose}
              aria-label="Close modal"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
