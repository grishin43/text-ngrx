import {Action} from '@ngrx/store';

export enum ProductActionsTypes {
  UPLOAD = '[PRODUCTS] UPLOAD',
  UPLOAD_SUCCESS = '[PRODUCTS] UPLOAD_SUCCESS',
  UPLOAD_FAIL = '[PRODUCTS] UPLOAD_FAIL',
  GET_FILTERS = '[PRODUCTS] GET_FILTERS',
  GET_FILTERS_SUCCESS = '[PRODUCTS] GET_FILTERS_SUCCESS',
  GET_FILTERS_FAIL = '[PRODUCTS] GET_FILTERS_FAIL',
}

export class Upload implements Action {
  readonly type = ProductActionsTypes.UPLOAD;

  constructor(public payload: any) {
  }
}

export class UploadSuccess implements Action {
  readonly type = ProductActionsTypes.UPLOAD_SUCCESS;

  constructor(public payload: any) {
  }
}

export class UploadFail implements Action {
  readonly type = ProductActionsTypes.UPLOAD_FAIL;
}

export class GetFilters implements Action {
  readonly type = ProductActionsTypes.GET_FILTERS;

  constructor(public payload: any) {
  }
}

export class GetFiltersSuccess implements Action {
  readonly type = ProductActionsTypes.GET_FILTERS_SUCCESS;

  constructor(public payload: any) {
  }
}

export class GetFiltersFail implements Action {
  readonly type = ProductActionsTypes.GET_FILTERS_FAIL;
}


export type ProductActionsUnion = Upload | UploadSuccess | UploadFail | GetFilters | GetFiltersSuccess | GetFiltersFail;
