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
export class CustomerGuard implements CanActivate {
  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private router: Router,
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const accessToken = this.storeService.getSession(StorageKey.accessToken);
      if(!accessToken) {return true} else{
        const role:IRole[] = this.authService.getDataByKey(JWTStorageKey.role);
        if(role[0]?.authority === Authority.Admin || role[0]?.authority === Authority.Seller){
          switch(role[0]?.authority) {
            case Authority.Admin:
              this.router.navigate(['admin/management/sellers']);
              break;
            case Authority.Seller:
              this.router.navigate(['seller/books']);
              break;
          }
          return false;
        }
        return true;
      }
  }

}
