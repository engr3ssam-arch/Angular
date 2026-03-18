import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Stepper } from "../stepper/stepper";
import { PageTitleService } from '../../service/pageTitle Service/page-title-service';

@Component({
  selector: 'app-purchase-stepper',
  imports: [NgIf, Stepper, AsyncPipe,CommonModule],
  templateUrl: './purchase-stepper.html',
  styleUrl: './purchase-stepper.scss',
})
export class PurchaseStepper {
  productType: string = '';
  pageTitle: string = '';
   selectedType: string = '';
    isPurchaseModalOpen = false;
    currentStep :number = 1;
  constructor(private route: ActivatedRoute ,private router:Router ,public pageTitleService:PageTitleService) {}

    onNext() {
   
      this.router.navigate(['/choose dial']);
    }
  goToStep(step: number) {
  this.currentStep = step;
  
}
}
