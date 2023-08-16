import React, {ReactChild, ReactElement, ReactNode, useEffect} from 'react';
import {AppState, AppStateStatus} from 'react-native';

interface IAppLogic {
  children: ReactNode | ReactChild | ReactElement;
}

const AppLogic = (props: IAppLogic) => {
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  const handleAppStateChange = (appStateProps: AppStateStatus) => {
    if (appStateProps === 'active') {
    }
  };

  return <>{props.children}</>;
};

export default AppLogic;
