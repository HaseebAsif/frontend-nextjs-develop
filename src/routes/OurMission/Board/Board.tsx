import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useIntl } from 'react-intl';

import { Accordion, Grid, Tabs } from 'components/ui/general';
import { BoardAccordionSelectors } from 'consts/cypress';
import { useBreakpoint } from 'hooks';

import { texts } from './Board.texts';

import styles from './Board.module.scss';

export const Board = () => {
  const intl = useIntl();
  const { min } = useBreakpoint();

  const [isMd, setIsMd] = useState<boolean>();
  useEffect(() => {
    setIsMd(min('md'));
  }, [min]);
  useEffect(() => {
    console.log(isMd);
  }, [isMd]);

  const createPaneLabel = useCallback((header: string, role: string) => {
    return (
      <Grid className={styles.paneLabel}>
        <Grid.Item>
          <h6 className={styles.memberHeader}>{header}</h6>
        </Grid.Item>
        <Grid.Item>
          <p className={styles.memberRole}>{role}</p>
        </Grid.Item>
      </Grid>
    );
  }, []);

  const createPaneContent = useCallback((text: string) => {
    return (
      <div className={styles.contentWrapper}>
        <p className={styles.contentText}>{text}</p>
      </div>
    );
  }, []);

  const panes = useMemo(
    () => [
      {
        id: '1',
        label: createPaneLabel(
          intl.formatMessage(texts.chairmanHeader),
          intl.formatMessage(texts.chairmanRoleLabel)
        ),
        content: createPaneContent(intl.formatMessage(texts.chairmanParagraph1))
      },
      {
        id: '2',
        label: createPaneLabel(
          intl.formatMessage(texts.ceoHeader),
          intl.formatMessage(texts.ceoRoleLabel)
        ),
        content: createPaneContent(intl.formatMessage(texts.ceoParagraph1))
      },
      {
        id: '3',
        label: createPaneLabel(
          intl.formatMessage(texts.boardMember1Header),
          intl.formatMessage(texts.boardMemberRoleLabel)
        ),
        content: createPaneContent(
          intl.formatMessage(texts.boardMember1Paragraph1)
        )
      },
      {
        id: '4',
        label: createPaneLabel(
          intl.formatMessage(texts.boardMember2Header),
          intl.formatMessage(texts.chairmanRoleLabel)
        ),
        content: createPaneContent(
          intl.formatMessage(texts.boardMember2Paragraph1)
        )
      }
    ],
    [intl, createPaneContent, createPaneLabel]
  );

  return (
    <div className={styles.boardContainer}>
      <div className={styles.header}>
        <h3>{intl.formatMessage(texts.boardHeader)}</h3>
      </div>
      <div className={styles.boardWrapper}>
        {isMd ? (
          <Tabs className={styles.tabs} noStyleOnHover grid panes={panes} />
        ) : (
          <Accordion className={styles.accordionWrapper}>
            {panes.map(({ id, label, content }) => (
              <Accordion.Item
                key={id}
                id={id}
                className={styles.accordionItem}
                activeClassName={styles.accordionItemActive}
              >
                <Accordion.Label
                  className={styles.accordionLabel}
                  iconClosed="plus"
                  iconOpened="minus"
                >
                  <div data-cy={BoardAccordionSelectors.BOARD_ITEM_LABEL}>
                    {label}
                  </div>
                </Accordion.Label>
                <Accordion.Content>
                  <div
                    data-cy={BoardAccordionSelectors.BOARD_ITEM_LABEL}
                    className={styles.content}
                  >
                    {content}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );
};
