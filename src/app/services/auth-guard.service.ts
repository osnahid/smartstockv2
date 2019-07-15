import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthServiceService} from './auth-service.service';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router , private http : HttpClient,private authService : AuthServiceService) {  }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isLoggedIn) {
        return true;
      }

      // navigate to login page
      // you can save redirect url so after authing we can move them back to the page they requested
    }
}
