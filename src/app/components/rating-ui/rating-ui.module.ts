import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingUiComponent } from './rating-ui.component';
import {RatingModule} from 'primeng/rating';



@NgModule({
  declarations: [
    RatingUiComponent
  ],
  imports: [
    CommonModule,
    RatingModule
  ],
  exports: [
    RatingUiComponent
  ],
})
export class RatingUiModule { }
