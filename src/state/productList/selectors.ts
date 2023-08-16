import {RootState} from 'state';

export const getProductList = (state: RootState) => state.productList;
export const getProductListWithSearch =
  (search: string) => (state: RootState) => ({
    ...state.productList,
    listData:
      (search
        ? state.productList.listData?.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase()),
          )
        : state.productList.listData) || [],
  });
