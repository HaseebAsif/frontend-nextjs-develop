import React from 'react';

import classNames from 'classnames';
import { UseFormMethods } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { Information } from 'components/ui/general';

import { texts } from './Error.text';

import styles from './Error.module.scss';

interface ErrorProps {
  error?: UseFormMethods['errors'];
  className?: string;
}

const Error = ({ error, className }: ErrorProps) => {
  const intl = useIntl();

  if (error) {
    return (
      <div className={classNames(styles.root, className)}>
        <Information status="error">
          {error?.message || intl.formatMessage(texts.message)}
        </Information>
      </div>
    );
  }

  return null;
};

export default Error;
