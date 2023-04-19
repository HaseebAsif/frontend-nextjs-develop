import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { Checkbox } from 'components/ui/forms';
import { useNotification, useUser } from 'hooks';
import { useUpdateUserMutation } from 'types/graphql';

import { texts } from './NewsletterCheckBoxForm.text';

const NewsletterCheckBoxForm = () => {
  const [updateUser, { data, error }] = useUpdateUserMutation();
  const { user } = useUser();
  const { register, watch } = useForm({
    defaultValues: {
      newsletter: !!user?.newsletter
    }
  });

  const intl = useIntl();

  useNotification(
    !!data,
    intl.formatMessage(texts.successMessage),
    !!error,
    intl.formatMessage(texts.errorMessage)
  );

  useEffect(() => {
    if (user && watch('newsletter') !== user.newsletter) {
      updateUser({
        variables: {
          id: user.id,
          input: {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            newsletter: watch('newsletter')
          }
        }
      });
    }
    // eslint-disable-next-line
  }, [user, updateUser, watch('newsletter')]);

  return (
    <form>
      <Checkbox
        label="Jag vill ha nyhetsbrev"
        name="newsletter"
        register={register}
      />
    </form>
  );
};

export default NewsletterCheckBoxForm;
