import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';


@NgModule({
  declarations: [
    BookCardComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    ButtonModule,
    TooltipModule
  ],
  exports: [
    BookCardComponent
  ]
})
export class BookCardModule { }
