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

@NgModule({
  declarations: [
    AppComponent,
    SmartStockComponent,
    AccountsComponent,
    OrdersComponent,
    NewAccountComponent,
    ListsAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AccountsService
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
