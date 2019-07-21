import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient,private router:Router) { }
  api_url = 'https://smartstock.elbanyaoui.com/api/orders';
  headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token')});



  getOrders(){
    return this.http.get(this.api_url , { headers: this.headers });
  }

  newOrder(object){
    return this.http.post(this.api_url,JSON.stringify(object),{ headers: this.headers })
  }


  getOrderDetails(uuid){
    return this.http.get(this.api_url + "/" + uuid , { headers: this.headers });

  }
}
