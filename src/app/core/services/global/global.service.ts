import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { EndPoints } from "../../enums";
import { IBookData, IBookSearchForm, IBooksResponse } from "../../interfaces/books.interface";
import { Observable } from "rxjs";
import { IResponse } from "../../interfaces/response.interface";
import { WCEndPoint } from "../../enums/wc-endpoints.enums";
import { IDistricts, IProvinces, IWards } from "../../interfaces";
import { ICategoryData } from "../../interfaces/category.interface";
import { ICart, ICartItem } from "../../interfaces/cart";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private url = `${environment.baseUrl}${EndPoints.Global}`;
  constructor(private http: HttpClient) { }


  getBooksList(body: IBookSearchForm): Observable<IResponse<IBooksResponse>>{
    return this.http.post<IResponse<IBooksResponse>>(
      `${this.url}/books/list`, body);
  }

  getBooksDetail(isbn: string): Observable<IResponse<IBookData>>{
    return this.http.get<IResponse<IBookData>>(
      `${this.url}/books/${isbn}`);
  }

  provinces():Observable<IResponse<IProvinces[]>>{
    return this.http.get<IResponse<IProvinces[]>>(
      `${this.url}/address/provinces`);
  }

  districts(provinceId:number):Observable<IResponse<IDistricts[]>>{
    return this.http.get<IResponse<IDistricts[]>>(`${this.url}/address/districts/${provinceId}`);
  }

  wards(districtId:number):Observable<IResponse<IWards[]>>{
    return this.http.get<IResponse<IWards[]>>(`${this.url}/address/wards/${districtId}`);
  }
  getCategoryAll(): Observable<IResponse<ICategoryData[]>>{
    return this.http.get<IResponse<ICategoryData[]>>(`${this.url}/categories/all`);
  }

  getCart(sessionId: string | number, refId: string | number): Observable<IResponse<ICart>>{
    return this.http.get<IResponse<ICart>>(`${this.url}/carts?sessionId=${sessionId}&refId=${refId}`);
  }

  updateCart(body: any): Observable<IResponse<ICart>>{
    return this.http.put<IResponse<ICart>>(`${this.url}/carts`, body);
  }

  removeCart(body: any): Observable<IResponse<ICart>>{
    return this.http.delete<IResponse<ICart>>(`${this.url}/carts`, {body});
  }

  initOrder(body: any): Observable<IResponse<any>>{
    return this.http.post<IResponse<any>>(
      `${this.url}/orders`, body);
  }



}
