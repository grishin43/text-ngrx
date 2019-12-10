import * as fromProduct from './reducers/product.reducers';
import {ProductState} from './reducers/product.reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectProductState = createFeatureSelector<ProductState>('adminModule');

export const selectProducts = createSelector(
  selectProductState,
  fromProduct.getProducts
);

export const selectFilters = createSelector(
  selectProductState,
  fromProduct.getFilters
);
