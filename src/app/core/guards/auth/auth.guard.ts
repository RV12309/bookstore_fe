import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreService } from "../../services";
import { Authority, JWTStorageKey, StorageKey } from "../../enums";
import { AuthService } from "../../services/auth/auth.service";
import { IRole } from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router:Router,
    private storeService: StoreService,
    private authService: AuthService
    ){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree {
    const accessToken = this.storeService.getSession(StorageKey.accessToken);
    if(accessToken){
      const role:IRole[] = this.authService.getDataByKey(JWTStorageKey.role);
      switch(role[0]?.authority){
        case Authority.Seller:
          this.router.navigate(['/seller'])
          break;
      }
      return false;
    }
    return true;
  }
}
