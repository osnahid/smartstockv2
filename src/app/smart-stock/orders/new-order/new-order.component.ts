import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../../services/categories.service';
import {ItemsService} from '../../../services/items.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {StocksService} from '../../../services/stocks.service';
import {AccountsService} from '../../../services/accounts.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  closeResult: string;
  lineItems = [{
    'stock':'',
    'order_type':'',
    'account': '',
    'payment_method' :'',
    'order_lines': []
  }];
  categories;
  items;
  prixTotal=0;
  customName;
  qte;
  accounts;
  price;
  unity='kg';
  orderLines=[];
  singleItem = {
    item:{
      'custom_name':'',
      'qty': 0,
      'price': 0,
      'unit': ''
    }
  };
  stocks;

  constructor(private categorie:CategoriesService ,private account:AccountsService ,private item:ItemsService , private stock:StocksService ,private modalService: NgbModal) { }

  ngOnInit() {
    this.categorie.getCategories().subscribe(
      (resp:any)=>{
        this.categories = resp.categories;
      });
    this.stock.getStocks().subscribe(
      (resp:any)=> {
        this.stocks = resp.stocks;
      });
    this.account.getAccounts().subscribe(
      (resp:any)=> {
        this.accounts = resp;
        console.log(this.accounts);
      }
    );

  }

  getItemsByCategorie(uuid){
    this.item.getItems(uuid).subscribe(
      (resp: any) => {
        this.items = resp.items ;
        console.log(this.items);
      }
    );
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  firefirst(name){
    this.singleItem.item.price = this.price;
    this.singleItem.item.qty = this.qte;
    this.singleItem.item.unit = this.unity;
    this.singleItem.item.custom_name = name;
    this.orderLines.push({price:this.price,qty:this.qte,unit:this.unity,custom_name:name});
    console.log(this.orderLines);
    this.price = '';
    this.qte = '';
    for (let i=0; i< this.orderLines.length;i++){
      this.prixTotal += (this.orderLines[i].price*this.orderLines[i].qty);
    }

  }




}
