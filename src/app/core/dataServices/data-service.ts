import { Injectable } from '@angular/core';
import { User } from '../../shared/interface/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

private readonly STORAGE_KEY = 'registerUser';
private usersSubject = new BehaviorSubject<any[]>(this.getStoredUsers());
users$ = this.usersSubject.asObservable();

   private getStoredUsers(): any[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }



 registerUser(userData: User) {
    
    const currentUsers = this.usersSubject.value;
    const updatedUsers = [...currentUsers, userData];
    this.usersSubject.next(updatedUsers);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedUsers));
   
  }
  
constructor() { }

  login(credentials: any): { success: boolean, user?:any } {
  const users = this.usersSubject.value;
    const foundUser = users.find((u: any) => 
      u.email === credentials.email && u.password === credentials.password
    );

    if (foundUser) {
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      return { success: true, user: foundUser };
    }

    return { success: false };
  }
  
}
