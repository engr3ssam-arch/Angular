import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { SummaryService } from '../../service/summary Service/summary-service';
import { PageTitleService } from '../../service/pageTitle Service/page-title-service';
import { StepperService } from '../../service/stepper Service/stepper-service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-purchase-stepper',
  imports: [NgIf, CommonModule ,FormsModule],
  templateUrl: './purchase-stepper.html',
  styleUrl: './purchase-stepper.scss',
})
export class PurchaseStepper implements OnInit {
  productType: string = '';
  pageTitle: string = '';
   selectedType: string = '';
    isPurchaseModalOpen = false;
    currentStep :number = 1;
    simType: string = ''; 
  resType: string = '';
  constructor(private route: ActivatedRoute ,private router:Router ,public pageTitleService:PageTitleService, public summaryService :SummaryService ,private stepperService: StepperService ) {}

ngOnInit() {
   
    let data = this.summaryService.summaryData(); 
    if (data && data.resType) {
      this.resType = data.resType;
      this.stepperService.setStepValid(true);
    }
  }

  goToStep(step: number) {
  this.currentStep = step;
  
}

onResType(type: string) {
  
  this.summaryService.updateSummary({ resType: type });
  this.stepperService.setStepValid(true); 
  
 
}



onSelectionChange(event: any) {
    const isValid = !!event.value; 
    this.stepperService.setStepValid(isValid);
  }

  updateValidity(isValid: boolean) {
  this.stepperService.setStepValid(isValid);
 
}
}
