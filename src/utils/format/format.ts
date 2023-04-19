import { format as fnsFormat, parseISO } from 'date-fns';
import { sv } from 'date-fns/locale';

import { DateFormat } from 'consts/date';

const formatDate = ({
  date,
  format = DateFormat.Date
}: {
  date: Date;
  format?: DateFormat;
}) => {
  return fnsFormat(new Date(date), format, { locale: sv });
};

const formatCurrency = (number: number, options?: Intl.NumberFormatOptions) => {
  if (typeof number === 'number') {
    return number.toLocaleString('sv-SE', {
      style: 'currency',
      currency: 'SEK',
      currencyDisplay: 'code',
      maximumFractionDigits: 0,
      ...options
    });
  }

  return number;
};

export const dateWithFormat = (dateParameter: string, dateFormat: string) => {
  let newDate = '';
  try {
    newDate = fnsFormat(new Date(dateParameter), dateFormat);
  } catch {
    // safari fails on format
    newDate = parseISO(dateParameter).toLocaleDateString('sv-SE');
  }

  return newDate;
};

export const format = {
  date: formatDate,
  dateWithFormat,
  currency: formatCurrency
};
