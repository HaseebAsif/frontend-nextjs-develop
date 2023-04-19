import React, { FC } from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { Button } from 'components/ui/general';
import { Modal } from 'components/ui/modals';
import { Paths } from 'consts/router';

import { texts } from './NoSubscriptionModal.text';

import styles from './NoSubscriptionModal.module.scss';

interface NoSubScriptionModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const NoSubscriptionModal: FC<NoSubScriptionModalProps> = ({
  isOpen,
  onClose
}) => {
  const history = useRouter();
  const intl = useIntl();
  // TODO validate that search works
  const redirect = history.pathname + history.query.search;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.modal}>
        <h6 className={styles.message}>{intl.formatMessage(texts.message)}</h6>
        <Button
          rounded={false}
          fullWidth
          onClick={() =>
            history.push(Paths.CHOOSE_PLAN(encodeURIComponent(redirect)))
          }
          className={styles.subscribeButton}
        >
          {intl.formatMessage(texts.subscribeButton)}
        </Button>
        <Button color="alpha93" rounded={false} fullWidth onClick={onClose}>
          {intl.formatMessage(texts.closeButton)}
        </Button>
      </div>
    </Modal>
  );
};

export default NoSubscriptionModal;
