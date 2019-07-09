import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../../services/categories.service';
import {ItemsService} from '../../../services/items.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  closeResult: string;

  categories;
  items;
  constructor(private categorie:CategoriesService , private item:ItemsService , private modalService: NgbModal) { }

  ngOnInit() {
    this.categorie.getCategories().subscribe(
      (resp:any)=>{
        this.categories = resp.categories;
        console.log(this.categories);
      });
  }

  getItemsByCategorie(uuid){
    this.item.getItems(uuid).subscribe(
      (resp: any) => {
        this.items = resp.items ;
        console.log(this.items);
      }
    );
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
