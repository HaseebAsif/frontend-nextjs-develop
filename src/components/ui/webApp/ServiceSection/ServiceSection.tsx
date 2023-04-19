import React, { useEffect, useState, useRef } from 'react';

import classNames from 'classnames';
import { useIntl } from 'react-intl';
import Lottie from 'react-lottie';

import {
  homeServiceSectionImage1,
  homeServiceSectionImage2
} from 'assets/images';
import { Grid, Image } from 'components/ui/general';
import studyOne from 'components/ui/Lotties/study-animation-1.json';
import studyTwo from 'components/ui/Lotties/study-animation-2.json';
import studyThree from 'components/ui/Lotties/study-animation-3.json';
import { useBreakpoint, useScroll } from 'hooks';

import { texts } from './ServiceSection.texts';

import styles from './ServiceSection.module.scss';

const ServiceSection = () => {
  const [image1IsLoaded, setImage1IsLoaded] = useState(false);
  const [image2IsLoaded, setImage2IsLoaded] = useState(false);
  const intl = useIntl();
  const [showImage1, setShowImg1] = useState(false);
  const [showImage2, setShowImg2] = useState(false);

  const image1WrapperRef = useRef<HTMLDivElement | null>(null);
  const image2WrapperRef = useRef<HTMLDivElement | null>(null);

  const image1Position = image1WrapperRef?.current?.getBoundingClientRect();
  const image2Position = image2WrapperRef?.current?.getBoundingClientRect();

  const { y } = useScroll({
    wait: 100,
    element: window
  });
  const { current } = useBreakpoint();

  const studyAnimationOne = {
    loop: true,
    autoplay: true,
    animationData: studyOne
  };

  const studyAnimationTwo = {
    loop: true,
    autoplay: true,
    animationData: studyTwo
  };

  const studyAnimationThree = {
    loop: true,
    autoplay: true,
    animationData: studyThree
  };

  useEffect(() => {
    if (
      !showImage1 &&
      image1Position &&
      image1Position.y - window.innerHeight < -100
    ) {
      setShowImg1(true);
    }
    if (
      !showImage2 &&
      image2Position &&
      image2Position.y - window.innerHeight < -100
    ) {
      setShowImg2(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y]);

  return (
    <div className={styles.root}>
      <Grid
        gutter={{ bottom: { root: 6, sm: 4 }, left: { lg: 4 } }}
        space="between"
        className={styles.boxes}
      >
        <Grid.Item width={{ root: 12, lg: 4 }}>
          <div className={styles.infoBox}>
            <Lottie options={studyAnimationOne} height={280} width={280} />
            <h2>{intl.formatMessage(texts.boxHeadlineOne)}</h2>
            <p>{intl.formatMessage(texts.boxContentOne)}</p>
          </div>
        </Grid.Item>
        <Grid.Item width={{ root: 12, lg: 4 }}>
          <div className={styles.infoBox}>
            <Lottie options={studyAnimationTwo} height={280} width={280} />
            <h2>{intl.formatMessage(texts.boxHeadlineTwo)}</h2>
            <p>{intl.formatMessage(texts.boxContentTwo)}</p>
          </div>
        </Grid.Item>
        <Grid.Item width={{ root: 12, lg: 4 }}>
          <div className={styles.infoBox}>
            <Lottie options={studyAnimationThree} height={224} width={280} />
            <h2>{intl.formatMessage(texts.boxHeadlineThree)}</h2>
            <p>{intl.formatMessage(texts.boxContentThree)}</p>
          </div>
        </Grid.Item>
      </Grid>

      <div className={styles.infoSection}>
        <Grid
          gutter={{ bottom: 3, left: 5 }}
          className={styles.section}
          space="between"
          reverse={current === 'lg'}
        >
          <Grid.Item width={{ root: 12, lg: 6 }}>
            <div className={styles.imageWrapper}>
              <div
                className={classNames(styles.sLightOne, {
                  [styles.visible]: showImage1 && image1IsLoaded
                })}
                ref={image1WrapperRef}
              />
              <Image
                cover
                fit="cover"
                src={homeServiceSectionImage1}
                alt="Person läser kurslitteratur på datorn"
                className={classNames(styles.img, {
                  [styles.visible]: showImage1 && image1IsLoaded
                })}
                onLoad={() => setImage1IsLoaded(true)}
              />
            </div>
          </Grid.Item>
          <Grid.Item width={{ root: 12, lg: 5 }} className={styles.sectionText}>
            <h2 className={styles.headline}>
              {intl.formatMessage(texts.betaHeadline)}
            </h2>
            <p className={styles.info}>
              {intl.formatMessage(texts.betaContent)}
            </p>
          </Grid.Item>
        </Grid>
        <Grid gutter={{ bottom: 3, left: 5 }} space="between">
          <Grid.Item width={{ root: 12, lg: 6 }}>
            <div className={styles.imageWrapper}>
              <div
                className={classNames(styles.sLightTwo, {
                  [styles.visible]: showImage2 && image2IsLoaded
                })}
                ref={image2WrapperRef}
              />
              <Image
                cover
                fit="cover"
                src={homeServiceSectionImage2}
                alt="grupparbete med hjälp av digital kurslitteratur"
                className={classNames(styles.img, {
                  [styles.visible]: showImage2 && image2IsLoaded
                })}
                onLoad={() => setImage2IsLoaded(true)}
              />
            </div>
          </Grid.Item>
          <Grid.Item width={{ root: 12, lg: 5 }} className={styles.sectionText}>
            <div className={styles.sectionInternal}>
              <h2 className={styles.headline}>
                {intl.formatMessage(texts.firstHeadline)}
              </h2>
              <p className={styles.info}>
                {intl.formatMessage(texts.firstContent)}
              </p>
            </div>
            <h2 className={styles.headline}>
              {intl.formatMessage(texts.secondHeadline)}
            </h2>
            <p className={styles.info}>
              {intl.formatMessage(texts.secondContent)}
            </p>
          </Grid.Item>
        </Grid>
      </div>
    </div>
  );
};

export default ServiceSection;
