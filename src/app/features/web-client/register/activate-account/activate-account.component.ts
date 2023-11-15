import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit{
  public verifyForm: FormGroup ;
  public popupConfirm = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ){
    this.verifyForm = this.fb.group({
      username: [null, Validators.required],
      verificationCode: [null, Validators.required],
  })
  }
  ngOnInit(): void {
  }

  submit(){
    this.verifyForm.markAllAsTouched();
    if(this.verifyForm?.invalid){
      return;
    }
    this.authService.verify(this.verifyForm?.value).subscribe(
      (res => {
        if(res?.code === '00'){
          this.router.navigate(['/auth/login'])
        }
      })
    )
  }

  back(){
    this.router.navigate(['/auth/register']);
  }

  get usernameControl(): FormControl {
    return this.verifyForm.get('username') as FormControl;
  }
  get verificationCodeControl(): FormControl {
    return this.verifyForm.get('verificationCode') as FormControl;
  }
}
