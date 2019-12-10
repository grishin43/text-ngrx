import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent implements OnInit {
  @Input() categories: any;
  @Input() publishers: any;
  publisherFilter = '';
  categoryFilter = '';

  constructor() {
  }

  ngOnInit() {
  }

  resetFilters() {
    this.publisherFilter = '';
    this.categoryFilter = '';
  }
}
