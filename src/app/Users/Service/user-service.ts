import { inject, Injectable, signal } from '@angular/core';
import { Users } from '../interfaces/users';
import { HttpclientService } from '../../core/services/httpclient-service/httpclient-service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private httpService = inject(HttpclientService);
  
  usersList = signal<Users[]>([]);

  getUser() {
    return this.httpService.get('users').pipe(
      tap(res => {
        this.usersList.set(res.users); 
      })
    );
  }

 
  deleteUser(id: number) {
    return this.httpService.delete(id, 'users').pipe(
      tap(() => {
        this.usersList.update(current => current.filter(u => u.id !== id));
      })
    );
  }
}
