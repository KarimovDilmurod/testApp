import {createAction} from '@reduxjs/toolkit';
import {IProductData} from 'types/data';

export const addProductAction = createAction<IProductData>('detail/add');
