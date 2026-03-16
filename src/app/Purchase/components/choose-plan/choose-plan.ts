import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Plans } from '../../interface/plans';
import { PlanService } from '../../service/Plans Service/plan-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stepper } from "../stepper/stepper";
import { PageTitleService } from '../../service/pageTitle Service/page-title-service';

@Component({
  selector: 'app-choose-plan',
  imports: [CommonModule, Stepper],
  templateUrl: './choose-plan.html',
  styleUrl: './choose-plan.scss',
})
export class ChoosePlan implements OnInit {
     currentStep: number = 4; 
     pageTitle: string = '';

    plan: Plans[] = [];
    selectedPlanId: number | null = 1;

 
  constructor(private planService:PlanService ,private router:Router , private route :ActivatedRoute, public pageTitleService:PageTitleService) {}
  ngOnInit(): void {
     this.plan = this.planService.getPlans();
  this.route.params.subscribe(params => {
    const type = params['type'];
    if (type) {
      this.pageTitleService.setServiceName(type);
    }
  });
 
}
  

  selectPlan(id: number) {
    this.selectedPlanId = id;
  }

   onNext() {
   
      this.router.navigate(['/choose bundle']);
   
    }
     goToStep(step: number) {
  this.currentStep = step;
  
}
}
