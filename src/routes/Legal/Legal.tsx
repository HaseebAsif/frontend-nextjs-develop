import React from 'react';

import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { Container } from 'components/ui/general';

import { texts } from './Legal.texts';

import styles from './Legal.module.scss';

export const Legal = () => {
  const intl = useIntl();

  return (
    <>
      <SEO title={intl.formatMessage(texts.title)} />
      <Container className={styles.root}>
        <div className={styles.header}>
          <h5>{intl.formatMessage(texts.tocHeader)}</h5>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.tocSubHeader1)}</h6>
          <p>{intl.formatMessage(texts.tocParagraph1)}</p>
        </div>
        {/*
        <div>
          <h6>{intl.formatMessage(texts.tocSubHeader2)}</h6>
          <p>{intl.formatMessage(texts.tocParagraph2)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.tocSubHeader3)}</h6>
          <p>{intl.formatMessage(texts.tocParagraph3)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.tocSubHeader4)}</h6>
          <p>{intl.formatMessage(texts.tocParagraph4)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.tocSubHeader5)}</h6>
          <p>{intl.formatMessage(texts.tocParagraph5)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.tocSubHeader6)}</h6>
          <p>{intl.formatMessage(texts.tocParagraph6)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.tocSubHeader7)}</h6>
          <p>{intl.formatMessage(texts.tocParagraph7)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.tocSubHeader8)}</h6>
          <p>{intl.formatMessage(texts.tocParagraph8)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.tocSubHeader9)}</h6>
          <p>
            {intl.formatMessage(texts.tocParagraph9Part1)}
            <a href={`mailto:${intl.formatMessage(texts.infoMailAddress)}`}>
              {intl.formatMessage(texts.infoMailAddress)}
            </a>
            {intl.formatMessage(texts.tocParagraph9Part2)}
          </p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.tocSubHeader10)}</h6>
          <p>
            {intl.formatMessage(texts.tocParagraph10Part1)}
            <a
              href={intl.formatMessage(texts.konsumentverketLink)}
              rel="noreferrer"
              target="_blank"
            >
              {intl.formatMessage(texts.konsumentverketLink)}
            </a>
            {intl.formatMessage(texts.tocParagraph10Part2)}
          </p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.tocSubHeader11)}</h6>
          <p>{intl.formatMessage(texts.tocParagraph11)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.tocSubHeader12)}</h6>
          <p>{intl.formatMessage(texts.tocParagraph12)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.tocSubHeader13)}</h6>
          <p>{intl.formatMessage(texts.tocParagraph13)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.tocSubHeader14)}</h6>
          <p>{intl.formatMessage(texts.tocParagraph14)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.tocSubHeader15)}</h6>
          <p>{intl.formatMessage(texts.tocParagraph15)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.tocSubHeader16)}</h6>
          <p>{intl.formatMessage(texts.tocParagraph16)}</p>
        </div> */}
        <div className={styles.header}>
          <h5>{intl.formatMessage(texts.ppHeader)}</h5>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.ppSubHeader1)}</h6>
          <p>{intl.formatMessage(texts.ppParagraph1)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.ppSubHeader2)}</h6>
          <p>{intl.formatMessage(texts.ppParagraph2)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.ppSubHeader3)}</h6>
          <p>
            {intl.formatMessage(texts.ppParagraph3Part1)}
            <a
              href={intl.formatMessage(texts.stripePrivacyLink)}
              rel="noreferrer"
              target="_blank"
            >
              {intl.formatMessage(texts.stripePrivacyLink)}
            </a>
            {intl.formatMessage(texts.ppParagraph3Part2)}
          </p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.ppSubHeader4)}</h6>
          <p>{intl.formatMessage(texts.ppParagraph4)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.ppSubHeader5)}</h6>
          <p>{intl.formatMessage(texts.ppParagraph5)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.ppSubHeader6)}</h6>
          <p>{intl.formatMessage(texts.ppParagraph6)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.ppSubHeader7)}</h6>
          <p>{intl.formatMessage(texts.ppParagraph7)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.ppSubHeader8)}</h6>
          <p>
            {intl.formatMessage(texts.ppParagraph3Part1)}
            <a
              href={intl.formatMessage(texts.euCommissionLink)}
              rel="noreferrer"
              target="_blank"
            >
              {intl.formatMessage(texts.euCommissionLink)}
            </a>
            .
          </p>
        </div>

        <div>
          <h6>{intl.formatMessage(texts.ppSubHeader9)}</h6>
          <p>{intl.formatMessage(texts.ppParagraph9)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.ppSubHeader10)}</h6>
          <p>{intl.formatMessage(texts.ppParagraph10)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.ppSubHeader11)}</h6>
          <p>
            {intl.formatMessage(texts.ppParagraph11Part1)}
            <a href={`mailto:${intl.formatMessage(texts.infoMailAddress)}`}>
              {intl.formatMessage(texts.infoMailAddress)}
            </a>
            {intl.formatMessage(texts.ppParagraph11Part2)}
          </p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.ppSubHeader12)}</h6>
          <p>
            {intl.formatMessage(texts.ppParagraph12Part1)}
            <a href={`mailto:${intl.formatMessage(texts.infoMailAddress)}`}>
              {intl.formatMessage(texts.infoMailAddress)}
            </a>
            {intl.formatMessage(texts.ppParagraph12Part2)}
          </p>
        </div>
        <div>
          <p>{intl.formatMessage(texts.updatedAt)}</p>
        </div>
      </Container>
    </>
  );
};
