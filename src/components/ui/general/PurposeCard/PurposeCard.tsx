import React, { useCallback } from 'react';

import styles from './PurposeCard.module.scss';

export interface PurposeCardProps {
  text: string;
  highlight: string;
}

export const PurposeCard = ({ text, highlight }: PurposeCardProps) => {
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
          <span key={index} className={styles.highlight}>
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

  return <h4 className={styles.purposeContainer}>{textWithHighlight()}</h4>;
};
