import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ProductState} from '../store/reducers/product.reducers';
import {selectFilters, selectProducts} from '../store';
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

  constructor(
    private store: Store<ProductState>,
    private translate: TranslateService) {
  }

  ngOnInit() {
    this.store.dispatch(new ProductActions.Upload(this.translate.currentLang));
    this.store.dispatch(new ProductActions.GetFilters(this.translate.currentLang));

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
  }

}
