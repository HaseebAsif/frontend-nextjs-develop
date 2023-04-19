import React from 'react';

import { useIntl } from 'react-intl';

import { texts } from './MissingBookCover.texts';

import styles from './MissingBookCover.module.scss';

export const MissingBookCover = () => {
  const intl = useIntl();

  return (
    <div className={styles.fallbackBookCover}>
      <span className={styles.imageMissingText}>
        {intl.formatMessage(texts.missingImage)}
      </span>
    </div>
  );
};
