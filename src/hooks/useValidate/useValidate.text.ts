import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  isEmail: {
    id: 'UseValidate.isEmail',
    description: 'Incorrect format of email',
    defaultMessage: 'Incorrect format of email'
  },
  isPhoneNumber: {
    id: 'UseValidate.isPhoneNumber',
    description: 'Incorrect format of phone number',
    defaultMessage: 'Incorrect format of phone number'
  },
  isOrganisationNumber: {
    id: 'UseValidate.isOrganisationNumber',
    description: 'Incorrect format of organisation number',
    defaultMessage: 'Incorrect format of organisation number'
  },
  isNumeric: {
    id: 'UseValidate.isNumeric',
    description: 'Incorrect format of numeric',
    defaultMessage: 'Incorrect format of numeric'
  },
  isLatitude: {
    id: 'UseValidate.isLatitude',
    description: 'Incorrect format of latitude',
    defaultMessage:
      'Incorrect format of latitude, needs to be between -90 and 90'
  },
  isLongitude: {
    id: 'UseValidate.isLongitude',
    description: 'Incorrect format of longitude',
    defaultMessage:
      'Incorrect format of longitude, needs to be between -180 and 180'
  },
  isPostalCode: {
    id: 'UseValidate.isPostalCode',
    description: 'Incorrect format of postal code',
    defaultMessage: 'Incorrect format of postal code'
  },
  isURL: {
    id: 'UseValidate.isURL',
    description: 'Incorrect format of URL',
    defaultMessage: 'Incorrect format of URL'
  },
  isAtLeast: {
    id: `UseValidate.isAtLeast`,
    description: 'Is at least passed number',
    defaultMessage: 'Needs to be at least {atLeast}'
  },
  isInt: {
    id: `UseValidate.isInt`,
    description: 'Is integer',
    defaultMessage: 'Needs to be an integer'
  }
});
