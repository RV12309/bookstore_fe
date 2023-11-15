import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    BookCardComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    ButtonModule
  ],
  exports: [
    BookCardComponent
  ]
})
export class BookCardModule { }
