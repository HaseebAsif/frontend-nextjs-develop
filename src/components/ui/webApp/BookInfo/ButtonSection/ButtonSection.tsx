import React, { FC, useCallback, useState } from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { Button } from 'components/ui/general';
import NoSubscriptionModal from 'components/ui/webApp/NoSubscriptionModal';
import { ButtonsSectionSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';
import { SubscriptionStatus } from 'consts/subscription';
import { useUser } from 'hooks';
import { UserRole } from 'types/graphql';

import { texts } from './ButtonSection.texts';

import styles from './ButtonSection.module.scss';

interface ButtonSectionProps {
  toggleFavorite: () => void;
  isFavourite: boolean;
  id: string | number | undefined;
}

const ButtonSection: FC<ButtonSectionProps> = ({
  toggleFavorite,
  isFavourite,
  id
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const intl = useIntl();
  const { loggedIn, user } = useUser();
  const history = useRouter();

  const readBook = useCallback(() => {
    if (!loggedIn) {
      // TODO Validate that history.query.search works
      const redirect = history.pathname + history.query.search;
      return history.push(Paths.REGISTER(encodeURIComponent(redirect)));
    }
    if (
      user?.role !== UserRole.Admin &&
      (user?.subscription == null ||
        !(
          user.subscription.status === SubscriptionStatus.ACTIVE ||
          user.subscription.status === SubscriptionStatus.TRIAL
        ))
    ) {
      return setIsOpen(true);
    }
    history.push(Paths.READER(id as string));
  }, [user, history, id, loggedIn]);

  return (
    <div className={styles.box}>
      <div data-cy={ButtonsSectionSelectors.READ_BUTTON}>
        <Button
          rounded={false}
          fullWidth
          className={styles.readBookButton}
          onClick={readBook}
        >
          {loggedIn
            ? intl.formatMessage(texts.readBookLabel)
            : intl.formatMessage(texts.tryLabel)}
        </Button>
      </div>
      <div data-cy={ButtonsSectionSelectors.FAVOURITE_BUTTON}>
        {loggedIn && isFavourite && (
          <Button
            disabled={!id}
            rounded={false}
            fullWidth
            iconRight={{ name: 'heart', font: 'lissabon' }}
            onClick={toggleFavorite}
            color="alpha93"
          >
            {intl.formatMessage(texts.removeFavouriteLabel)}
          </Button>
        )}
        {(!loggedIn || !isFavourite) && (
          <Button
            disabled={!id}
            rounded={false}
            fullWidth
            iconRight={{ name: 'heart' }}
            onClick={toggleFavorite}
            color="alpha93"
          >
            {intl.formatMessage(texts.addFavoriteLabel)}
          </Button>
        )}
      </div>
      <NoSubscriptionModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default ButtonSection;
