import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../../interfaces/response.interface';
import { WCEndPoint } from '../../enums/wc-endpoints.enums';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getBooksList(body: any): Observable<IResponse<any>>{
    return this.http.post<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Order}`, body);
  }
}
