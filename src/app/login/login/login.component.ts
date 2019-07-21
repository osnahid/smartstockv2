import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../services/auth-service.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthServiceService,private http: HttpClient,private router:Router) { }
  email='';
  password='';
  ngOnInit() {
  }


  login(){
    console.log(this.auth.logMe(this.email,this.password));

  }
}
