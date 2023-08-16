import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IProductData} from 'types/data';
import {vs, s} from 'react-native-size-matters';
import {addProductAction} from 'state/productDetail/actions';
import {useAppDispatch} from 'hooks/redux';
import useSmartNavigation from 'hooks/useSmartNavigation';
import R from 'res';

interface IProps {
  product: IProductData;
}

const ProductCard = ({product}: IProps) => {
  const {navigate} = useSmartNavigation();
  const dispatch = useAppDispatch();

  const addProduct = () => {
    dispatch(addProductAction(product));
    navigate(R.routes.STACK_PRODUCT_DETAIL);
  };

  return (
    <TouchableOpacity
      onPress={addProduct}
      activeOpacity={0.7}
      style={styles.container}>
      <View>
        <Text style={styles.text}>{product.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: vs(10),
    marginBottom: vs(5),
    paddingHorizontal: s(10),
    borderRadius: s(8),
    backgroundColor: '#CACFD2',
  },
  text: {
    color: '#2C3E50',
    fontSize: 14,
    fontFamily: R.fonts.Poppins.regular,
  },
});

export default ProductCard;
