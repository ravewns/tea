import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductComponent} from "./product.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
