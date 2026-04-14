import { Injectable, signal } from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders } from '@angular/common/http';
import { Observable , tap} from 'rxjs';
import { Users } from '../../../Users/interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {

constructor (private http:HttpClient) {}

 private baseUrl = 'https://dummyjson.com';

 usersList = signal<Users[]>([]);


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
 
  getUsers(endpoint: string = 'users', params?: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${endpoint}`, {
      headers: this.getHeaders(),
      params: this.buildParams(params)
    }).pipe(
      tap(res => {
      this.usersList.set(res.users); 
      })
    );
  }

  // 2. Post 
  addUser(endpoint: string = 'users/add', body: any): Observable<Users> {
    return this.http.post<Users>(`${this.baseUrl}/${endpoint}`, body, {
      headers: this.getHeaders()
    }).pipe(
      tap(newUser => {
        this.usersList.update(current => [newUser, ...current]);
      })
    );
  }

  // 3. Put 
  updateUser(id: number, body: any, endpoint: string = 'users'): Observable<Users> {
    return this.http.put<Users>(`${this.baseUrl}/${endpoint}/${id}`, body, {
      headers: this.getHeaders()
    }).pipe(
      tap(updatedUser => {
        this.usersList.update(current => 
          current.map(u => u.id === id ? updatedUser : u)
        );
      })
    );
  }

  // 4. Delete 
  deleteUser(id: number, endpoint: string = 'users'): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${endpoint}/${id}`, {
      headers: this.getHeaders()
    }).pipe(
      tap(() => {
        this.usersList.update(current => current.filter(u => u.id !== id));
      })
    );
  }


  
}


