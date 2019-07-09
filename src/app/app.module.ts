import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartStockComponent } from './smart-stock/smart-stock.component';
import { AccountsComponent } from './smart-stock/accounts/accounts.component';
import { OrdersComponent } from './smart-stock/orders/orders.component';
import { NewAccountComponent } from './smart-stock/accounts/new-account/new-account.component';
import { ListsAccountComponent } from './smart-stock/accounts/lists-account/lists-account.component';
import {AccountsService} from './services/accounts.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ListOrdersComponent } from './smart-stock/orders/list-orders/list-orders.component';
import { NewOrderComponent } from './smart-stock/orders/new-order/new-order.component';
import {CategoriesService} from './services/categories.service';
import {ItemsService} from './services/items.service';
import {StocksService} from './services/stocks.service';
import {OrdersService} from './services/orders.service';

@NgModule({
  declarations: [
    AppComponent,
    SmartStockComponent,
    AccountsComponent,
    OrdersComponent,
    NewAccountComponent,
    ListsAccountComponent,
    ListOrdersComponent,
    NewOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    AccountsService,
    CategoriesService,
    ItemsService,
    StocksService,
    OrdersService
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
