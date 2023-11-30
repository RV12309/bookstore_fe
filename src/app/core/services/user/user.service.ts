import { HttpClient } from '@angular/common/http';
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
}
