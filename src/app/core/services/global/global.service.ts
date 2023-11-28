import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { EndPoints } from "../../enums";
import { IBookData, IBookSearchForm, IBooksResponse } from "../../interfaces/books.interface";
import { Observable } from "rxjs";
import { IResponse } from "../../interfaces/response.interface";
import { WCEndPoint } from "../../enums/wc-endpoints.enums";
import { ICategoryData } from "../../interfaces/category.interface";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private url = `${environment.baseUrl}/${EndPoints.Global}`;
  constructor(private http: HttpClient) { }


  getBooksList(body: IBookSearchForm): Observable<IResponse<IBooksResponse>>{
    return this.http.post<IResponse<IBooksResponse>>(
      `${this.url}/books/list`, body);
  }

  getBooksDetail(isbn: string): Observable<IResponse<IBookData>>{
    return this.http.get<IResponse<IBookData>>(
      `${this.url}/books/${isbn}`);
  }

  getCategoryAll(): Observable<IResponse<ICategoryData[]>>{
    return this.http.get<IResponse<ICategoryData[]>>(`${this.url}/categories/all`);
  }

}
