import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { addToast } from 'redux/toast';

export const useNotification = (
  successCondition: boolean,
  successMessage: string,
  errorCondition: boolean,
  errorMessage: string,
  options?: {
    successCallback?: () => void;
    errorCallback?: () => void;
  }
): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (successCondition) {
      dispatch(
        addToast({
          message: successMessage,
          type: 'light'
        })
      );
      if (options?.successCallback) options.successCallback();
    } else if (errorCondition) {
      dispatch(
        addToast({
          message: errorMessage,
          type: 'error'
        })
      );
      if (options?.errorCallback) options?.errorCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    successCondition,
    errorCondition,
    dispatch,
    successMessage,
    errorMessage
  ]);
};
