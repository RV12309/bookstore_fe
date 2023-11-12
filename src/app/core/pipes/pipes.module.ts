import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewPipe } from "./image-preview.pipe";



@NgModule({
  declarations: [
    ImagePreviewPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagePreviewPipe
  ],
})
export class PipesModule { }
