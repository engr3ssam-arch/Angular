import { Component, OnInit, signal } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { PageTitleService } from '../../service/pageTitle Service/page-title-service';
import { SummaryService } from '../../service/summary Service/summary-service';
import { StepperService } from '../../service/stepper Service/stepper-service';

@Component({
  selector: 'app-customer-info',
  imports: [CommonModule,  CommonModule],
  templateUrl: './customer-info.html',
  styleUrl: './customer-info.scss',
})
export class CustomerInfo implements OnInit{
currentStep: number = 3; 
pageTitle: string = '';
citizenshipStatus: string = 'citizen';
billAccountCase: string = 'new'; 
isDataApplied = signal(false);     

 
constructor(private router: Router ,public pageTitleService:PageTitleService ,public summaryService:SummaryService ,public stepperService: StepperService ) {}


ngOnInit(): void {
    let saved = this.summaryService.summaryData();
    if (saved.citizenStatus) {
      this.citizenshipStatus = saved.citizenStatus.toLowerCase();
    }
  }



 onApply() {
  this.isDataApplied.set(true); 
  this.stepperService.setStepValid(true); 
   this.summaryService.updateSummary({ 
    citizenStatus: this.citizenshipStatus 
  });
}

setCitizenship(status: string) {
  this.citizenshipStatus = status;
  this.isDataApplied.set(false); 
}
 
   onNext() {
    this.stepperService.setStepValid(true);
  }

  goToStep(step: number) {
  this.currentStep = step;
  
}

onCitizenStatus(type: string) {
  this.summaryService.updateSummary({ citizenStatus: type });
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
