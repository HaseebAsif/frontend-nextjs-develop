import React from 'react';

import classNames from 'classnames';
import { useIntl } from 'react-intl';

import { StudyTwo, StudyThree, StudyFour } from 'assets/images';
import { SEO } from 'components/tools';
import { Container, Grid, Image } from 'components/ui/general';

import { Board } from './Board';
import { texts } from './OurMission.texts';

import styles from './OurMission.module.scss';

export const OurMission = () => {
  const intl = useIntl();

  return (
    <>
      <SEO title={intl.formatMessage(texts.seoTitle)}>
        <meta
          name="description"
          content={intl.formatMessage(texts.metaDescriptionContent)}
        />
      </SEO>
      <Container className={styles.header}>
        <h1>{intl.formatMessage(texts.ourMissionHeader)}</h1>
      </Container>
      <Container
        fullWidth
        className={classNames(
          styles.sectionContainer,
          styles.sectionContainerFirst
        )}
      >
        <Grid className={styles.subSection} space="between">
          <Grid.Item className={styles.sectionText}>
            <h3 className={styles.subTitle}>
              {intl.formatMessage(texts.ourMissionSubHeader1)}
            </h3>
            <p className={styles.paragraph}>
              {intl.formatMessage(texts.ourMissionParagraph1)}
            </p>
          </Grid.Item>
          <Grid.Item className={styles.sectionImage} fill>
            <Image
              className={styles.publisherImages}
              cover
              fit="cover"
              src={StudyTwo}
              alt={intl.formatMessage(texts.ourMissionSubHeader1)}
            />
          </Grid.Item>
        </Grid>
      </Container>
      <Container
        fullWidth
        className={classNames(
          styles.sectionContainer,
          styles.sectionContainerMiddle
        )}
      >
        <Grid className={styles.subSection} space="between">
          <Grid.Item className={styles.sectionText}>
            <h3 className={styles.subTitle}>
              {intl.formatMessage(texts.ourMissionSubHeader2)}
            </h3>
            <p className={styles.paragraph}>
              {intl.formatMessage(texts.ourMissionParagraph2)}
            </p>
          </Grid.Item>
          <Grid.Item className={styles.sectionImage} fill>
            <Image
              className={styles.publisherImages}
              cover
              fit="cover"
              src={StudyThree}
              alt={intl.formatMessage(texts.ourMissionSubHeader2)}
            />
          </Grid.Item>
        </Grid>
      </Container>
      <Container fullWidth className={styles.sectionContainer}>
        <Grid className={styles.subSection} space="between">
          <Grid.Item className={styles.sectionText}>
            <h3 className={styles.subTitle}>
              {intl.formatMessage(texts.ourMissionSubHeader3)}
            </h3>
            <p className={styles.paragraph}>
              {intl.formatMessage(texts.ourMissionParagraph3)}
            </p>
          </Grid.Item>
          <Grid.Item className={styles.sectionImage} fill>
            <Image
              className={styles.publisherImages}
              cover
              fit="cover"
              src={StudyFour}
              alt={intl.formatMessage(texts.ourMissionSubHeader3)}
            />
          </Grid.Item>
        </Grid>
      </Container>
      <Container fullWidth className={styles.boardSection}>
        <Board />
      </Container>
    </>
  );
};
