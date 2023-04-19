import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { useIntl } from 'react-intl';
import Lottie from 'react-lottie';

import { StudyOnePager } from 'assets/images';
import { Container, Grid, Image } from 'components/ui/general';
import studyOne from 'components/ui/Lotties/study-animation-1.json';
import studyTwo from 'components/ui/Lotties/study-animation-2.json';
import studyThree from 'components/ui/Lotties/study-animation-3.json';
import { useBreakpoint, useScroll } from 'hooks';

import { texts } from './OnePageServiceSection.texts';

import styles from './OnePageServiceSection.module.scss';

export const OnePageServiceSection = () => {
  const intl = useIntl();
  const [img, setImg] = useState(false);
  const { min } = useBreakpoint();
  const isMobile = !min('sm');

  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  const { y } = useScroll({
    wait: 100,
    element: window
  });

  const elementPosition = imageContainerRef?.current?.getBoundingClientRect();

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
      !img &&
      elementPosition &&
      elementPosition.y - window.innerHeight < -100
    ) {
      setImg(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y]);

  return (
    <Container className={styles.root}>
      <Grid
        gutter={{ bottom: { root: 6, sm: 4 }, left: { lg: 4 } }}
        space="between"
      >
        <Grid.Item width={{ root: 12, lg: 4 }}>
          <div className={styles.infoBox}>
            <Lottie options={studyAnimationOne} height={280} width={280} />
            <h6>{intl.formatMessage(texts.firstHeadline)}</h6>
            <p>{intl.formatMessage(texts.firstContent)}</p>
          </div>
        </Grid.Item>
        <Grid.Item width={{ root: 12, lg: 4 }}>
          <div className={styles.infoBox}>
            <Lottie options={studyAnimationTwo} height={280} width={280} />
            <h6>{intl.formatMessage(texts.secondHeadline)}</h6>
            <p>{intl.formatMessage(texts.secondContent)}</p>
          </div>
        </Grid.Item>
        <Grid.Item width={{ root: 12, lg: 4 }}>
          <div className={styles.infoBox}>
            <Lottie options={studyAnimationThree} height={280} width={280} />
            <h6>{intl.formatMessage(texts.thirdHeadline)}</h6>
            <p>{intl.formatMessage(texts.thirdContent)}</p>
          </div>
        </Grid.Item>
      </Grid>
      <div className={styles.infoSection}>
        <Grid reverse={!isMobile} gutter={{ bottom: 1 }}>
          <Grid.Item
            width={{ root: 12, lg: 6 }}
            className={styles.imageWrapper}
          >
            <div
              className={classNames(styles.sLightOne, {
                [styles.visible]: img
              })}
              ref={imageContainerRef}
            />
            <Image
              cover
              fit="cover"
              src={StudyOnePager}
              alt={intl.formatMessage(texts.imgExplanation)}
              className={classNames(styles.img, {
                [styles.visible]: img
              })}
            />
          </Grid.Item>
          <Grid.Item width={{ lg: 6 }}>
            <div className={styles.sectionText}>
              <h5>{intl.formatMessage(texts.infoTitle)}</h5>
              <p>{intl.formatMessage(texts.firstInfoContent)}</p>
              <p>{intl.formatMessage(texts.secondInfoContent)}</p>
              <p>{intl.formatMessage(texts.thirdInfoContent)}</p>
            </div>
          </Grid.Item>
        </Grid>
      </div>
    </Container>
  );
};
