import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ProductState} from '../store/reducers/product.reducers';
import {selectFilters, selectFiltersError, selectProducts, selectProductsError} from '../store';
import * as ProductActions from '../store/actions/product.actions';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any;
  filters: any;
  productsError: any = null;
  filtersError: any = null;

  constructor(
    private store: Store<ProductState>,
    private translateService: TranslateService) {
  }

  ngOnInit() {
    this.store.dispatch(new ProductActions.Upload(this.translateService.currentLang));
    this.store.dispatch(new ProductActions.GetFilters(this.translateService.currentLang));

    this.store.select(selectProducts).subscribe((res: any) => {
      if (res) {
        this.products = res;
      }
    });
    this.store.select(selectFilters).subscribe((res: any) => {
      if (res) {
        this.filters = res;
      }
    });
    this.store.select(selectProductsError).subscribe((res: any) => {
      this.productsError = res;
    });
    this.store.select(selectFiltersError).subscribe((res: any) => {
      this.filtersError = res;
    });

  }

}
