import { Injectable, signal } from '@angular/core';
import { Signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class StepperService {
  isStepValid = signal<boolean>(false); 

  setStepValid(isValid: boolean) {
    this.isStepValid.set(isValid);
  }
}
