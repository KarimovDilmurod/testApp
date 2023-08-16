import AsyncStorage from '@react-native-community/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PersistConfig, persistReducer} from 'redux-persist';
import {getProductListAction, getMoreProductListAction} from './actions';
import {IProductData} from 'types/data';
import {ProductListState} from './types';
import {uniqBy} from 'lodash';

const initialState: ProductListState = {
  loading: false,
  listData: null,
  lastLimit: 0,
  hasMore: true,
  moreLoading: false,
};

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProductListAction.pending, state => {
        state.loading = true;
      })
      .addCase(
        getProductListAction.fulfilled,
        (state, action: PayloadAction<IProductData[]>) => {
          state.loading = false;
          state.listData = action.payload || [];
          state.hasMore = action.payload.length === 20;
          state.lastLimit = action.payload.length;
        },
      )
      .addCase(getProductListAction.rejected, state => {
        state.loading = false;
      })

      .addCase(getMoreProductListAction.pending, state => {
        state.moreLoading = true;
      })
      .addCase(
        getMoreProductListAction.fulfilled,
        (state, action: PayloadAction<IProductData[]>) => {
          state.moreLoading = false;
          state.listData = uniqBy(
            [...(state.listData || []), ...action.payload],
            'id',
          );
          state.hasMore = action.payload.length === 20;
          state.lastLimit += action.payload.length;
        },
      )
      .addCase(getMoreProductListAction.rejected, state => {
        state.moreLoading = false;
      });
  },
});

const persistConfig: PersistConfig<ProductListState> = {
  key: 'productList',
  storage: AsyncStorage,
  whitelist: [''],
  version: 1,
};

export const productListReducer = persistReducer(
  persistConfig,
  productListSlice.reducer,
);
