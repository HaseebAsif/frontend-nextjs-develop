import React, { useMemo } from 'react';

import { useIntl } from 'react-intl';

import { Link } from 'components/tools';
import { Accordion } from 'components/ui/general';
import { FAQItemSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';

import { texts } from './FAQSection.texts';

import styles from './FAQSection.module.scss';

export const FAQSection = () => {
  const intl = useIntl();

  const FAQ = useMemo(
    () => [
      {
        id: texts.questionOne.id,
        question: intl.formatMessage(texts.questionOne),
        answer: intl.formatMessage(texts.answerOne)
      },
      {
        id: texts.questionTwo.id,
        question: intl.formatMessage(texts.questionTwo),
        answer: intl.formatMessage(texts.answerTwo)
      },
      {
        id: texts.questionThree.id,
        question: intl.formatMessage(texts.questionThree),
        answer: intl.formatMessage(texts.answerThree)
      },
      {
        id: texts.questionFour.id,
        question: intl.formatMessage(texts.questionFour),
        answer: intl.formatMessage(texts.answerFour)
      },
      {
        id: texts.questionFive.id,
        question: intl.formatMessage(texts.questionFive),
        answer: intl.formatMessage(texts.answerFive)
      },
      {
        id: texts.questionSix.id,
        question: intl.formatMessage(texts.questionSix),
        answer: intl.formatMessage(texts.answerSix)
      },
      {
        id: texts.questionSeven.id,
        question: intl.formatMessage(texts.questionSeven),
        answer: intl.formatMessage(texts.answerSeven)
      },
      {
        id: texts.questionEight.id,
        question: intl.formatMessage(texts.questionEight),
        answer: intl.formatMessage(texts.answerEight)
      },
      {
        id: texts.questionNine.id,
        question: intl.formatMessage(texts.questionNine),
        answer: (() => {
          return (
            <div>
              {intl.formatMessage(texts.answerNinePartOne)}
              <Link href={Paths.CONTACT_US} className={styles.link}>
                {intl.formatMessage(texts.answerNineLink)}
              </Link>
              {intl.formatMessage(texts.answerNinePartTwo)}
            </div>
          );
        })()
      }
    ],
    [intl]
  );
  return (
    <Accordion className={styles.faqSection}>
      {FAQ.map(({ id, question, answer }) => (
        <Accordion.Item key={id} id={id} className={styles.faqItem}>
          <Accordion.Label className={styles.question}>
            <div data-cy={FAQItemSelectors.FAQ_ITEM}>{question}</div>
          </Accordion.Label>
          <Accordion.Content>
            <div
              data-cy={FAQItemSelectors.ANSWER_SECTION}
              className={styles.answer}
            >
              {answer}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
