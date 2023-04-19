import React, { useEffect, useCallback, ReactNode } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { Portal } from 'components/tools';
import { Middle, Side } from 'components/ui/modals/Modal/types';
import { Durations, Easings } from 'consts/transition';
import { useKeyPress } from 'hooks';
import { Types, Aligns } from 'types/modal';
import { preventScroll } from 'utils';

import styles from './Modal.module.scss';

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  type?: Types;
  align?: Aligns;
  ariaLabel?: string;
  middleSize?: 'sm' | 'md' | 'lg';
}

export const Modal = ({
  children,
  isOpen,
  onClose,
  type,
  align,
  ariaLabel,
  middleSize
}: ModalProps) => {
  const closeModal = useCallback(() => {
    if (isOpen) {
      onClose();
    }
  }, [isOpen, onClose]);

  useKeyPress(27, () => {
    closeModal();
  });

  useEffect(() => {
    preventScroll(isOpen);
  }, [isOpen]);

  useEffect(() => {
    return () => preventScroll(false);
  }, []);

  const getModalType = useCallback(() => {
    switch (type) {
      case 'middle':
        return (
          <Middle onClose={closeModal} size={middleSize}>
            {children}
          </Middle>
        );

      case 'side':
        return (
          <Side onClose={closeModal} align={align}>
            {children}
          </Side>
        );

      default:
        return (
          <Middle onClose={closeModal} size={middleSize}>
            {children}
          </Middle>
        );
    }
  }, [children, closeModal, type, align, middleSize]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal selector="#modal">
          <motion.div
            key="root"
            role="dialog"
            aria-label={ariaLabel}
            className={styles.root}
            transition={{ duration: Durations.Fast, ease: Easings.InOut }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.inner}>{getModalType()}</div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  );
};
