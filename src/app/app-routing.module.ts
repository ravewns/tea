import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./views/main/main.component";
import {CatalogComponent} from "./components/common/pages/catalog/catalog.component";
import {ProductComponent} from "./views/products/product.component";
import {OrderComponent} from "./views/order/order.component";

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:id', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
