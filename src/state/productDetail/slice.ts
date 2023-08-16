import AsyncStorage from '@react-native-community/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PersistConfig, persistReducer} from 'redux-persist';
import {addProductAction} from './actions';
import {IProductData} from 'types/data';
import {ProductDetailState} from './types';

const initialState: ProductDetailState = {
  loading: false,
  detailData: null,
};

const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      addProductAction.type,
      (state, action: PayloadAction<IProductData>) => {
        state.detailData = action.payload;
      },
    );
  },
});

const persistConfig: PersistConfig<ProductDetailState> = {
  key: 'productDetail',
  storage: AsyncStorage,
  whitelist: [''],
};

export const productDetailReducer = persistReducer(
  persistConfig,
  productDetailSlice.reducer,
);
