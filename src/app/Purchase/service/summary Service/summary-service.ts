import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  summaryData = signal({
    resType: '',
    resDial: '',
    poolName: '',
    dialId: '',
    dialGroup:'',
    citizenStatus:'',
    planName:'',
    planLogo: '',
    bundleName: '',
    planId: 0,
    bundleId: 0 ,
   firstName: '',
  lastName: '',
  middleName: '', 
  email: '',
  nationalId: '',
  telephoneNumber: '', 
  birthDate: '', 
  buildingNo: '',
  flatNo: '', 
  streetAddress: '', 
  trade: '',
  searchCode: '' 
  });

  updateSummary(newData:any) {
    this.summaryData.update(oldData => ({ ...oldData, ...newData }));
  }
  
 
}
