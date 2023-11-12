import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from "src/app/components/loading/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private countRequest = 0;
  constructor(
    private loadingService: LoadingService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.countRequest++;
    this.loadingService.setLoading(true);
    return next.handle(request)
    .pipe(
      finalize(() => {
        this.countRequest--;
        if(this.countRequest === 0){
          this.loadingService.setLoading(false);
        }
      })
    );
  }
}