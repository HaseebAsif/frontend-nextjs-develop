/* eslint-disable react/button-has-type */
import React from 'react';

import Link from 'next/link';
import { useIntl } from 'react-intl';

import { Container, Grid, Gutter, Icon } from 'components/ui/general';
import { NewsletterForm } from 'components/ui/webApp/NewsletterForm';
import { FooterSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';
import { SocialLinks } from 'consts/socialLinks';

import { texts } from './Footer.texts';

import styles from './Footer.module.scss';

export const Footer = () => {
  const intl = useIntl();

  return (
    <Container fullWidth className={styles.footerContainer}>
      <div className={styles.backgroundWrapper}>
        <footer className={styles.footer}>
          <h6 className={styles.footerTitle}>
            {intl.formatMessage(texts.footerTitle)}
          </h6>
          <NewsletterForm />
          <hr className={styles.horisontalRule} />
          <div className={styles.linksContainer}>
            <ul className={styles.linkList}>
              <li className={styles.listHeading}>
                {intl.formatMessage(texts.aboutLabel)}
              </li>
              <li>
                <Link
                  data-cy={FooterSelectors.OUR_MISSION}
                  href={Paths.OUR_MISSION}
                >
                  {intl.formatMessage(texts.ourMission)}
                </Link>
              </li>
              <li>
                <Link
                  data-cy={FooterSelectors.CONTACT_US}
                  href={Paths.CONTACT_US}
                >
                  {intl.formatMessage(texts.contactUsLabel)}
                </Link>
              </li>
            </ul>

            {/* <ul className={styles.linkList}>
              <li className={styles.listHeading}>
                {intl.formatMessage(texts.faqLabel)}
              </li>
              <li>
                <Link data-cy={FooterSelectors.FAQ} href={Paths.FAQ}>
                  {intl.formatMessage(texts.faqLink)}
                </Link>
              </li>
              <li>
                <Link href={Paths.REQUEST_BOOK}>
                  {intl.formatMessage(texts.requestBook)}
                </Link>
              </li>
            </ul> */}

            <ul className={styles.linkList}>
              <li className={styles.listHeading}>
                {intl.formatMessage(texts.cooperationLabel)}
              </li>
              <li>
                <Link href={Paths.PUBLISHERS}>
                  {intl.formatMessage(texts.publisherLabel)}
                </Link>
              </li>
              <li>
                <Link href={Paths.AUTHORS}>
                  {intl.formatMessage(texts.authorLabel)}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.bottomContainer}>
            <Grid className={styles.socialMediaContainer} gutter={{ left: 3 }}>
              <Grid.Item>
                <a href={SocialLinks.FACEBOOK} target="_blank" rel="noreferrer">
                  <button className={styles.fbicon}>
                    <Icon name="facebook" />
                  </button>
                </a>
              </Grid.Item>
              <Grid.Item>
                <a href={SocialLinks.INSTAGRAM}>
                  <button className={styles.instaicon}>
                    <Icon name="instagram" />
                  </button>
                </a>
              </Grid.Item>
              <Grid.Item>
                <a href={SocialLinks.LINKEDIN}>
                  <button className={styles.linkedinicon}>
                    <Icon name="linkedin" />
                  </button>
                </a>
              </Grid.Item>
            </Grid>
            <Gutter
              className={styles.infoContainer}
              gutter={{ bottom: { root: 2, sm: 0 }, left: { sm: 3 } }}
            >
              <Gutter.Item data-cy={FooterSelectors.LEGAL}>
                <Link href={Paths.LEGAL} className={styles.link}>
                  {intl.formatMessage(texts.legal)}
                </Link>
              </Gutter.Item>
              <Gutter.Item data-cy={FooterSelectors.COOKIES}>
                <Link href={Paths.COOKIES} className={styles.link}>
                  {intl.formatMessage(texts.cookies)}
                </Link>
              </Gutter.Item>
              <Gutter.Item>
                <span>{intl.formatMessage(texts.copyrightName)}</span>
              </Gutter.Item>
            </Gutter>
          </div>
        </footer>
      </div>
    </Container>
  );
};
