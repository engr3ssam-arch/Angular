import { Injectable } from '@angular/core';
import { User } from '../../shared/interface/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {

private readonly STORAGE_KEY = 'registerUser';

 registerUser(userData: User) {
    
    let users = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    
    users.push(userData);
   
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
    
    
    alert('Data has been saved');
    console.log(users);
    
  }
  
constructor() { }

  login(credentials: any): { success: boolean, user?:any } {
     const users = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
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
