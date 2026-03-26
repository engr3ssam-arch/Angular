  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Route } from '@angular/router';
  import { AsyncPipe, CommonModule, NgClass } from '@angular/common';
  import { Router } from '@angular/router';
import { DialsList } from '../../interface/dials-list';
import { Dials } from '../../service/dials';
import { Stepper } from "../stepper/stepper";
import { PageTitleService } from '../../service/pageTitle Service/page-title-service';
import { Summary } from "../summary/summary";
import { SummaryService } from '../../service/summary Service/summary-service';

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
 
   constructor(private router: Router ,private route: ActivatedRoute ,private dialService: Dials ,public pageTitleService:PageTitleService ,public summaryService:SummaryService) {}
  ngOnInit(): void {
    this.dialsList = this.dialService.getDials();
  this.route.params.subscribe(params => {
    const type = params['type'];
    if (type) {
      this.pageTitleService.setServiceName(type);
    }
  });
}
   
  onNext() {
    if (this.selectedDial) {
    
      this.router.navigate(['/customer info']);
    }
  }

  onBack() {
    this.router.navigate(['/purchase', this.selectedType]);
  }

  goToStep(step: number) {
  this.currentStep = step;
  
}

onResDial(type: string) {
  this.summaryService.updateSummary({ resDial: type });
}
}
