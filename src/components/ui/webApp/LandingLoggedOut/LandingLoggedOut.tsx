import React, { useState, useMemo, useRef } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import Lottie from 'react-lottie';

import {
  BooksquareHeroImageMobile,
  BooksquareHeroImageDesktop
} from 'assets/images';
import { Container, Button, Grid, Image } from 'components/ui/general';
import {
  inOne,
  effectiveStudies,
  unlimitedReading
} from 'components/ui/Lotties';
import { SearchBooksField } from 'components/ui/webApp/SearchBooksField';
import { SubjectCard } from 'components/ui/webApp/SubjectCard';
import { HomeSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';
import { useBreakpoint } from 'hooks';
import { Subject, useSubjectsQuery } from 'types/graphql';
import {
  getSubjectTuples,
  sortSubjects,
  translateSubjects,
  useOnScreen
} from 'utils';

import { texts } from './LandingLoggedOut.text';

import styles from './LandingLoggedOut.module.scss';

export const LandingLoggedOut = () => {
  const animationOneRef = useRef(null);
  const animationOneIsVisible = useOnScreen(animationOneRef);
  const animationTwoRef = useRef(null);
  const animationTwoIsVisible = useOnScreen(animationTwoRef);
  const animationThreeRef = useRef(null);
  const animationThreeIsVisible = useOnScreen(animationThreeRef);
  const router = useRouter();
  const { min } = useBreakpoint();
  const isDesktop = min('lg');
  const intl = useIntl();
  // const { data: productData } = useProductsQuery();
  const [displaySubjects, setDisplaySubjects] = useState(false);
  const { data: subjectData } = useSubjectsQuery();
  const subjectArray = useMemo(
    () =>
      subjectData?.subjects ? getSubjectTuples(subjectData?.subjects) : [],
    [subjectData]
  );
  const translatedSortedSubjects = useMemo(() => {
    const translatedSubjects = translateSubjects(
      subjectArray,
      intl.formatMessage
    );
    return sortSubjects(translatedSubjects);
  }, [subjectArray, intl]);
  // const subscriptionPriceYearly = useMemo(
  //   () => productData?.products[1]?.prices[0],
  //   [productData]
  // );
  // const subscriptionPriceMonthly = useMemo(
  //   () => productData?.products[0]?.prices[0],
  //   [productData]
  // );

  return (
    <>
      <div className={styles.heroWrapper}>
        <div className={styles.contentBoxWrapper}>
          <Container fullWidth className={styles.heroContentBox}>
            <h1 className={styles.mainHeading}>
              {intl.formatMessage(texts.headerTitle)}
            </h1>
            <p className={styles.contentBoxText}>
              {intl.formatMessage(texts.introText)}
            </p>
            <div data-cy={HomeSelectors.SEARCH_FIELD}>
              <SearchBooksField
                rounded
                className={styles.searchField}
                placeholder={intl.formatMessage(texts.searchPlaceholder)}
              />
            </div>
            <div className={styles.imageContainer}>
              {isDesktop && (
                <Image cover src={BooksquareHeroImageDesktop} alt="heroImg" />
              )}
              {!isDesktop && (
                <Image
                  width={534}
                  height={287}
                  src={BooksquareHeroImageMobile}
                  alt="heroImg"
                />
              )}
            </div>
            <Button
              className={styles.freeTrialButton}
              onClick={() => router.push(Paths.REGISTER())}
            >
              {intl.formatMessage(texts.freeTrialButton)}
            </Button>
          </Container>
        </div>
      </div>
      <Container fullWidth className={styles.sectionPadding}>
        <h2
          className={classNames(
            styles.sectionHeading,
            styles.promoSectionHeading
          )}
        >
          {intl.formatMessage(texts.promoHeading, { br: <br /> })}
        </h2>
        <Grid
          gutter={{ bottom: { root: 3, md: 0 }, left: { md: 3 } }}
          className={styles.promoGrid}
        >
          <Grid.Item width={{ root: 12, md: 4 }} className={styles.promoItem}>
            <div ref={animationOneRef} className={styles.lottieWrapper}>
              <Lottie
                isPaused={!animationOneIsVisible}
                options={{
                  animationData: unlimitedReading,
                  loop: true,
                  autoplay: true
                }}
              />
            </div>
            <div className={styles.promoSectionTextContainer}>
              <h3 className={styles.promoSectionSubHeading}>
                {intl.formatMessage(texts.unlimitedReadingHeading)}
              </h3>
              <p>{intl.formatMessage(texts.unlimitedReadingText)}</p>
            </div>
          </Grid.Item>
          <Grid.Item width={{ root: 12, md: 4 }} className={styles.promoItem}>
            <div ref={animationTwoRef} className={styles.lottieWrapper}>
              <Lottie
                isPaused={!animationTwoIsVisible}
                options={{
                  animationData: effectiveStudies,
                  loop: true,
                  autoplay: true
                }}
              />
            </div>
            <div className={styles.promoSectionTextContainer}>
              <h3 className={styles.promoSectionSubHeading}>
                {intl.formatMessage(texts.effectiveStudiesHeading)}
              </h3>
              <p>{intl.formatMessage(texts.effeciveStudiesText)}</p>
            </div>
          </Grid.Item>
          <Grid.Item width={{ root: 12, md: 4 }} className={styles.promoItem}>
            <div ref={animationThreeRef} className={styles.lottieWrapper}>
              <Lottie
                isPaused={!animationThreeIsVisible}
                options={{
                  animationData: inOne,
                  loop: true,
                  autoplay: true
                }}
              />
            </div>

            <div className={styles.promoSectionTextContainer}>
              <h3 className={styles.promoSectionSubHeading}>
                {intl.formatMessage(texts.onePlaceHeading)}
              </h3>
              <p>{intl.formatMessage(texts.onePlaceText)}</p>
            </div>
          </Grid.Item>
        </Grid>
        <div className={styles.buttonWrapper}>
          <Button
            className={styles.tryTodayButton}
            onClick={() => router.push(Paths.REGISTER())}
          >
            {intl.formatMessage(texts.freeTrialButton)}
          </Button>
        </div>
      </Container>
      <div
        className={classNames(styles.exploreBackground, styles.sectionPadding)}
      >
        <Container fullWidth className={styles.exploreSectionContent}>
          <h2
            className={classNames(styles.sectionHeading, styles.exploreHeading)}
          >
            {intl.formatMessage(texts.exploreHeading)}
          </h2>
          <p className={styles.exploreText}>
            {intl.formatMessage(texts.exploreText)}
          </p>
          <Grid
            gutter={{ left: { lg: 3 } }}
            className={classNames(styles.exploreSubjectsList, {
              [styles.open]: displaySubjects
            })}
          >
            <Grid.Item
              width={{ root: 12, lg: 6 }}
              className={styles.firstColumn}
            >
              <Grid gutter={{ bottom: 2 }}>
                {translatedSortedSubjects
                  .slice(0, Math.ceil(translatedSortedSubjects.length / 2))
                  .map(([subject, key]) => (
                    <Grid.Item width={12} key={subject}>
                      <SubjectCard
                        subjectEnum={key as Subject}
                        text={subject}
                      />
                    </Grid.Item>
                  ))}
              </Grid>
            </Grid.Item>
            <Grid.Item width={{ root: 12, lg: 6 }}>
              <Grid gutter={{ bottom: 2 }}>
                {translatedSortedSubjects
                  .slice(Math.ceil(translatedSortedSubjects.length / 2))
                  .map(([subject, key]) => (
                    <Grid.Item width={12} key={subject}>
                      <SubjectCard
                        subjectEnum={key as Subject}
                        text={subject}
                      />
                    </Grid.Item>
                  ))}
              </Grid>
            </Grid.Item>
          </Grid>
          <Button
            className={styles.showSubjectsButton}
            onClick={() => setDisplaySubjects(!displaySubjects)}
            size="lg"
            color="primary"
            iconRight={{
              name: displaySubjects ? 'angle-up' : 'angle-down',
              font: 'madrid'
            }}
          >
            {intl.formatMessage(
              displaySubjects
                ? texts.exploreButtonHide
                : texts.exploreButtonShow
            )}
          </Button>
        </Container>
      </div>
      {/* this is new section for the home page */}
      <div className={styles.heroWrapper} style={{ background: 'white' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          className={styles.contentBoxWrapper}
        >
          <div className={styles.inspiraimgcontainer}>
            <img src="./Studera.jpg" alt="" />
          </div>
          <Container fullWidth className={styles.heroContentBox}>
            <h4>{intl.formatMessage(texts.headerTitle)}</h4>
            <p className={styles.contentBoxText} style={{ margin: '20px 0' }}>
              {intl.formatMessage(texts.inspiraText1)}
            </p>
            <p
              className={styles.contentBoxText}
              style={{ marginBottom: '20px' }}
            >
              {intl.formatMessage(texts.inspiraText2)}
            </p>
            <p
              className={styles.contentBoxText}
              style={{ marginBottom: '0px' }}
            >
              {intl.formatMessage(texts.inspiraText3)}
            </p>
          </Container>
        </div>
      </div>
    </>
  );
};
