import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUiComponent } from "./image-ui.component";
import { ImageModule } from 'primeng/image';



@NgModule({
  declarations: [
    ImageUiComponent
  ],
  imports: [
    CommonModule,
    ImageModule
  ],
  exports: [
    ImageUiComponent
  ],
})
export class ImageUiModule { }
