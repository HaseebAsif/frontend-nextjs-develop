/* eslint-disable @calm/react-intl/missing-formatted-message */
import React, { useState, useRef } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import Lottie from 'react-lottie';

import { iPhone } from 'assets/images';
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
import { useOnScreen } from 'utils';

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
  console.log(subjectData);
  // const subjectArray = useMemo(
  //   () =>
  //     subjectData?.subjects ? getSubjectTuples(subjectData?.subjects) : [],
  //   [subjectData]
  // );
  // const translatedSortedSubjects = useMemo(() => {
  //   const translatedSubjects = translateSubjects(
  //     subjectArray,
  //     intl.formatMessage
  //   );
  //   return sortSubjects(translatedSubjects);
  // }, [subjectArray, intl]);
  // console.log(translatedSortedSubjects);
  // const subscriptionPriceYearly = useMemo(
  //   () => productData?.products[1]?.prices[0],
  //   [productData]
  // );
  // const subscriptionPriceMonthly = useMemo(
  //   () => productData?.products[0]?.prices[0],
  //   [productData]
  // );

  const subjectArray2 = [
    ['Data', 'computer_science_and_engineering'],
    ['Ekonomi', 'agriculture_horticulture_forestry_and_fishery'],
    ['Humaniora', 'humanities'],
    ['Hälsa och sjukvård', 'health_and_medical_care'],
    ['Juridik', 'law_and_legal_studies'],
    ['Konst, design och media', 'arts_design_and_media'],
    ['Matematik', 'mathematics']
  ];

  const subjectArray3 = [
    ['Naturvetenskap', 'natural_science'],
    [
      'Pedagogik, utbildning & didaktik',
      'education_educational_sciences_didactics'
    ],
    [
      'Samhälls- och beteendevetenskap',
      'social_science_and_behavioural_science'
    ],
    ['Socialt arbete och social omsorg', 'social_work_and_welfare'],
    ['Språk', 'languages'],
    ['Övrigt', 'other']
  ];
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
            {/* <div data-cy={HomeSelectors.SEARCH_FIELD}>
              <SearchBooksField
                rounded
                className={styles.searchField}
                placeholder={intl.formatMessage(texts.searchPlaceholder)}
              />
            </div> */}
            <div className={styles.imageContainer}>
              {isDesktop && <Image cover src={iPhone} alt="heroImg" />}
              {!isDesktop && (
                <Image width={534} height={287} src={iPhone} alt="heroImg" />
              )}
            </div>
            <Button
              className={styles.freeTrialButton}
              onClick={() => router.push(Paths.REGISTER())}
            >
              {intl.formatMessage(texts.freeTrialButton)}{' '}
              <span style={{ marginLeft: '4px', paddingTop: '4px' }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.90997 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.90997 4.08"
                    stroke="#32009B"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
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
            <span style={{ marginTop: '3px', marginLeft: '4px' }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.07996"
                  stroke="white"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
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
                {subjectArray2
                  // .slice(0, Math.ceil(subjectArray2.length / 2))
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
                {subjectArray3
                  // .slice(Math.ceil(translatedSortedSubjects.length / 2))
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
      <div className={styles.integratedaiandarbeta}>
        <section className={styles.integratedaisection}>
          <h2 className={styles.integratedaiheading}>
            Integrerad AI för <br /> effektivare studier.
          </h2>
          <div className={styles.integratedaicontainer}>
            <div className={styles.integratedaiimagecontainer}>
              <img
                className={styles.integratedaiimg}
                src="./IntegratedAI.svg"
                alt=""
              />
            </div>
            <div className={styles.integratedaitextcontainer}>
              <p>Förklara konceptet av Schrödingers katt genom ett exempel.</p>
              <p className={styles.integratedaisecondpara}>
                Schrödingers katt är ett tankeexperiment inom kvantmekanik. Tänk
                dig en katt i en låda med ett radioaktivt ämne som har 50% chans
                att sönderfalla och döda katten. <br />
                <br />
                Enligt kvantmekanik är katten i ett superpositionstillstånd av
                att vara både död och levande tills någon öppnar lådan och
                observerar den. Detta illustrerar konceptet av superposition och
                problemet med mätning inom kvantmekanik.
              </p>
            </div>
          </div>
        </section>
        <div>
          <img src="./Diagnalline.png" alt="" />
        </div>
        <section className={styles.arbeta}>
          <h2 className={styles.arbetaheading}>
            Arbeta effektivt med snabbval.
          </h2>
          <img className={styles.sammanfatta} src="./sammanfatta.png" alt="" />
          <img className={styles.forklara} src="./forklara.png" alt="" />
          <img className={styles.utveckla} src="./utveckla.png" alt="" />
          <img className={styles.oversatt} src="./oversatt.png" alt="" />
          <h2 className={styles.redoheading}>
            Redo att ta dina studier till nästa nivå?
          </h2>
          <Button
            className={styles.freeTrialButton}
            onClick={() => router.push(Paths.REGISTER())}
          >
            {intl.formatMessage(texts.freeTrialButton)}
            <span style={{ marginLeft: '4px', paddingTop: '4px' }}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.90997 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.90997 4.08"
                  stroke="#32009B"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Button>
        </section>
      </div>
    </>
  );
};
