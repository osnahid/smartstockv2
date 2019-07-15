import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../../services/categories.service';
import {ItemsService} from '../../../services/items.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {StocksService} from '../../../services/stocks.service';
import {AccountsService} from '../../../services/accounts.service';
import {Route, Router} from '@angular/router';
import { ActivatedRoute,NavigationEnd } from '@angular/router'
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  orderLines=[];
  orderType='';
  paymentMethod= 'cash';
  storageCard=[];
  montant;
  selectedAccount;

  closeResult: string;
  lineItems = [{
    'stock':'',
    'order_type': this.orderType,
    'account': this.selectedAccount,
    'montant': this.montant,
    'payment_method' :this.paymentMethod,
    'order_lines': this.orderLines
  }];
  categories:any=[];
  items:any=[];
  prixTotal=0;
  customName;
  qte;
  accounts=[];
  price=null;
  unity='kg';
  singleItem = {
    item:{
      'custom_name':'',
      'qty': 0,
      'price': 0,
      'unit': ''
    }
  };
  stocks;
  constructor(
        private categorie:CategoriesService ,
        private account:AccountsService ,
        private item:ItemsService ,
        private stock:StocksService ,
        private modalService: NgbModal,
        private route: ActivatedRoute,
        private router: Router
  )
  {
    this.router.events.pipe(filter(response => response instanceof NavigationEnd)).subscribe(
      response =>{
        this.accounts = [];
        if(response instanceof NavigationEnd)
          this.route.params.subscribe(params => {
            this.orderType = params['type'];
          });
        this.account.getAccounts().subscribe(
          (resp:any)=> {
            this.accounts = [];
            if (this.orderType == 'vente'){
              for (let i=0; i<resp.length;i++) {
                if (resp[i].type == 'client')
                  this.accounts.push(resp[i]);
              }
            }else{
              for (let i=0; i<resp.length;i++) {
                if (resp[i].type == 'fournisseur')
                  this.accounts.push(resp[i]);
              }
            }
          }
        );
      }
    );
  }

  ngOnInit() {
    this.orderLines =  JSON.parse(localStorage.getItem("OrderLines"));
    if(JSON.parse(localStorage.getItem("OrderLines")) == null )
      this.storageCard = [];
    else{
      this.storageCard = JSON.parse(localStorage.getItem("OrderLines"));
      this.calculatePrice();
    }
    this.route.params.subscribe(params => {
     this.orderType = params['type'];
    });
   console.log(this.orderType);
    this.categorie.getCategories().subscribe(
      (resp:any)=>{
        this.categories = resp.categories;
        this.getItemsByCategorie(this.categories[0].uuid);
      });
    this.stock.getStocks().subscribe(
      (resp:any)=> {
        this.stocks = resp.stocks;
      });
  }

  calculatePrice(){
    this.prixTotal = 0;
    for (let i=0 ;i<this.storageCard.length;i++){
      this.prixTotal += this.storageCard[i].item.qty*this.storageCard[i].item.price;
    }
  }

  getItemsByCategorie(uuid){
    this.item.getItems(uuid).subscribe(
      (resp: any) => {
        this.items = resp.items ;
      }
    );
  }

  open(content){
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
    this.orderLines.push({item :{price:this.price,qty:this.qte,unit:this.unity,custom_name:name}});
    console.log(this.orderLines);
    this.price = null;
    this.qte = '';
    for (let i=0; i< this.orderLines.length;i++){
      this.prixTotal += (this.orderLines[i].item.price*this.orderLines[i].item.qty);
    }

  }

  deleteItem(index){
    console.log(index);
    this.orderLines.splice(index,1);
    console.log(this.orderLines);
    localStorage.setItem('OrderLines', JSON.stringify(this.orderLines));
    this.storageCard = JSON.parse(localStorage.getItem("OrderLines"));
    this.calculatePrice();

  }

  testStore(){
    localStorage.setItem('OrderLines', JSON.stringify(this.orderLines));
    this.storageCard = JSON.parse(localStorage.getItem("OrderLines"));
    this.calculatePrice();
  }

  showData(){
    this.lineItems = [{
      'stock':'',
      'order_type': this.orderType,
      'account': this.selectedAccount,
      'montant': this.montant,
      'payment_method' :this.paymentMethod,
      'order_lines': this.storageCard
    }];
    console.log(this.lineItems);
  }

}
