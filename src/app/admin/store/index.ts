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

export const selectCategoryFilter = createSelector(
  selectProductState,
  fromProduct.getCategoryFilter
);

export const selectPublisherFilter = createSelector(
  selectProductState,
  fromProduct.getPublisherFilter
);

export const selectProductsError = createSelector(
  selectProductState,
  fromProduct.getProductsError
);

export const selectFiltersError = createSelector(
  selectProductState,
  fromProduct.getFiltersError
);
