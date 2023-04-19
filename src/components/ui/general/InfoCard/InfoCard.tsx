import React, { useCallback } from 'react';

import { Icon } from 'components/ui/general';
import { Names } from 'types/icon';

import styles from './InfoCard.module.scss';

export interface InfoCardProps {
  logo: Names;
  text: string;
  highlight: string;
}

export const InfoCard = ({ logo, text, highlight }: InfoCardProps) => {
  const textWithHighlight = useCallback(() => {
    if (text.search(highlight) === -1) {
      return <span>{text}</span>;
    }
    const textArray = text.split(highlight);
    textArray.splice(1, 0, highlight);
    const textElement = textArray.map((partialText: string, index: number) => {
      if (index === textArray.indexOf(highlight)) {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <span key={index} className={styles.highlightedWord}>
            {partialText}
          </span>
        );
      }
      return (
        // eslint-disable-next-line react/no-array-index-key
        <span key={index}>{partialText}</span>
      );
    });
    return textElement;
  }, [highlight, text]);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.logoContainer}>
        <Icon name={logo} className={styles.icon} />
      </div>
      <h3 className={styles.cardTextContainer}>{textWithHighlight()}</h3>
    </div>
  );
};
