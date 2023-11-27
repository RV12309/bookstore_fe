import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { AspectRatio, RoundedCSS } from "src/app/core/enums";
import { IBookData } from "src/app/core/interfaces/books.interface";

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
    private router:Router
  ){}

  detail(){
    this.router.navigate(['products', this.infoFilm?.isbn])
  }
}
