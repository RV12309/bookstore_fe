import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaUiComponent } from './galleria-ui.component';
import {GalleriaModule} from 'primeng/galleria';



@NgModule({
  declarations: [
    GalleriaUiComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule
  ],
  exports: [
    GalleriaUiComponent
  ],
})
export class GalleriaUiModule { }
