import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() infoFilm:any;
  @Input() showFavorite:boolean = true;

  constructor(
    private router:Router
  ){}

  detail(){
    this.router.navigate(['products/123'])
  }
}
