import React, { FC } from 'react';

import { Grid } from 'components/ui/general';
import { Attribute } from 'routes/BookInfo/BookInfo';

import styles from './AttributesSection.module.scss';

interface AttributesSectionProps {
  attributes: Attribute[];
}

const AttributesSection: FC<AttributesSectionProps> = ({ attributes }) => {
  return (
    <div className={styles.box}>
      {attributes.map((attribute) => (
        <Grid key={attribute.id} className={styles.attribute}>
          <Grid.Item width={4}>
            <span className={styles.label}>{attribute.label}</span>
          </Grid.Item>
          <Grid.Item width={8}>
            <span className={styles.content}>{attribute.content}</span>
          </Grid.Item>
        </Grid>
      ))}
    </div>
  );
};

export default AttributesSection;
