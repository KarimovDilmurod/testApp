import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {IProductData} from 'types/data';

export const getProductListAction = createAsyncThunk<IProductData[]>(
  'list/get',
  async () => {
    try {
      const {data: response} = await axios.get<IProductData[]>(
        'https://jsonplaceholder.typicode.com/posts',
        {
          params: {
            _limit: 20,
            _start: 0,
          },
        },
      );

      return response;
    } catch (e) {
      throw e;
    }
  },
);

export const getMoreProductListAction = createAsyncThunk<
  IProductData[],
  {lastLimit: number}
>('moreList/get', async arg => {
  try {
    const {data: response} = await axios.get<IProductData[]>(
      'https://jsonplaceholder.typicode.com/posts',
      {
        params: {
          _limit: 20,
          _start: arg.lastLimit,
        },
      },
    );

    return response;
  } catch (e) {
    throw e;
  }
});
