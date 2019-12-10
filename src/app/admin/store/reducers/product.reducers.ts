import {ProductActionsTypes, ProductActionsUnion} from '../actions/product.actions';

export interface ProductState {
  loaded: boolean;
  errorMsg: string;
  products: any;
  filters: any;
  filtersLoaded: boolean;
}

export const initialState: ProductState = {
  loaded: false,
  errorMsg: null,
  products: null,
  filters: null,
  filtersLoaded: false
};

export function reducer(state: ProductState = initialState, actions: ProductActionsUnion): ProductState {
  switch (actions.type) {
    case ProductActionsTypes.UPLOAD_SUCCESS:
      return {
        ...state,
        errorMsg: null,
        products: actions.payload,
        loaded: true
      };
    case ProductActionsTypes.UPLOAD_FAIL:
      return {
        ...state,
        errorMsg: 'Nothing to show',
        loaded: false
      };
    case ProductActionsTypes.GET_FILTERS_SUCCESS:
      return {
        ...state,
        filters: actions.payload,
        filtersLoaded: true
      };
    case ProductActionsTypes.GET_FILTERS_FAIL:
      return {
        ...state,
        errorMsg: 'Nothing to show',
        filtersLoaded: false
      };
    default:
      return state;
  }
}

export const getProducts = (state: ProductState) => state.products;
export const getFilters = (state: ProductState) => state.filters;
