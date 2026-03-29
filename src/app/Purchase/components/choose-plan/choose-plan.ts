import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Plans } from '../../interface/plans';
import { PlanService } from '../../service/Plans Service/plan-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stepper } from "../stepper/stepper";
import { PageTitleService } from '../../service/pageTitle Service/page-title-service';
import { Summary } from "../summary/summary";
import { SummaryService } from '../../service/summary Service/summary-service';
import { StepperService } from '../../service/stepper Service/stepper-service';

@Component({
  selector: 'app-choose-plan',
  imports: [CommonModule],
  templateUrl: './choose-plan.html',
  styleUrl: './choose-plan.scss',
})
export class ChoosePlan implements OnInit {
     currentStep: number = 4; 
     pageTitle: string = '';

    plan: Plans[] = [];
    selectedPlanId: number | null = 1;

 
  constructor(private planService:PlanService ,private router:Router , private route :ActivatedRoute, public pageTitleService:PageTitleService, public summaryService:SummaryService ,public stepperService:StepperService) {}
  ngOnInit(): void {
     this.plan = this.planService.getPlans();
  this.route.params.subscribe(params => {
    const type = params['type'];
    if (type) {
      this.pageTitleService.setServiceName(type);
    }
  });
 
}
  

  selectPlan(id: number , name: string) {
    this.selectedPlanId = id;
    this.summaryService.updateSummary({ planName: name });
      this.stepperService.setStepValid(true); 
  }

   onNext() {
   
      this.router.navigate(['/choose bundle']);
   
    }
     goToStep(step: number) {
  this.currentStep = step;
  
}







onSelectionChange(event: any) {
    const isValid = !!event.value; 
    this.stepperService.setStepValid(isValid);
  }

  updateValidity(isValid: boolean) {
  this.stepperService.setStepValid(isValid);
 
}
}
