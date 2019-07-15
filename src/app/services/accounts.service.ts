import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AccountsService {

  constructor(private http: HttpClient,private router:Router) { }
  api_url = 'https://smartstock.elbanyaoui.com/api/accounts';
  headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token'),'Retry-After': '60'});


  addNewAccount(object){
    return this.http.post(this.api_url, JSON.stringify(object),{ headers: this.headers });
  }

  getAccounts(){
    return this.http.get(this.api_url, { headers: this.headers });
  }

  deleteAccount(id){
    return this.http.delete(this.api_url + "/" +id,{headers:this.headers});
  }
}
