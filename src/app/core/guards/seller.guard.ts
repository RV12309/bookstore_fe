import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreService } from "../services";
import { Authority, JWTStorageKey, StorageKey } from "../enums";
import { AuthService } from "../services/auth/auth.service";
import { IRole } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class SellerGuard implements CanActivate {
  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private router: Router,
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const role:IRole[] = this.authService.getDataByKey(JWTStorageKey.role);
      if(role[0]?.authority !== Authority.Seller){
        return false;
      }
      return true;
  }

}
