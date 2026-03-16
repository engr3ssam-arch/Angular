import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
 private selectedService: string = '';

  setServiceName(name: string) {
    this.selectedService = name;
  }

  get fullTitle(): string {
    if (!this.selectedService) 
      return 'Purchase Product';
    return `Purchase ${this.selectedService}`;
  }
}
