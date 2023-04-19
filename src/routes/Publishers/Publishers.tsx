import React, { useEffect, useState } from 'react';

import { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import {
  publisherImage1,
  publisherImage2,
  publisherImage3Xs,
  publisherImage3Sm,
  publisherImage3Md,
  publisherImage3Lg
} from 'assets/images';
import { Image, Grid, Button, Container } from 'components/ui/general';
import { Paths } from 'consts/router';
import { useBreakpoint } from 'hooks';

import { texts } from './Publishers.texts';

import styles from './Publishers.module.scss';

export const Publishers = () => {
  const intl = useIntl();
  const router = useRouter();
  const { current } = useBreakpoint();
  const [imageSize, setImageSize] = useState(current);

  useEffect(() => {
    setImageSize(current);
  }, [current]);

  const renderImage = () => {
    switch (imageSize) {
      case 'xs':
        return imageComponent(publisherImage3Xs);
      case 'sm':
        return imageComponent(publisherImage3Sm);
      case 'navbar':
        return imageComponent(publisherImage3Sm);
      case 'md':
        return imageComponent(publisherImage3Md);
      case 'lg':
        return imageComponent(publisherImage3Lg);
      case 'xl':
        return imageComponent(publisherImage3Lg);
      default:
        return null;
    }
  };

  const imageComponent = (image: StaticImageData) => {
    if (image) {
      return (
        <Image
          className={styles.publisherImages}
          src={image}
          alt={intl.formatMessage(texts.altTextThree)}
        />
      );
    }
    return null;
  };
  return (
    <div className={styles.main}>
      <div className={styles.infoSection}>
        <Container className={styles.container}>
          <Grid
            gutter={{ left: { sm: 2, md: 0 } }}
            space="between"
            className={styles.sectionOne}
          >
            <Grid.Item
              width={{ root: 12, sm: 6 }}
              className={styles.sectionTextOne}
            >
              <div>
                <h1 className={styles.header}>
                  {intl.formatMessage(texts.publishersHeader)}
                </h1>
                <p className={styles.bodyText}>
                  {intl.formatMessage(texts.publisherParagraph1)}
                </p>
                <Button
                  onClick={() => router.push(Paths.CONTACT_US)}
                  className={styles.contactButton}
                  rounded
                >
                  {intl.formatMessage(texts.contactUsLabel)}
                </Button>
              </div>
            </Grid.Item>
            <Grid.Item width={{ root: 12, sm: 6 }}>
              <div className={styles.imageWrapperOne}>
                <Image
                  className={styles.publisherImages}
                  cover
                  fit="cover"
                  src={publisherImage1}
                  alt={intl.formatMessage(texts.altTextOne)}
                />
              </div>
            </Grid.Item>
          </Grid>
        </Container>
        <div className={styles.middleSection}>
          <Container className={styles.container}>
            <Grid
              gutter={{ bottom: 3 }}
              className={styles.sectionTwo}
              space="between"
            >
              <Grid.Item width={{ root: 12, lg: 6 }} className={styles.gridTwo}>
                <div className={styles.imageWrapperTwo}>
                  <Image
                    className={styles.publisherImages}
                    cover
                    fit="cover"
                    src={publisherImage2}
                    alt={intl.formatMessage(texts.altTextTwo)}
                  />
                </div>
              </Grid.Item>
              <Grid.Item
                width={{ root: 12, lg: 6 }}
                className={styles.sectionText}
              >
                <div>
                  <h3 className={styles.subTitleTwo}>
                    {intl.formatMessage(texts.publishersSubHeader)}
                  </h3>
                  <p className={styles.bodyText}>
                    {intl.formatMessage(texts.publisherParagraph2)}
                  </p>
                  <p className={styles.bodyText}>
                    {intl.formatMessage(texts.publisherParagraph3)}
                  </p>
                </div>
              </Grid.Item>
            </Grid>
          </Container>
        </div>
        <Container className={styles.container}>
          <Grid
            gutter={{ bottom: 3 }}
            className={styles.sectionThree}
            space="between"
          >
            <Grid.Item
              width={{ root: 12, lg: 6 }}
              className={styles.sectionTextThree}
            >
              <div>
                <h3 className={styles.subTitle}>
                  {intl.formatMessage(texts.publishersSubHeader2)}
                </h3>
                <p className={styles.bodyText}>
                  {intl.formatMessage(texts.publisherParagraph4)}
                </p>
                <p className={styles.bodyText}>
                  {intl.formatMessage(texts.publisherParagraph5)}
                </p>
              </div>
            </Grid.Item>
            <Grid.Item width={{ root: 12, lg: 6 }}>
              <div className={styles.imageWrapperThree}>{renderImage()}</div>
            </Grid.Item>
          </Grid>
        </Container>
      </div>
    </div>
  );
};
