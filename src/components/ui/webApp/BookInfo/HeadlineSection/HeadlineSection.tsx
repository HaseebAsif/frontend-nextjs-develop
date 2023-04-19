import React, { FC } from 'react';

import { useIntl } from 'react-intl';

import { texts } from './HeadlineSection.texts';

import styles from './HeadlineSection.module.scss';

interface HeadlineSectionProps {
  title: string | undefined;
  author: string | undefined;
}

const HeadlineSection: FC<HeadlineSectionProps> = ({ title, author }) => {
  const intl = useIntl();
  return (
    <div className={styles.headline}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subTitle}>
        <span className={styles.authorLabel}>
          {intl.formatMessage(texts.authorLabel)}
        </span>
        <span>{author}</span>
      </h2>
    </div>
  );
};

export default HeadlineSection;
