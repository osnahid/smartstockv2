import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AccountsService} from '../../../services/accounts.service';
import Swal from 'sweetalert2'
import {filter} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-lists-account',
  templateUrl: './lists-account.component.html',
  styleUrls: ['./lists-account.component.css']
})
export class ListsAccountComponent implements OnInit {
  config:any;
  accounts:any=[];
  orderType='';

  constructor(
    private http: HttpClient,
    private account:AccountsService,
    private route: ActivatedRoute,
    private router: Router
  )
  {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.accounts.length
    };
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
            if (this.orderType == 'client'){
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

    // this.account.getAccounts().subscribe(
    //   resp => {
    //     this.accounts = resp ;
    //   }
    // );
  }

  deleteSingleAccount(id){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    this.account.deleteAccount(id).subscribe(
      (resp:any ) => {
        Toast.fire({type: 'success', title: 'Utilisateur supprimé'});
        for (let i =0 ; i < this.accounts.length ; i++){
          if (this.accounts[i].uuid == id)
            this.accounts.splice(i,1);

        }
      }
    );
  }

}
