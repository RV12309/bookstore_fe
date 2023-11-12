import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreService } from "../services";
import { StorageKey } from "../enums";
import { ToastService } from "../services/toast.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  constructor(
    private storeService: StoreService,
    private router:Router,
    private toastService:ToastService

  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const accessToken = this.storeService.getSession(StorageKey.accessToken);
    if(!accessToken){
      console.log(111);
      this.toastService.open({
        detail: "Vui lòng đăng nhập"
      })
      this.router.navigate(['/auth/login'])
      return false;
    }
    return true;
  }

}
