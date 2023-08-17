import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from '../navigation/Tabs';
import React, {useRef} from 'react';
import R from '../res';
import {TTheme} from '../res/theme';
import {TNavigationParams} from '../types/navigation';

const Navigator = ({theme}: {theme: TTheme}) => {
  const RootStack = createStackNavigator<TNavigationParams>();
  const navigationRef = useNavigationContainerRef<TNavigationParams>();
  const routeNameRef = useRef();

  return (
    <NavigationContainer
      theme={theme}
      ref={navigationRef}
      onReady={() => {
        // @ts-ignore
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}>
      <RootStack.Navigator
        initialRouteName={R.routes.ROOT_MAIN}
        screenOptions={() => ({
          headerShown: false,
        })}>
        <RootStack.Screen name={R.routes.ROOT_MAIN} component={Tabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
