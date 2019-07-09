import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AccountsService} from '../../../services/accounts.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lists-account',
  templateUrl: './lists-account.component.html',
  styleUrls: ['./lists-account.component.css']
})
export class ListsAccountComponent implements OnInit {
  accounts;

  constructor(private http: HttpClient,private account:AccountsService) { }

  ngOnInit() {

    this.account.getAccounts().subscribe(
      resp => {
        this.accounts = resp ;
      }
    );
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
