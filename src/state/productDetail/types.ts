import {IProductData} from 'types/data';

export type ProductDetailState = {
  detailData: IProductData | null;
  loading: boolean;
};
