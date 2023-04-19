import { IntlFormatters } from 'react-intl';

import { Subject } from 'types/graphql';
import { subjectTranslations } from 'utils/messages';

type subjectArray = { subject: Subject; count?: number }[];

// Returns an array of arrays with Subject enum key and value
// Ex:[['Languages','languages'], ['ReligiousStudies', 'religious_studies']]
const getSubjectTuples = (subjects: subjectArray) => {
  return subjects.reduce((previousValue, currentValue) => {
    const { subject } = currentValue;
    const matchingArray = Object.entries(Subject).find(
      ([, value]) => value === subject
    );
    if (matchingArray) {
      return [...previousValue, matchingArray];
    }
    return previousValue;
  }, [] as [string, Subject][]);
};

// Accepts an array of arrays with Subject enum key and value
// Returns an array of arrays with Subject translation and enum value
const translateSubjects = (
  subjectsArray: [string, Subject][],
  formatMessage: IntlFormatters['formatMessage']
) => {
  return subjectsArray.map(([key, subjectEnum]) => {
    return [
      formatMessage((subjectTranslations as { [lorem: string]: any })[key]),
      subjectEnum
    ] as [string, Subject];
  });
};

// Accepts an array of Subject translation and enum value
// Returns the same array but sorted alphabetically
const sortSubjects = (subjectsArray: [string, Subject][]) => {
  return subjectsArray.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  });
};

export { getSubjectTuples, translateSubjects, sortSubjects };
