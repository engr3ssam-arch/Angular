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
    bundleName: '',
    planId: 0,
    bundleId: 0 ,
    firstName: '',
   lastName: '',
   email: '',
   nationalId: ''
  });

  updateSummary(newData:any) {
    this.summaryData.update(oldData => ({ ...oldData, ...newData }));
  }
  
 
}
