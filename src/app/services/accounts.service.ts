import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AccountsService {

  constructor(private http: HttpClient,private router:Router) { }
  api_url = 'https://smartstock.elbanyaoui.com/api/accounts';
  headers = new HttpHeaders({ 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9zbWFydHN0b2NrLmVsYmFueWFvdWkuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTYxOTcwMTgyLCJleHAiOjE1NjI4MzQxODIsIm5iZiI6MTU2MTk3MDE4MiwianRpIjoia0tmbWUxU1ZjSTYzVFR0QSIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSIsIm5hbWUiOiJNb2hhbW1lZCBFTCBCQU5ZQU9VSSIsImRlZmF1bHRfbWVyY2hhbnQiOiJzb29uIn0.JuwJqZi_XpFDNUSgn0fuvMoNI2wbyAyw6k6gZNfpDRU'});


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