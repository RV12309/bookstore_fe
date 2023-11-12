import { Injectable } from '@angular/core';
import { WCEndPoint, env } from '../../enums/wc-endpoints.enums';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IResponse } from '../../interfaces/response.interface';
import { ICategoryForm, ICategoryData, ICategorySearch, ICategoryUpdate } from '../../interfaces/category.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = env.baseUrl;
  constructor(private http: HttpClient) { }

  getCategoryAll(): Observable<IResponse<ICategoryData[]>>{
    return this.http.get<IResponse<ICategoryData[]>>(`${this.baseUrl}${WCEndPoint.Category}/all`);
  }

  searchCategory(form:ICategorySearch): Observable<IResponse<ICategoryData[]>>{
    const queryParams = new HttpParams(
      {
        fromObject: {...form}
      }
    )
    return this.http.get<IResponse<ICategoryData[]>>(`${this.baseUrl}${WCEndPoint.Category}?${queryParams}`);
  }


  create(body: ICategoryForm): Observable<IResponse<ICategoryData>>{
    return this.http.post<IResponse<ICategoryData>>(`${this.baseUrl}${WCEndPoint.Category}`, body);
  }

  delete(id: string | number): Observable<IResponse<any>>{
    return this.http.delete<IResponse<any>>(`${this.baseUrl}${WCEndPoint.Category}/${id}`);
  }

  detail(id:string | number): Observable<IResponse<ICategoryData>>{
    return this.http.get<IResponse<ICategoryData>>(`${this.baseUrl}${WCEndPoint.Category}/${id}`);
  }

  update(body: ICategoryUpdate): Observable<IResponse<ICategoryData>>{
    return this.http.put<IResponse<ICategoryData>>(`${this.baseUrl}${WCEndPoint.Category}`, body);
  }
}
