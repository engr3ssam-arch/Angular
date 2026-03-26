import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { SummaryService } from '../../service/summary Service/summary-service';
import { PageTitleService } from '../../service/pageTitle Service/page-title-service';


@Component({
  selector: 'app-purchase-stepper',
  imports: [NgIf, CommonModule],
  templateUrl: './purchase-stepper.html',
  styleUrl: './purchase-stepper.scss',
})
export class PurchaseStepper {
  productType: string = '';
  pageTitle: string = '';
   selectedType: string = '';
    isPurchaseModalOpen = false;
    currentStep :number = 1;
  constructor(private route: ActivatedRoute ,private router:Router ,public pageTitleService:PageTitleService, public summaryService :SummaryService) {}

    onNext() {
   
      this.router.navigate(['/choose dial']);
    }
  goToStep(step: number) {
  this.currentStep = step;
  
}


onResType(type: string) {
  
  this.summaryService.updateSummary({ resType: type });
}


}
