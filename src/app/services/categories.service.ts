import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient,private router:Router) { }
  api_url = 'https://smartstock.elbanyaoui.com/api/categories';
  headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token')});



  getCategories(){
    return this.http.get(this.api_url, { headers: this.headers });
  }


}
