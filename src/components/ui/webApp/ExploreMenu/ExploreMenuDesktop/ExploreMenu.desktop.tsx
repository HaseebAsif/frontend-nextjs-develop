import React, { useRef, useMemo } from 'react';

import { useIntl } from 'react-intl';

import { Link } from 'components/tools';
import { Paths } from 'consts/router';
import { useClickOutside } from 'hooks';
import { Subject } from 'types/graphql';
import { subjectTranslations } from 'utils/messages';

import { texts } from '../ExploreMenu.texts';

import styles from './ExploreMenuDesktop.module.scss';

interface ExploreMenuProps {
  updateExploreMenuState: (stateValue: boolean) => void;
  subjectArray: [string, Subject][];
}

export const ExploreMenu = ({
  updateExploreMenuState,
  subjectArray
}: ExploreMenuProps) => {
  const menuRef = useRef<any>(null);
  const intl = useIntl();

  useClickOutside(menuRef, () => updateExploreMenuState(false));

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

  return (
    <div ref={menuRef} className={styles.desktopContainer}>
      <div className={styles.desktopInnerContainer}>
        <h6 className={styles.title}>
          {intl.formatMessage(texts.exploreSubjects)}
        </h6>
        <ul className={styles.list}>
          {sortedTranslalatedSubjects.map(
            ([translatedSubject, subjectEnum]) => (
              <li key={translatedSubject} className={styles.listItem}>
                <Link
                  className={styles.link}
                  href={Paths.BOOKS({ subject: subjectEnum as Subject })}
                  onClick={() => {
                    updateExploreMenuState(false);
                  }}
                >
                  <span className={styles.subject}>{translatedSubject}</span>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
