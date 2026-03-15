import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-stepper',
  imports: [CommonModule],
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss',
})
export class Stepper {
  @Input() currentStep: number = 1;
  @Output() stepClick = new EventEmitter<number>(); 
  steps = [
    { label: 'Purchase Type', value: 1 },
    { label: 'Choose Dial', value: 2 },
    { label: 'Customer Info', value: 3 },
    { label: 'Choose Plan', value: 4 },
    { label: 'Choose Bundle', value: 5 }
  ];

  onStepSelect(stepValue: number) {
   
    if (stepValue <= this.currentStep) {
      this.stepClick.emit(stepValue);
    }
  }

}
