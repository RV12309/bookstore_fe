import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Authority } from "src/app/core/enums";
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ModalService } from 'src/app/core/services/modal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  public registerForm: FormGroup;
  private EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public registerType = [
    {
      value : Authority.Customer,
      label: 'Khách hàng'
    },
    {
      value : Authority.Seller,
      label: 'Đại lý'
    }
  ];

  public registerValue!:Authority;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private modalService: ModalService
  ){
    this.registerForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(this.EMAIL_PATTERN)]],
  })
  }
  ngOnInit(): void {
    this.configProperty();
  }
  configProperty(){
    this.registerValue = Authority.Customer;
  }
  submit(){
    this.registerForm.markAllAsTouched();
    if(this.registerForm?.invalid){
      return;
    }
    if(this.registerValue === Authority.Customer){
    this.authService.registerCustomer(this.registerForm?.value).subscribe({
      next: resp => {
        this.router.navigate(['/auth/register/verify'])
      },
      error: error => {
        this.modalService.alert(
          {
            type: 'error',
            message: error?.message || 'Lỗi hệ thống',
            btnOkName: 'Đóng',
          }
        )
      }
    }
    )} else {
      this.authService.registerSeller(this.registerForm?.value).subscribe({
        next: resp => {
        this.router.navigate(['/auth/register/verify'])
      },
      error: error => {
        console.log(error)
        this.modalService.alert(
          {
            type: 'error',
            message: error?.message || 'Lỗi hệ thống',
            btnOkName: 'Đóng',
          }
        )
      }
      }
      )
    }
  }

  back(){
    this.router.navigate(['/']);
  }

  get usernameControl(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
  get emailControl(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

}
