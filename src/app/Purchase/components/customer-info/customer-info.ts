import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-info',
  imports: [CommonModule ],
  templateUrl: './customer-info.html',
  styleUrl: './customer-info.scss',
})
export class CustomerInfo {
   currentStep: number = 3; 
     pageTitle: string = '';


  citizenshipStatus: string | null = null;
 constructor(private router: Router ) {}
 setCitizenship(status: string) {
    this.citizenshipStatus = status;
  }
 
   onNext() {
   
    
      this.router.navigate(['/choose plan']);
    
  }

}
