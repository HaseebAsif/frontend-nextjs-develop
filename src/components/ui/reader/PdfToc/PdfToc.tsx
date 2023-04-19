import React, { useCallback } from 'react';

import classNames from 'classnames';
import { useIntl } from 'react-intl';
import Truncate from 'react-text-truncate';

import { Portal } from 'components/tools';
import { Button, Icon } from 'components/ui/general';
import { useBreakpoint } from 'hooks';

import { texts } from './PdfToc.texts';

import styles from './PdfToc.module.scss';

interface TocRenderProps {
  visible: boolean;
  toc: Array<OutlineItemProps> | undefined;
  setLocation: (href: number) => void;
  close: () => void;
}

export interface OutlineItemProps {
  title: string;
  bold: boolean;
  italic: boolean;
  color: Uint8ClampedArray;
  dest: string | any[] | null;
  url: string | null;
  unsafeUrl: string | undefined;
  newWindow: boolean | undefined;
  count: number | undefined;
  items: any[];
  pageNumber?: number;
}

interface TocItemProps {
  label: string;
  goToPage: () => void;
}

export const PdfTocRender = ({
  visible,
  toc,
  setLocation,
  close
}: TocRenderProps) => {
  const { min } = useBreakpoint();
  const intl = useIntl();

  const onNavigate = useCallback(
    (location) => {
      setLocation(location);
      close();
    },
    [close, setLocation]
  );

  if (!visible) {
    return null;
  }

  return (
    <>
      {min('lg') ? (
        <div className={styles.tocPicker}>
          <div className={styles.controls}>
            <div
              className={classNames(
                styles.contentButton,
                styles.titleRow,
                styles.center
              )}
            >
              <h6> {intl.formatMessage(texts.tocMenuTitle)}</h6>
              <Button
                size="md"
                onClick={close}
                naked
                rounded={false}
                className={styles.closeButton}
              >
                <Icon name="times" />
              </Button>
            </div>
          </div>
          <div className={styles.scroll}>
            {toc?.map((item, i: number) => (
              <TocItem
                label={item.title}
                goToPage={() => onNavigate(item.pageNumber)}
                // eslint-disable-next-line react/no-array-index-key
                key={i}
              />
            ))}
          </div>
        </div>
      ) : (
        <Portal>
          <div className={styles.root}>
            <div className={styles.tocPicker}>
              <div className={styles.controls}>
                <div
                  className={classNames(
                    styles.contentButton,
                    styles.titleRow,
                    styles.center
                  )}
                >
                  <h6>{'Innehåll'.toString()}</h6>
                  <Button
                    size="md"
                    onClick={close}
                    naked
                    rounded={false}
                    className={styles.closeButton}
                  >
                    <Icon name="times" />
                  </Button>
                </div>
              </div>
              <div className={styles.scroll}>
                {toc?.map((item, i: number) => (
                  <TocItem
                    label={item.title}
                    goToPage={() => onNavigate(item.pageNumber)}
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

const TocItem = ({ label, goToPage }: TocItemProps) => {
  return (
    <div className={classNames(styles.tocItem, styles.hoverIcon)}>
      <Button
        size="md"
        onClick={goToPage}
        naked
        rounded={false}
        stripPadding
        fullWidth
      >
        <div className={styles.contentButton}>
          <div className={styles.titleWrapper}>
            <Truncate
              truncateText="..."
              line={2}
              containerClassName={styles.title}
              text={label}
            />
          </div>
          <div className={styles.titleIconWrapper}>
            <Icon name="arrow-right" />
          </div>
        </div>
      </Button>
    </div>
  );
};
