import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-stock',
  templateUrl: './smart-stock.component.html',
  styleUrls: ['./smart-stock.component.css']
})
export class SmartStockComponent implements OnInit {
  isCollapsedUser = false;
  isCollapsedOrder = true;
  constructor() { }

  ngOnInit() {
  }

}
