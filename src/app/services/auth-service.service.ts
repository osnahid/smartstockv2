import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthServiceService {

  constructor(private http: HttpClient,private router:Router) { }
  api_url = 'https://smartstock.elbanyaoui.com/api/login';
  isLoggedIn: boolean = false;
  headers = new HttpHeaders({ 'Content-type': 'application/json'});

  logMe(email,password){
    let object = {
      'email' : email,
      'password' : password
    };
      this.http.post(this.api_url, JSON.stringify(object),{headers: this.headers}).subscribe(
       (resp:any) => {
        localStorage.setItem('access_token',resp.token);
        this.isLoggedIn = true;
        this.router.navigate(['/dashboard']);

      }
    );
  }
}
