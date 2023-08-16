import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import R from '../res';
import ProductListScreen from '../screens/ProductList';

const ProductListStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ProductListScreen}
        name={R.routes.SCREEN_PRODUCT_LIST}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductListStack;
