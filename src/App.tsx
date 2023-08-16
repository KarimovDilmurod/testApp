import dayjs from 'dayjs';
import dayjsPluginUTC from 'dayjs/plugin/utc';
import React, {useEffect} from 'react';
import {
  LogBox,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  UIManager,
  useColorScheme,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import R from 'res';
import {persistor, store} from 'state';

import AppLogic from './AppLogic';
import Navigator from './navigation';

LogBox.ignoreLogs([
  'new NativeEventEmitter',
  'RCTBridge',
  '[react-native-gesture-handler]',
]);

dayjs.extend(dayjsPluginUTC);
//@ts-ignore
Text.defaultProps = Text.defaultProps || {};
//@ts-ignore
Text.defaultProps.allowFontScaling = false;

const App = () => {
  const isDarkMode: boolean = useColorScheme() === 'dark';

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <AppLogic>
                <StatusBar
                  backgroundColor={
                    isDarkMode
                      ? R.theme.dark.colors.text
                      : R.theme.light.colors.background
                  }
                  barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                />
                <Navigator theme={isDarkMode ? R.theme.dark : R.theme.light} />
              </AppLogic>
            </PersistGate>
          </Provider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
