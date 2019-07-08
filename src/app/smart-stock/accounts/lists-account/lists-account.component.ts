import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AccountsService} from '../../../services/accounts.service';

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
        console.log(this.accounts);
      }
    );
  }

  deleteSingleAccount(id){
    this.account.deleteAccount(id).subscribe(
      resp => {
        for (let i =0 ; i < this.accounts.lenght ; i++){
          if (this.accounts[i].uuid == id)
            this.accounts = this.accounts.splice(i,1);
        }
      }
    );
  }

}
