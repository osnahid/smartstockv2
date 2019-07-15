import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../services/orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
  orders=[];
  constructor(private order:OrdersService) { }

  ngOnInit() {
    this.order.getOrders().subscribe(
    (resp:any[]) => {
      this.orders = resp;
      // console.log(this.orders);
    }
    );
  }

}
