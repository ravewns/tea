import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './components/common/pages/catalog/catalog.component';
import {HttpClientModule} from "@angular/common/http";
import { CardComponent } from './components/card/card.component';
import {ProductsModule} from "./views/products/products.module";
import {OrderModule} from "./views/order/order.module";
import {MainModule} from "./views/main/main.module";
import {SharedModule} from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsModule,
    OrderModule,
    MainModule,
    SharedModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
