import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useAppSelector} from 'hooks/redux';
import {getProductListWithSearch} from 'state/productList/selectors';
import ProductCard from 'components/ProductCard';
import {vs, s, ms} from 'react-native-size-matters';
import {useAppDispatch} from 'hooks/redux';
import {
  getMoreProductListAction,
  getProductListAction,
} from 'state/productList/actions';
import R from 'res';

export const ProductListScreen = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const {listData, moreLoading, loading, lastLimit, hasMore} = useAppSelector(
    getProductListWithSearch(search),
  );

  useEffect(() => {
    dispatch(getProductListAction());
  }, []);

  const onLoading = () => {
    if (search) {
      return;
    }

    if (hasMore) {
      dispatch(getMoreProductListAction({lastLimit}));
    }
  };

  const onRefresh = () => {
    dispatch(getProductListAction());
  };

  const addSearch = () => {
    setSearch(searchInput);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listData}
        ListHeaderComponent={
          <View style={styles.headerContent}>
            <View style={styles.titleContent}>
              <Text style={styles.title}>ProductList</Text>
            </View>

            <View style={styles.searchContent}>
              <TextInput
                placeholder="search..."
                placeholderTextColor={'#2C3E50'}
                style={styles.search}
                value={searchInput}
                onChangeText={text => {
                  if (!text) {
                    setSearch('');
                  }

                  setSearchInput(text);
                }}
              />

              <TouchableOpacity
                style={styles.searchBtn}
                hitSlop={10}
                onPress={addSearch}>
                <R.icons.SearchIcon color={'white'} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        }
        onEndReached={onLoading}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        contentContainerStyle={styles.itemContent}
        keyExtractor={(item, index) => item.id.toString() + index}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          moreLoading ? (
            <ActivityIndicator size="large" style={styles.loadingStyle} />
          ) : null
        }
        renderItem={({item, index}) => (
          <ProductCard product={item} key={index} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContent: {
    paddingBottom: vs(50),
    paddingHorizontal: s(10),
  },
  headerContent: {
    paddingVertical: vs(10),
  },
  title: {
    fontSize: ms(18),
    fontWeight: 'bold',
  },
  loadingStyle: {
    marginVertical: vs(20),
  },
  searchContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: s(10),
    paddingVertical: vs(2),
    backgroundColor: '#CACFD2',
    borderRadius: s(4),
    alignItems: 'center',
    marginVertical: vs(10),
  },
  search: {
    width: '80%',
    height: vs(40),
    color: '#2C3E50',
    fontSize: ms(14),
    alignItems: 'center',
  },
  searchBtn: {
    backgroundColor: 'blue',
    paddingHorizontal: s(10),
    paddingVertical: vs(10),
    borderRadius: s(4),
  },
  titleContent: {
    alignItems: 'center',
  },
});
