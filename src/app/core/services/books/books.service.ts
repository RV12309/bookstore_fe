import { Injectable } from '@angular/core';
import { WCEndPoint, env } from '../../enums/wc-endpoints.enums';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IBookData, IBookSearchForm, IBooksResponse } from '../../interfaces/books.interface';
import { IResponse } from '../../interfaces/response.interface';
import { Observable, from } from 'rxjs';
import { HEADERS_NO_TOKEN } from "../../constant/common.constant";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getBooksList(body: IBookSearchForm): Observable<IResponse<IBooksResponse>>{
    return this.http.post<IResponse<IBooksResponse>>(
      `${this.baseUrl}${WCEndPoint.Book}/list`, body,
      {
        headers: HEADERS_NO_TOKEN
      }
    );
  }

  getBookById(body: string): Observable<IResponse<IBookData>>{
    return this.http.get<IResponse<IBookData>>(`${this.baseUrl}${WCEndPoint.Book}?${body}`);
  }

  createBook(body: any): Observable<IResponse<IBookData>>{
    return this.http.post<IResponse<IBookData>>(
      `${this.baseUrl}${WCEndPoint.Book}`, body
    )
  }

  delete(id: string | number): Observable<IResponse<any>>{
    return this.http.delete<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Book}/${id}`);
  }

  update(id: string | number, body: any): Observable<IResponse<any>>{
    return this.http.put<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Book}/${id}`, body);
  }
}
