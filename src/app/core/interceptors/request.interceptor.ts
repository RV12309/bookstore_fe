import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { StoreService } from "../services";
import { CloudinaryValue, EndPoints, StorageKey } from "../enums";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(
    private storeService: StoreService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const accessToken = this.storeService.getSession(StorageKey.accessToken);
    if (accessToken) {
      if(request.url?.includes(EndPoints.Global)){
        return next.handle(request);
      }
        if(request.url?.includes(CloudinaryValue.ApiUploadUrl)){
          return next.handle(request)}
        request = request.clone({
          headers: request.headers.set("Authorization", "Bearer " + accessToken),
        });
    }
    return next.handle(request);
  }
}
