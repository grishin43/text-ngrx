import {ProductActionsTypes, ProductActionsUnion} from '../actions/product.actions';

export interface ProductState {
  productsErrorMsg: string;
  products: any;
  filtersErrorMsg: string;
  filters: any;
  publisherFilter: any;
  categoryFilter: any;
}

export const initialState: ProductState = {
  productsErrorMsg: null,
  products: null,
  filtersErrorMsg: null,
  filters: null,
  publisherFilter: '',
  categoryFilter: ''
};

export function reducer(state: ProductState = initialState, actions: ProductActionsUnion): ProductState {
  switch (actions.type) {
    case ProductActionsTypes.UPLOAD_SUCCESS:
      return {
        ...state,
        products: actions.payload,
        productsErrorMsg: null
      };
    case ProductActionsTypes.UPLOAD_FAIL:
      return {
        ...state,
        productsErrorMsg: 'Nothing to show'
      };
    case ProductActionsTypes.GET_FILTERS_SUCCESS:
      return {
        ...state,
        filters: actions.payload,
        filtersErrorMsg: null
      };
    case ProductActionsTypes.GET_FILTERS_FAIL:
      return {
        ...state,
        filtersErrorMsg: 'Nothing to show'
      };
    case ProductActionsTypes.SET_CATEGORY_FILTER:
      return {
        ...state,
        categoryFilter: actions.payload
      };
    case ProductActionsTypes.SET_PUBLISHER_FILTER:
      return {
        ...state,
        publisherFilter: actions.payload
      };
    default:
      return state;
  }
}

export const getProducts = (state: ProductState) => state.products;
export const getFilters = (state: ProductState) => state.filters;
export const getCategoryFilter = (state: ProductState) => state.categoryFilter;
export const getPublisherFilter = (state: ProductState) => state.publisherFilter;
export const getProductsError = (state: ProductState) => state.productsErrorMsg;
export const getFiltersError = (state: ProductState) => state.filtersErrorMsg;
