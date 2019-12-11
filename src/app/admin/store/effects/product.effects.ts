import * as productActions from '../actions/product.actions';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpService} from '../../../services/http.service';

@Injectable()
export class ProductEffects {
  constructor(private httpService: HttpService, private actions$: Actions) {
  }

  @Effect()
  upload$: Observable<Action> = this.actions$.pipe(ofType(productActions.ProductActionsTypes.UPLOAD)).pipe(
    switchMap((action: any) => {
      return this.httpService
        .getProducts(action.payload)
        .pipe(
          map(products => new productActions.UploadSuccess(products)),
          catchError(() => of({type: productActions.ProductActionsTypes.UPLOAD_FAIL}))
        );
    })
  );

  @Effect()
  getFilters$: Observable<Action> = this.actions$.pipe(ofType(productActions.ProductActionsTypes.GET_FILTERS)).pipe(
    switchMap((action: any) => {
      return this.httpService
        .getFilters(action.payload)
        .pipe(
          map(filters => new productActions.GetFiltersSuccess(filters)),
          catchError(() => of({type: productActions.ProductActionsTypes.GET_FILTERS_FAIL}))
        );
    })
  );

  @Effect({dispatch: false})
  getFiltersSuccess$ = this
    .actions$
    .pipe(
      ofType(productActions.ProductActionsTypes.GET_FILTERS_SUCCESS)
    );

  @Effect({dispatch: false})
  setCategoryFilter$: Observable<Action> = this
    .actions$
    .pipe(
      ofType<productActions.SetCategoryFilter>(productActions.ProductActionsTypes.SET_CATEGORY_FILTER)
    );

  @Effect({dispatch: false})
  setPublisherFilter$ = this
    .actions$
    .pipe(
      ofType<productActions.SetCategoryFilter>(productActions.ProductActionsTypes.SET_PUBLISHER_FILTER)
    );

  @Effect({dispatch: false})
  uploadSuccess$ = this
    .actions$
    .pipe(
      ofType(productActions.ProductActionsTypes.UPLOAD_SUCCESS)
    );
}
