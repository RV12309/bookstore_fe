import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { AspectRatio, RoundedCSS } from "src/app/core/enums";
import { IBookData } from "src/app/core/interfaces/books.interface";
import { GlobalService } from 'src/app/core/services';
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
    private modalService: ModalService
  ){}

  detail(){
    this.router.navigate(['products', this.infoFilm?.isbn])
  }

  addCart(){
    const params = {
      bookId: this.infoFilm.id,
      quantity: 1,
      sessionId: ''
    }
    this.globalService.addToCart(params).subscribe({
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
