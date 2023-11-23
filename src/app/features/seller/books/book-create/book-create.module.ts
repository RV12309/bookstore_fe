import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookCreateComponent } from './book-create.component';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { BaseUploadModule } from "src/app/components/base-upload/base-upload.module";
import { DropdownUiModule } from "src/app/components/dropdown-ui/dropdown-ui.module";
import { DateUiModule } from "src/app/components/date-ui/date-ui.module";
import { DirectivesModule } from 'src/app/core/directives/directives.module';



@NgModule({
  declarations: [
    BookCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    BaseUploadModule,
    DividerModule,
    DropdownUiModule,
    DateUiModule,
    InputNumberModule,
    DirectivesModule
  ],
  exports: [
    BookCreateComponent
  ],
})
export class BookCreateModule { }
