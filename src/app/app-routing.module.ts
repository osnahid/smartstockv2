import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SmartStockComponent} from './smart-stock/smart-stock.component';
import {AccountsComponent} from './smart-stock/accounts/accounts.component';
import {OrdersComponent} from './smart-stock/orders/orders.component';
import {NewAccountComponent} from './smart-stock/accounts/new-account/new-account.component';
import {ListsAccountComponent} from './smart-stock/accounts/lists-account/lists-account.component';
import {NewOrderComponent} from './smart-stock/orders/new-order/new-order.component';
import {ListOrdersComponent} from './smart-stock/orders/list-orders/list-orders.component';
import {LoginComponent} from './login/login/login.component';
import {AuthGuardService} from './services/auth-guard.service';
import {DashboardComponent} from './smart-stock/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: SmartStockComponent,
    // canActivate: [AuthGuardService],
    children : [
        {
          path: '', component:DashboardComponent
        },
        {
          path: 'newAccount' , component: NewAccountComponent
         },
        {
          path: 'listAccounts' , component: ListsAccountComponent
        },
        {
          path: 'newOrder/:type' , component: NewOrderComponent
        },
        {
          path: 'listOrders' , component: ListOrdersComponent
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
