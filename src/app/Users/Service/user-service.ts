import { inject, Injectable, signal } from '@angular/core';
import { Users } from '../interfaces/users';
import { HttpclientService } from '../../core/services/httpclient-service/httpclient-service';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  private httpService = inject(HttpclientService);

   getUser() {
    return this.httpService.get('users');
  }

  updateExistingUser(id: number, userData: Users) {
    return this.httpService.update(id, userData, 'users');
  }

  deleteUser(id: number) {
    return this.httpService.delete(id, 'users');
  }

 getUserById(id: string) {
  return this.httpService.get(`users/${id}`); 
 }
 
 addUser(user: any) {
 return this.httpService.add('users/add', user);
}
}
