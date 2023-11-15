import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin, IRole } from 'src/app/core/interfaces/auth.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { RegisterComponent } from "../register/register.component";
import { MessageService } from "primeng/api";
import { jwtDecode } from 'jwt-decode';
import { StoreService } from "src/app/core/services";
import { Authority, JWTStorageKey, StorageKey } from "src/app/core/enums";
import { Subject, of, switchMap, takeUntil } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit, OnDestroy{
  public loginForm: FormGroup ;
  public loginCover = 'src/assets/svgs/undraw_bookshelves_re_lxoy.svg';
  private destroy$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private messageService: MessageService,
    private storeService: StoreService
  ){
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
  })
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }

  submit(){
    this.loginForm.markAllAsTouched();
    if(this.loginForm?.invalid){
      return;
    }
    this.authService.login(this.loginForm?.value)
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(
      {
        next: (res: ILogin) => {
          this.storeService.setSession(StorageKey.accessToken, res?.data.token);
          const role:IRole[] = this.authService.getDataByKey(JWTStorageKey.role);
          switch(role[0]?.authority){
            case Authority.Seller:
              this.route.navigate(['/seller']);
              break;
            default:
              this.route.navigate(['/']);
              break;
          }
        },
        error: error => {
          this.messageService.add(
            { severity: 'error', summary: 'error', detail: error?.message || 'Lỗi hệ thống' }
          )
        }
      }
    )
  }

  get usernameControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

}
