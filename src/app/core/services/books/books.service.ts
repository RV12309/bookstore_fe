import { Injectable } from '@angular/core';
import { WCEndPoint, env } from '../../enums/wc-endpoints.enums';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IBookData, IBookSearchForm, IBooksResponse } from '../../interfaces/books.interface';
import { IResponse } from '../../interfaces/response.interface';
import { Observable, from } from 'rxjs';
import { HEADERS_NO_TOKEN } from "../../constant/common.constant";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl = env.baseUrl;
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
}
