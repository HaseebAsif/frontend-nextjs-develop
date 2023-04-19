import React, { useEffect, useContext, useMemo } from 'react';

import Link from 'next/link';
import { useIntl } from 'react-intl';

import { Grid } from 'components/ui/general';
import { Paths } from 'consts/router';
import { AccordionContext } from 'context/accordion';
import { Subject } from 'types/graphql';
import { subjectTranslations } from 'utils/messages';

import styles from './ExploreMenuMobile.module.scss';

interface ExploreMenuProps {
  burgerMenuIsOpen: boolean;
  subjectArray: [string, Subject][];
  updateBurgerMenuState: (stateValue: boolean) => void;
}

const ExploreMenu = ({
  subjectArray,
  burgerMenuIsOpen,
  updateBurgerMenuState
}: ExploreMenuProps) => {
  const [, setActiveItems] = useContext(AccordionContext);
  const intl = useIntl();

  const sortedTranslalatedSubjects = useMemo(
    () =>
      subjectArray
        .map(([key, subject]) => {
          return [
            intl.formatMessage(
              (subjectTranslations as { [lorem: string]: any })[key]
            ),
            subject
          ];
        })
        .sort((a, b) => {
          if (a[0] > b[0]) return 1;
          if (a[0] < b[0]) return -1;
          return 0;
        }),
    [subjectArray, intl]
  );

  useEffect(() => {
    if (!burgerMenuIsOpen) {
      setActiveItems([]);
    }
  }, [burgerMenuIsOpen, setActiveItems]);

  return (
    <Grid gutter={{ bottom: 3 }} className={styles.mobileGrid}>
      {sortedTranslalatedSubjects.map(([translatedSubject, subjectEnum]) => {
        return (
          <Grid.Item key={translatedSubject} width={{ root: 12 }}>
            <Link
              href={Paths.BOOKS({ subject: subjectEnum as Subject })}
              onClick={() => {
                updateBurgerMenuState(false);
              }}
            >
              <span className={styles.subject}>{translatedSubject}</span>
            </Link>
          </Grid.Item>
        );
      })}
    </Grid>
  );
};

export default ExploreMenu;
