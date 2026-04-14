import { Injectable, signal } from '@angular/core';
import { Users } from '../interfaces/users'; 
import { HttpClient } from '@angular/common/http';
import { Observable ,tap} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = ''; 

  
  users= signal<Users[]>([]);

  constructor(private http: HttpClient) {}

  ///////////////////////////// 1. View //////////////////////////////////////
  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      tap(response => {
      
        this.users.set(response.users);
      })
    );
  }

  ///////////////////////////// 2. View User/////////////////////////////// 
  getUserById(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

 //////////////////////// // 3. Add User///////////////////////
  addUser(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.apiUrl}/add`, user).pipe(
      tap(newUser => {
        this.users.update(current => [newUser, ...current]);
      })
    );
  }

  ////////////////// 4. Update User//////////////////////////////
  updateUser(id: number, user: Users): Observable<any> {
    return this.http.put<Users>(`${this.apiUrl}/${id}`, user).pipe(
      tap(updatedUser => {
        this.users.update(current => 
          current.map(u => u.id === id ? updatedUser : u)
        );
      })
    );
  }

  ////////////////////// 5. Delete User////////////////////////////
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
       this.users.update(current => current.filter(u => u.id !== id));
      })
    );
  }
}
