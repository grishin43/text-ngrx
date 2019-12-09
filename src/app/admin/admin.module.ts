import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [AdminComponent, ProductsComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TranslateModule
  ]
})
export class AdminModule { }
