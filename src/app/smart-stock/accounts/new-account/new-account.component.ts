import { Component, OnInit } from '@angular/core';
import {AccountsService} from '../../../services/accounts.service';
import {Router} from '@angular/router';
import Swal from "sweetalert2";
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
      'phone' : this.tel,
      'address' : this.address,
      'city': this.ville,
      'zipcode' : this.zipcode,
      'ice': this.ice,
      'rc': this.rc,
      'if' : this.iff,
      'type' : this.clientFounisseur

    };
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    this.account.addNewAccount(data).subscribe(
      (resp:any) => {
        if(resp.status){
          Toast.fire({type: 'success', title: 'Utilisateur ajouté'});
          this.router.navigate(['/dashboard/listAccounts']);
        }
      }

    );
  }

}
