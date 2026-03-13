  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Route } from '@angular/router';
  import { CommonModule, NgClass } from '@angular/common';
  import { Router } from '@angular/router';
import { DialsList } from '../../interface/dials-list';
import { Dials } from '../../service/dials';

@Component({
  selector: 'app-choose-dial',
  imports: [CommonModule],
  templateUrl: './choose-dial.html',
  styleUrl: './choose-dial.scss',
})
export class ChooseDial implements OnInit {
   currentStep: number = 2; 
   productType: string = ''; 
   pageTitle: string = '';
   dialsList: DialsList[] = [];
   selectedDial:  DialsList | null = null;
   selectedType: string = '';
 
   constructor(private router: Router ,private route: ActivatedRoute ,private dialService: Dials ) {}
  ngOnInit(): void {
   this.dialsList = this.dialService.getDials();

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
    if (this.selectedDial) {
    
      this.router.navigate(['/customer info']);
    }
  }

  onBack() {
    this.router.navigate(['/purchase', this.selectedType]);
  }

}
