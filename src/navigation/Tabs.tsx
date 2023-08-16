import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import useSmartNavigation from '../hooks/useSmartNavigation';
import React, {useEffect} from 'react';
import {Platform, View, StyleSheet} from 'react-native';
import {hasNotch} from 'react-native-device-info';
import {s, vs} from 'react-native-size-matters/extend';
import R from '../res';
import ProductListStack from './ProductListStack';
import ProductDetailStack from './ProlifeStack';

interface IProps {
  route?: {
    params?: {
      tab?: string;
    };
  };
}

const Tabs: React.FC<IProps> = ({route}) => {
  const {tab} = route?.params || {};
  const navigation = useSmartNavigation();

  useEffect(() => {
    if (!tab) {
      return;
    }

    // @ts-ignore
    navigation.navigate(getTabRouteById(tab), {});
  }, [tab]);

  const TabsNavigator = createBottomTabNavigator();

  let tabs = [
    {
      label: 'Main',
      name: R.routes.STACK_PRODUCT_LIST,
      component: ProductListStack,
      icon: () => <R.icons.CommandIcon color={'#CCD1D1'} />,
      iconActive: () => <R.icons.CommandIcon color={'#212F3C'} />,
      badge: false,
    },
    {
      label: 'Profile',
      name: R.routes.STACK_PRODUCT_DETAIL,
      component: ProductDetailStack,
      icon: () => <R.icons.ProfileIcon color={'#CCD1D1'} />,
      iconActive: () => <R.icons.ProfileIcon color={'#212F3C'} />,
    },
  ];

  return (
    <TabsNavigator.Navigator
      screenOptions={({}) => ({
        headerShown: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [styles.barStyle],
        tabBarActiveTintColor: '#212F3C',
        tabBarInactiveTintColor: '#CCD1D1',
        tabBarLabelStyle: {
          fontSize: s(10),
          fontFamily: R.fonts.Poppins.medium,
          marginBottom: Platform.select({android: vs(8)}),
        },
      })}>
      {tabs.map(tabItem => (
        <TabsNavigator.Screen
          key={tabItem.name}
          name={tabItem.name}
          component={tabItem.component}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) =>
              tabItem.badge ? (
                <View>
                  <View style={styles.badge} />
                  {focused ? tabItem.iconActive() : tabItem.icon()}
                </View>
              ) : focused ? (
                tabItem.iconActive()
              ) : (
                tabItem.icon()
              ),
            tabBarLabel: tabItem.label,
          }}
        />
      ))}
    </TabsNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
  barStyle: {
    paddingTop: vs(8),
    height: Platform.select({
      ios: hasNotch() ? vs(85) : vs(75),
      android: vs(60),
    }),
    shadowColor: 'rgb(48, 48, 48)',
    shadowOpacity: 0.2,
    shadowRadius: s(20),
    shadowOffset: {
      height: vs(10),
      width: s(10),
    },
    width: '100%',
    borderTopWidth: 0,
    backgroundColor: 'white',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: s(10),
    height: vs(10),
    borderRadius: s(10),
    backgroundColor: 'red',
    zIndex: 1,
  },
});

export default Tabs;
