import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-customer-info',
  imports: [CommonModule],
  templateUrl: './customer-info.html',
  styleUrl: './customer-info.scss',
})
export class CustomerInfo {
   currentStep: number = 3; 
     pageTitle: string = '';


  citizenshipStatus: string | null = null;

 setCitizenship(status: string) {
    this.citizenshipStatus = status;
  }

}
