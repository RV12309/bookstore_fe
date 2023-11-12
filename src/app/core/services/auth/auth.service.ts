import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";
import { Observable } from "rxjs";
import { WCEndPoint, env } from "src/app/core/enums/wc-endpoints.enums";
import {
  IAccount,
  IJWTResponse,
  ILogin,
  ILoginForm,
  IRegisterForm,
  IRole,
  IVerifyForm,
} from "src/app/core/interfaces/auth.interface";
import { StoreService } from "../store.service";
import { JWTStorageKey, StorageKey } from "../../enums";
import { ModalService } from "../modal";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseUrl = env.baseUrl;
  constructor(
    private http: HttpClient,
    private storeService: StoreService,
    private modalService: ModalService,
    private router:Router
  ) {}

  login(body: ILoginForm): Observable<ILogin> {
    return this.http.post(`${this.baseUrl}${WCEndPoint.Auth}/login`, body);
  }

  register(body: IRegisterForm): Observable<any> {
    return this.http.post(
      `${this.baseUrl}${WCEndPoint.Customers}/register`,
      body,
    );
  }

  verify(body: IVerifyForm): Observable<any> {
    return this.http.post(
      `${this.baseUrl}${WCEndPoint.Account}/verification`,
      body,
    );
  }

  decodeToken(): IJWTResponse {
    const accessToken =
      this.storeService.getSession(StorageKey.accessToken) || "";
    return jwtDecode(accessToken);
  }

  getDataByKey(key: JWTStorageKey): any {
    const data: IJWTResponse = this.decodeToken();
    return data[key];
  }

  logout() {
    this.modalService.confirm({
      message: "Xác nhận đăng xuất",
      accept: () => {
        this.storeService.clearSession();
        this.storeService.clearLocal();
        this.router.navigate(["/auth/login"]);
      },
    });
  }
}
