import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Plans } from '../../interface/plans';
import { PlanService } from '../../service/Plans Service/plan-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-plan',
  imports: [CommonModule],
  templateUrl: './choose-plan.html',
  styleUrl: './choose-plan.scss',
})
export class ChoosePlan {
     currentStep: number = 4; 
     pageTitle: string = '';

    plan: Plans[] = [];
    selectedPlanId: number | null = 1;

 
  constructor(private planService:PlanService ,private router:Router) {}

  ngOnInit() {

    this.plan = this.planService.getPlans();
  }

  selectPlan(id: number) {
    this.selectedPlanId = id;
  }

   onNext() {
   
    
      this.router.navigate(['/choose bandle']);
    
  }
}
