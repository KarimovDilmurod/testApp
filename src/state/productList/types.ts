import {IProductData} from 'types/data';

export type ProductListState = {
  listData: IProductData[] | null;
  loading: boolean;
  lastLimit: number;
  hasMore: boolean;
  moreLoading: boolean;
};
