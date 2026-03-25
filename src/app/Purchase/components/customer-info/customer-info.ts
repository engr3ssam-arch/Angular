import { Component } from '@angular/core';
import { AsyncPipe, CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { Stepper } from "../stepper/stepper";
import { PageTitleService } from '../../service/pageTitle Service/page-title-service';
import { Summary } from "../summary/summary";


@Component({
  selector: 'app-customer-info',
  imports: [CommonModule, Stepper, CommonModule, AsyncPipe, Summary],
  templateUrl: './customer-info.html',
  styleUrl: './customer-info.scss',
})
export class CustomerInfo {
   currentStep: number = 3; 
     pageTitle: string = '';


  citizenshipStatus: string | null = null;
 constructor(private router: Router ,public pageTitleService:PageTitleService ) {}
 setCitizenship(status: string) {
    this.citizenshipStatus = status;
  }
 
   onNext() {
   
    
      this.router.navigate(['/choose plan']);
    
  }
  goToStep(step: number) {
  this.currentStep = step;
  
}
}
