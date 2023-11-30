import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { AspectRatio, RoundedCSS, StorageKey } from "src/app/core/enums";
import { IBookData } from "src/app/core/interfaces/books.interface";
import { GlobalService, StoreService } from 'src/app/core/services';
import { ModalService } from 'src/app/core/services/modal';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() infoFilm!:IBookData | any;
  @Input() showFavorite:boolean = true;
  @Input() skeleton:boolean = false;

  public RoundedCSS = RoundedCSS;
  public AspectRatio = AspectRatio;

  constructor(
    private router: Router,
    private globalService: GlobalService,
    private modalService: ModalService,
    private storeService: StoreService
  ){}

  detail(){
    this.router.navigate(['products', this.infoFilm?.isbn])
  }

  addCart(){
    const id = this.storeService.getSession(StorageKey.cart);
    const params = {
      bookId: this.infoFilm.id,
      quantity: 1,
      sessionId: id || '',
      action: 'ADD'
    }
    this.globalService.updateCart(params).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (error) => {
        this.modalService.alert({
          type: 'error',
          message: error.message
        })
      }
    })
  }
}
