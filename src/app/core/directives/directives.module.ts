import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NonSpaceDirective } from './non-space.directive';
import { NumberOnlyDirective } from './number-only.directive';



@NgModule({
  declarations: [NonSpaceDirective, NumberOnlyDirective],
  imports: [
    CommonModule
  ],
  exports: [NonSpaceDirective, NumberOnlyDirective]
})
export class DirectivesModule { }
