import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {ProductsComponent} from './products/products.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TranslateModule} from '@ngx-translate/core';
import {reducer} from './store/reducers/product.reducers';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ProductEffects} from './store/effects/product.effects';
import {ProductItemComponent} from './products/product-item/product-item.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductFiltersComponent} from './products/product-filters/product-filters.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from '../pipes/filter.pipe';

@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    DashboardComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductFiltersComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TranslateModule,
    NgxPaginationModule,
    StoreModule.forFeature('adminModule', reducer),
    EffectsModule.forFeature([ProductEffects]),
    FormsModule
  ]
})
export class AdminModule {
}
