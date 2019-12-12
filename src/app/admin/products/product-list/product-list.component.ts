import {Component, Input, OnInit} from '@angular/core';
import {selectCategoryFilter, selectPublisherFilter} from '../../store';
import {Store} from '@ngrx/store';
import {ProductState} from '../../store/reducers/product.reducers';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() private productList;

  page = 1;
  publisher = '';
  category = '';

  constructor(private store: Store<ProductState>) {
  }

  ngOnInit() {
    this.store.select(selectCategoryFilter).subscribe((res) => {
      this.category = res;
    });
    this.store.select(selectPublisherFilter).subscribe((res) => {
      this.publisher = res;
    });
  }

  onPageChange(pageNumber) {
    this.page = pageNumber;
  }
}
