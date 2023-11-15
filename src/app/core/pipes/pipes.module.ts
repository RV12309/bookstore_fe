import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewPipe } from "./image-preview.pipe";
import { SafeUrlPipe } from './safe-url.pipe';



@NgModule({
  declarations: [
    ImagePreviewPipe,
    SafeUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagePreviewPipe,
    SafeUrlPipe
  ],
})
export class PipesModule { }
