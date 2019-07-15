import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class StocksService {

  constructor(private http: HttpClient,private router:Router) { }
  api_url = 'https://smartstock.elbanyaoui.com/api/stocks';
  headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token')});



  getStocks(){
    return this.http.get(this.api_url, { headers: this.headers });
  }
}
