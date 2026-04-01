import { Component, OnInit, signal } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { PageTitleService } from '../../service/pageTitle Service/page-title-service';
import { SummaryService } from '../../service/summary Service/summary-service';
import { StepperService } from '../../service/stepper Service/stepper-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-info',
  imports: [CommonModule , FormsModule ],
  templateUrl: './customer-info.html',
  styleUrl: './customer-info.scss',
})
export class CustomerInfo implements OnInit{
currentStep: number = 3; 
pageTitle: string = '';
citizenshipStatus: string = 'citizen';
billAccountCase: string = 'new'; 
isDataApplied = signal(false);     
custData = {
  firstName: '',
  lastName: '',
  email: 'Name@gmail.com', 
  nationalId: '2978654322123'
};
 
constructor(private router: Router ,public pageTitleService:PageTitleService ,public summaryService:SummaryService ,public stepperService: StepperService ) {}


ngOnInit(): void {
    let saved = this.summaryService.summaryData();
    if (saved.citizenStatus) {
      this.citizenshipStatus = saved.citizenStatus.toLowerCase();
      this.stepperService.setStepValid(true); 
    } else {
      this.stepperService.setStepValid(false);
    }
}


 onApply() {
 this.isDataApplied.set(true); 

  this.summaryService.updateSummary({ 
    citizenStatus: this.citizenshipStatus,
    firstName: this.custData.firstName,
    lastName: this.custData.lastName,
    email: this.custData.email,
    nationalId: this.custData.nationalId
  });
  this.stepperService.setStepValid(true);
console.log("Service Signal Value:", this.stepperService.isStepValid());
}

setCitizenship(status: string) {
  this.citizenshipStatus = status;
  
  if (status === 'foreigner') {
    this.stepperService.setStepValid(true); 
    this.summaryService.updateSummary({ citizenStatus: 'Foreigner' });
  } else {
    
    this.isDataApplied.set(false);
    this.stepperService.setStepValid(false);
    this.summaryService.updateSummary({ citizenStatus: 'Citizen' });
  }
 
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

onInputChange() {
  if (this.citizenshipStatus === 'foreigner') {
    this.stepperService.setStepValid(true);
  }
  
  this.summaryService.updateSummary({ 
    firstName: this.custData.firstName,
    lastName: this.custData.lastName,
    email: this.custData.email,
    nationalId: this.custData.nationalId
  });
}
}
