import { Injectable } from '@angular/core';
import { DialsList } from '../interface/dials-list';

@Injectable({
  providedIn: 'root',
})
export class Dials {

 private dialsList: DialsList[] = [
    { number: '0222679258', poolName: 'B2B Pool',dialGroup:'Golden', id: '12344' },
    { number: '0222679259', poolName: 'B2B Pool',dialGroup:'Golden', id: '12345' },
    { number: '0222679260', poolName: 'Premium Pool',dialGroup:'Golden', id: '12346' },
    { number: '0222679261', poolName: 'B2B Pool',dialGroup:'Golden',id: '12347' },
    { number: '0222679262', poolName: 'Standard Pool',dialGroup:'Golden', id: '12348' },
    { number: '0222679262', poolName: 'Standard Pool',dialGroup:'Golden', id: '12348' },
    { number: '0222679262', poolName: 'Standard Pool',dialGroup:'Golden', id: '12348' },
    { number: '0222679262', poolName: 'Standard Pool',dialGroup:'Golden', id: '12348' }
  
  ];

  constructor() { }


  getDials():DialsList[] {
    return this.dialsList;
  }
  
}
