import { Component } from '@angular/core';
import { Summary } from "../summary/summary";
import { PurchaseStepper } from "../purchase-stepper/purchase-stepper";
import { ChooseDial } from "../choose-dial/choose-dial";
import { CustomerInfo } from "../customer-info/customer-info";
import { ChoosePlan } from "../choose-plan/choose-plan";
import { ChooseBundle } from "../choose-bundle/choose-bundle";
import { Stepper } from "../stepper/stepper";
import { PageTitleService } from '../../service/pageTitle Service/page-title-service';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
@Component({
  selector: 'app-purshase-main',
  imports: [Summary, PurchaseStepper, ChooseDial, CustomerInfo, ChoosePlan, ChooseBundle, Stepper,AsyncPipe,NgIf],
  templateUrl: './purshase-main.html',
  styleUrl: './purshase-main.scss',
})
export class PurshaseMain {
  constructor(public pageTitleService: PageTitleService) { }

  currentStep: number = 1; 

  goNext() {
    if (this.currentStep < 6) {
      this.currentStep++;
    }
  }

  goBack() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  goToStep(step: number) {
    this.currentStep = step;
  }
}
