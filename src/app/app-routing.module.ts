import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SmartStockComponent} from './smart-stock/smart-stock.component';
import {AccountsComponent} from './smart-stock/accounts/accounts.component';
import {OrdersComponent} from './smart-stock/orders/orders.component';
import {NewAccountComponent} from './smart-stock/accounts/new-account/new-account.component';
import {ListsAccountComponent} from './smart-stock/accounts/lists-account/lists-account.component';

const routes: Routes = [
  {
  path: 'dashboard', component: SmartStockComponent , children : [
      {
        path: 'newAccount' , component: NewAccountComponent
       },
      {
        path: 'listAccounts' , component: ListsAccountComponent
      },
      {
        path: 'orders' , component: OrdersComponent
      }
  ]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
