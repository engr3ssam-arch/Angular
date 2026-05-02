import { inject, Inject, Injectable ,PLATFORM_ID  } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { HttpclientService } from '../httpclient-service/httpclient-service';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DataService {

private httpService = inject(HttpclientService);
  
  
private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
  if (isPlatformBrowser(this.platformId)) {
    const savedUser = localStorage.getItem('user');

    if (savedUser && savedUser !== 'undefined') {
      try {
        this.currentUserSubject.next(JSON.parse(savedUser));
      } catch (e) {
        this.currentUserSubject.next(null);
      }
    } else {
      this.currentUserSubject.next(null);
    }
  }
}

 
  signUp(userData: any): Observable<any> {
    return this.httpService.add('users/add', userData);
  }



  

  login(credentials: any): Observable<any> {
    return this.httpService.add('user/login', credentials).pipe(
      tap((user) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        this.currentUserSubject.next(user);
      })
    );
  }



  logout() {
  if (isPlatformBrowser(this.platformId)) {
    localStorage.removeItem('user'); 
  }
  this.currentUserSubject.next(null); 
  
}

}
