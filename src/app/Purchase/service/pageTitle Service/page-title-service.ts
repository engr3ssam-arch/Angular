import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {

 private serviceNameSource = new BehaviorSubject<string>('Product');
  currentService$ = this.serviceNameSource.asObservable();

  setServiceName(name: string) {
  
    if (name) {
      this.serviceNameSource.next(name); 
    }
  }

  fullTitle(name: string): string {
    if (!name || name === 'Product') return 'Purchase Product';
    return `Purchase ${name}`;
  }
}
