import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../services/orders.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
  orders=[];
  closeResult: string;
  ordersDetails =[];
  config: any;


  constructor(private order:OrdersService,private modalService: NgbModal) {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.orders.length
    };

  }

  ngOnInit() {
    this.order.getOrders().subscribe(
    (resp:any[]) => {
      this.orders = resp;
      // console.log(this.orders);
    }
    );
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  getOrderDetailsFromService(uuid){
    this.ordersDetails =[];
    this.order.getOrderDetails(uuid).subscribe(
      (resp:any) => {
        this.ordersDetails = resp.order_lines;
        console.log(this.ordersDetails);
      }

    );

  }


}
