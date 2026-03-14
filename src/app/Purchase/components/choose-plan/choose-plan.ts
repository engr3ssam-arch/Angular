import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-plan',
  imports: [],
  templateUrl: './choose-plan.html',
  styleUrl: './choose-plan.scss',
})
export class ChoosePlan {
     currentStep: number = 4; 
     pageTitle: string = '';

}
