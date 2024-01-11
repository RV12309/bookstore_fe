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

  getOrderList(body: any): Observable<IResponse<any>>{
    return this.http.post<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Order}`, body);
  }
  getOrderDetail(id: string | number): Observable<IResponse<any>>{
    return this.http.get<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Order}/${id}`);
  }
  updateOrderStatus(id: string| number, body: any): Observable<IResponse<any>>{
    return this.http.patch<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Order}/${id}/status`, body);
  }

  cancelOrder(id: string| number): Observable<IResponse<any>>{
    return this.http.put<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Order}/${id}/cancel`, {});
  }
}
