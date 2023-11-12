import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from "../services/auth/auth.service";
import { ModalService } from "../services/modal";
import { StoreService } from "../services";
import { JWTStorageKey } from "../enums";
import { Router } from "@angular/router";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private modalService: ModalService,
    private storeService: StoreService,
    private router:Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      catchError((event:any) => {
          try {
            const error = event?.error;
            const expireTime = this.authService.getDataByKey(JWTStorageKey.exp);
            console.log(expireTime);
            if(event instanceof HttpErrorResponse){
              switch (event?.status) {
                case 401:
                  this.authService.logout();
                  return throwError(()=>null);
                case 403:
                  this.modalService.alert(
                    {
                      type: 'warning',
                      message: "Không có quyền truy cập"
                    }
                  )
                  if(new Date().getTime() > expireTime){
                    // this.storeService.clearSession();
                    // this.storeService.clearLocal();
                    // this.router.navigate(['/auth']);
                    // this.modalService.alert(
                    //   {
                    //     type: 'warning',
                    //     message: "Hết phiên đăng nhập"
                    //   }
                    // );
                  }else{
                    this.modalService.alert(
                      {
                        type: 'warning',
                        message: "Không có quyền truy cập"
                      }
                    )
                  }
                  return throwError(()=>null);
                default:
                  return throwError(() =>error);
              }
            }
            // Trả về lỗi cho tất cả các key chưa được handle;
            throwError(() => null);
          } catch (error) {
            return throwError(() => error)
          }
          return throwError(() => null)
        }
      )
    );
  }
}
