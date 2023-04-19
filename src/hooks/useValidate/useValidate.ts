import { useCallback } from 'react';

import { useIntl } from 'react-intl';
import validator from 'validator';

import { Patterns } from 'consts/validate';

import { texts } from './useValidate.text';

export const useValidate = () => {
  const { formatMessage } = useIntl();

  const isEmail = useCallback(
    (value: string) =>
      validator.isEmail(value) ? true : formatMessage(texts.isEmail),
    [formatMessage]
  );

  const isPhoneNumber = useCallback(
    (value: string) =>
      new RegExp(Patterns.PhoneNumber).test(value)
        ? true
        : formatMessage(texts.isPhoneNumber),
    [formatMessage]
  );

  const isOrganisationNumber = useCallback(
    (value: string) =>
      new RegExp(Patterns.OrganisationNumber).test(value)
        ? true
        : formatMessage(texts.isOrganisationNumber),
    [formatMessage]
  );

  const isNumeric = useCallback(
    (value: string) =>
      validator.isNumeric(value) ? true : formatMessage(texts.isNumeric),
    [formatMessage]
  );

  const isLatitude = useCallback(
    (value: string) =>
      validator.isFloat(value, { min: -90, max: 90 })
        ? true
        : formatMessage(texts.isLatitude),
    [formatMessage]
  );

  const isLongitude = useCallback(
    (value: string) =>
      validator.isFloat(value, { min: -180, max: 180 })
        ? true
        : formatMessage(texts.isLongitude),
    [formatMessage]
  );

  const isPostalCode = useCallback(
    (value: string) =>
      validator.isPostalCode(value, 'SE')
        ? true
        : formatMessage(texts.isPostalCode),
    [formatMessage]
  );

  const isURL = useCallback(
    (value: string) =>
      validator.isURL(value, { require_protocol: true })
        ? true
        : formatMessage(texts.isURL),
    [formatMessage]
  );

  const isInt = useCallback(
    (value: string) =>
      validator.isInt(value) ? true : formatMessage(texts.isInt),
    [formatMessage]
  );

  const isAtLeast = useCallback(
    (atLeast: number, value: number) => {
      const numberAtLeast = Number(atLeast);
      const numberValue = Number(value);

      if (
        typeof numberAtLeast === 'number' &&
        typeof numberValue === 'number' &&
        !Number.isNaN(numberAtLeast) &&
        !Number.isNaN(numberValue)
      ) {
        return value >= atLeast
          ? true
          : formatMessage(texts.isAtLeast, { atLeast });
      }

      return true;
    },
    [formatMessage]
  );

  return {
    isEmail,
    isPhoneNumber,
    isOrganisationNumber,
    isNumeric,
    isLatitude,
    isLongitude,
    isPostalCode,
    isURL,
    isAtLeast,
    isInt
  };
};
