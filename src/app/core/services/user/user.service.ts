import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResponse } from '../../interfaces/response.interface';
import { WCEndPoint } from '../../enums/wc-endpoints.enums';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  delete(id: string | number): Observable<IResponse<any>>{
    return this.http.delete<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Customers}/${id}`);
  }

  update(body: any): Observable<IResponse<any>>{
    return this.http.put<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Customers}`, body);
  }

  getCustomerInfo(): Observable<IResponse<any>>{
    return this.http.get<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Customers}`);
  }

  updateSellerInfo(body: any): Observable<IResponse<any>>{
    return this.http.put<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Seller}`, body);
  }

  getUserList(form: any): Observable<IResponse<any>>{
    const queryParams = new HttpParams(
      {
        fromObject: {...form}
      }
    )
    return this.http.get<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Users}?${queryParams}`);
  }

  getUserInfo(id: string | number): Observable<IResponse<any>>{
    return this.http.get<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Users}/${id}`);
  }

  lockUser(id: string | number): Observable<IResponse<any>>{
    return this.http.get<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Users}/${id}/lock`);
  }

  getStatistic(): Observable<IResponse<any>>{
    return this.http.get<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Users}/statistic`);
  }
}
