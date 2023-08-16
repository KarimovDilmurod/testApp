import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useAppSelector} from 'hooks/redux';
import {getProductDetail} from 'state/productDetail/selectors';
import {vs, s, ms} from 'react-native-size-matters';
import R from 'res';

export const ProductDetailScreen = () => {
  const {detailData} = useAppSelector(getProductDetail);

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.container}>
        {detailData ? (
          <View style={styles.itemContent}>
            <Text style={styles.title}>{detailData?.title}</Text>

            <Text style={styles.subTitle}>{detailData?.body}</Text>
          </View>
        ) : (
          <Text>Нет информации</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: s(10),
    paddingVertical: vs(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContent: {
    paddingVertical: vs(10),
    paddingHorizontal: s(5),
    borderRadius: s(8),
    backgroundColor: '#48C9B0',
  },
  title: {
    color: 'white',
    fontSize: ms(16),
    fontFamily: R.fonts.Poppins.semiBold,
    marginBottom: vs(10),
  },
  subTitle: {
    color: 'red',
    fontSize: ms(16),
    fontFamily: R.fonts.Poppins.thin,
  },
});
