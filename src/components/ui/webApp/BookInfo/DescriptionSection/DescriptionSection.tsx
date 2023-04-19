import React, { FC, useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useIntl } from 'react-intl';

import { Button } from 'components/ui/general';
import { Durations, Easings } from 'consts/transition';

import { texts } from './DescriptionSection.texts';

import styles from './DescriptionSection.module.scss';

interface DescriptionSectionProps {
  description: string | undefined;
}

const DescriptionSection: FC<DescriptionSectionProps> = ({ description }) => {
  const intl = useIntl();
  const [showDescription, setShowDescription] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const ref = useRef<HTMLDivElement>(null);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  useEffect(() => {
    const height = ref.current?.clientHeight;
    setShowButton(!!(height && height > 290));
  }, []);

  return (
    <div className={styles.box}>
      <span className={styles.descriptionHeadline}>
        {intl.formatMessage(texts.descriptionHeadline)}
      </span>
      <motion.div
        animate={!showDescription ? 'closed' : 'open'}
        variants={{
          open: { height: 'auto' },
          closed: { height: 290 }
        }}
        transition={{ duration: Durations.Fast, ease: Easings.InOut }}
        className={styles.textBox}
      >
        <p ref={ref}>{description}</p>
        {showButton && (
          <div
            className={classNames(styles.gradientBox, {
              [styles.gradientBoxNoShow]: showDescription
            })}
          />
        )}
      </motion.div>

      <div className={styles.buttonBox}>
        {showButton && (
          <Button
            rounded={false}
            className={classNames(styles.toggleDescriptionButton, {
              [styles.showDescription]: showDescription
            })}
            onClick={toggleDescription}
            naked
            iconRight={{
              name: 'angle-down'
            }}
          >
            {showDescription
              ? intl.formatMessage(texts.closeLabel)
              : intl.formatMessage(texts.readMoreLabel)}
          </Button>
        )}
      </div>
    </div>
  );
};

export default DescriptionSection;
