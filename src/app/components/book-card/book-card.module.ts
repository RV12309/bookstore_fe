import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import { PipesModule } from "src/app/core/pipes/pipes.module";


@NgModule({
  declarations: [
    BookCardComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    ButtonModule,
    TooltipModule,
    PipesModule,
  ],
  exports: [
    BookCardComponent
  ]
})
export class BookCardModule { }
