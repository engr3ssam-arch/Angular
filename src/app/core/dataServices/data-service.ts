import { Injectable } from '@angular/core';
import { User } from '../../shared/interface/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

private readonly STORAGE_KEY = 'registerUser';
private usersSubject = new BehaviorSubject<any[]>([]);
users$ = this.usersSubject.asObservable();
private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  


 registerUser(userData: User) {
    const currentUsers = this.usersSubject.value;
    const updatedUsers = [...currentUsers, userData];
    this.usersSubject.next(updatedUsers);
   
   
  }
  
constructor() { }

  login(credentials: any): { success: boolean, user?:any } {
  const users = this.usersSubject.value;
    const foundUser = users.find((u: any) => 
      u.email === credentials.email && u.password === credentials.password
    
    );
    if (foundUser) {
      this.currentUserSubject.next(foundUser);
       return { success: true, user: foundUser };
    }

    return { success: false };
  }
  
}
