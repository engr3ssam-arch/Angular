import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Stepper } from "../stepper/stepper";

@Component({
  selector: 'app-purchase-stepper',
  imports: [NgIf, Stepper],
  templateUrl: './purchase-stepper.html',
  styleUrl: './purchase-stepper.scss',
})
export class PurchaseStepper implements OnInit{
  productType: string = '';
  pageTitle: string = '';
   selectedType: string = '';
    isPurchaseModalOpen = false;
    currentStep :number = 1;
  constructor(private route: ActivatedRoute ,private router:Router) {}

  ngOnInit(): void {
   
    this.route.params.subscribe(params => {
      this.productType = params['type'];
      this.updateUI();
    });
  }

  updateUI() {
    switch(this.productType) {
      case 'voice': this.pageTitle = 'Purchase Voice SIM'; 
       break;
      case 'data': this.pageTitle = 'Purchase Data SIM';
       break;
      case 'landline': this.pageTitle = 'Purchase Landline';
       break;
      case 'adsl': this.pageTitle = 'Purchase ADSL'; 
      break;
      default: this.pageTitle = 'Purchase Product';
    }
  }


  onNext() {
   
      this.router.navigate(['/choose dial']);
    }
  goToStep(step: number) {
  this.currentStep = step;
  
}
}
