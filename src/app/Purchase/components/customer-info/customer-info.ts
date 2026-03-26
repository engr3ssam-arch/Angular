import { Component } from '@angular/core';
import { AsyncPipe, CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { Stepper } from "../stepper/stepper";
import { PageTitleService } from '../../service/pageTitle Service/page-title-service';
import { Summary } from "../summary/summary";
import { SummaryService } from '../../service/summary Service/summary-service';


@Component({
  selector: 'app-customer-info',
  imports: [CommonModule,  CommonModule],
  templateUrl: './customer-info.html',
  styleUrl: './customer-info.scss',
})
export class CustomerInfo {
   currentStep: number = 3; 
     pageTitle: string = '';


  citizenshipStatus: string | null = null;
 constructor(private router: Router ,public pageTitleService:PageTitleService ,public summaryService:SummaryService) {}
 setCitizenship(status: string) {
    this.citizenshipStatus = status;
  }
 
   onNext() {
   
    
      this.router.navigate(['/choose plan']);
    
  }
  goToStep(step: number) {
  this.currentStep = step;
  
}
onCitizenStatus(type: string) {
  this.summaryService.updateSummary({ citizenStatus: type });
}
}
