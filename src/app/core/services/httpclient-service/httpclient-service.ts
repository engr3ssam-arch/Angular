import { Injectable, signal } from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../../../Users/interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {

constructor (private http:HttpClient) {}

 private baseUrl = 'https://dummyjson.com';

 
 private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }


  private buildParams(params: any): HttpParams {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return httpParams;
  }

 
  // 1. Get 
 
  get(endpoint: string , params?: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${endpoint}`, {
      headers: this.getHeaders(),
      params: this.buildParams(params)
    });
  }

  // 2. Post 
  add(endpoint: string , body: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${endpoint}`, body, {
      headers: this.getHeaders()
    });
  }

  // 3. Put 
  update(id: number, body: any, endpoint: string ): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${endpoint}/${id}`, body, {
      headers: this.getHeaders()
    });
  }

  // 4. Delete 
  delete(id: number, endpoint: string ): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${endpoint}/${id}`, {
      headers: this.getHeaders()
    });
  }


  
}


