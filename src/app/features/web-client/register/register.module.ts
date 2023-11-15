import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { RegisterComponent } from './register.component';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from "primeng/inputtext";

const routes:Routes = [
  {
    path: '',
    component: RegisterComponent
  },
  {
    path: 'verify',
    component: ActivateAccountComponent
  }
]

@NgModule({
  declarations: [RegisterComponent, ActivateAccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    SidebarModule,
    InputTextModule
  ]
})
export class RegisterModule { }
