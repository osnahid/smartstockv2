import { Component, OnInit } from '@angular/core';
import {AccountsService} from '../../../services/accounts.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  name;
  email;
  tel;
  address;
  ville;
  zipcode;
  ice;
  rc;
  iff;
  clientFounisseur = 'client';
  constructor(private account: AccountsService,private router:Router) { }

  ngOnInit() {
  }

  addAccount(f) {
    let data = {
      'name' : this.name,
      'email' : this.email,
      'tel' : this.tel,
      'address' : this.address,
      'city': this.ville,
      'zipcode' : this.zipcode,
      'ice': this.ice,
      'rc': this.rc,
      'if' : this.iff,
      'type' : this.clientFounisseur

    };
    this.account.addNewAccount(data).subscribe(
      (resp:any) => {
        if(resp.status){
          this.router.navigate(['/dashboard/listAccounts']);
        }
      }

    );
  }

}
