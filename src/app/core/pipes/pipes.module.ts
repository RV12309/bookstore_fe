import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewPipe } from "./image-preview.pipe";
import { SafeUrlPipe } from './safe-url.pipe';
import { PricePipe } from './price.pipe';



@NgModule({
  declarations: [
    ImagePreviewPipe,
    SafeUrlPipe,
    PricePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagePreviewPipe,
    SafeUrlPipe,
    PricePipe
  ],
})
export class PipesModule { }
