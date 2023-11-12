import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from "primeng/button";
import { ToastModule } from 'primeng/toast';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    ButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DialogService,
    MessageService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
