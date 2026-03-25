import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Bundle } from '../../interface/bundle';
import { BundleService } from '../../service/bundle/bundle-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stepper } from "../stepper/stepper";
import { PageTitleService } from '../../service/pageTitle Service/page-title-service';
import { Summary } from "../summary/summary";


@Component({
  selector: 'app-choose-bundle',
  imports: [CommonModule, Stepper, AsyncPipe, Summary],
  templateUrl: './choose-bundle.html',
  styleUrl: './choose-bundle.scss',
})
export class ChooseBundle implements OnInit {
   currentStep: number = 5; 
     pageTitle: string = '';



     bundles: Bundle[] = [];
selectedBundleId: number | null = null;

constructor(private bundleService: BundleService ,private router:Router,private route:ActivatedRoute, public pageTitleService:PageTitleService) {}
ngOnInit(): void {
   this.bundles= this.bundleService.getBundles(); 
  this.route.params.subscribe(params => {
    const type = params['type'];
    if (type) {
      this.pageTitleService.setServiceName(type);
    }


  });
 
}


selectBundle(id: number) {
  this.selectedBundleId = id;
}

goToStep(step: number) {
  this.currentStep = step;
  
}

}
