import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import R from '../res';
import ProductDetailScreen from '../screens/ProductDetail';

const ProductDetailStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ProductDetailScreen}
        name={R.routes.SCREEN_PRODUCT_DETAIL}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductDetailStack;
