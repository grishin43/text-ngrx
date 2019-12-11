import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ProductState} from '../../store/reducers/product.reducers';
import * as ProductActions from '../../store/actions/product.actions';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent implements OnInit {
  @Input() categories: any;
  @Input() publishers: any;
  publisher = '';
  category = '';

  constructor(private store: Store<ProductState>) {
  }

  ngOnInit() {
  }

  changePublisher(publisherId) {
    this.publisher = publisherId;
    this.store.dispatch(new ProductActions.SetPublisherFilter(publisherId));
  }

  changeCategory(categoryId) {
    this.category = categoryId;
    this.store.dispatch(new ProductActions.SetCategoryFilter(categoryId));
  }

  resetFilters() {
    this.changePublisher('');
    this.changeCategory('');
  }
}
