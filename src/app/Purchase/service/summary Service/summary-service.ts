import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  summaryData = signal({
    resType: '',
    resDial: '',
    citizenStatus:'',
    planName:'',
    bundleName: ''
   
  });

  updateSummary(newData:any) {
    this.summaryData.update(oldData => ({ ...oldData, ...newData }));
  }
  
}
