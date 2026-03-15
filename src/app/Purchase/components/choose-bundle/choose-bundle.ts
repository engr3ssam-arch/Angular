import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Bundle } from '../../interface/bundle';
import { BundleService } from '../../service/bundle/bundle-service';
import { Router } from '@angular/router';
import { Stepper } from "../stepper/stepper";

@Component({
  selector: 'app-choose-bundle',
  imports: [CommonModule, Stepper],
  templateUrl: './choose-bundle.html',
  styleUrl: './choose-bundle.scss',
})
export class ChooseBundle {
   currentStep: number = 5; 
     pageTitle: string = '';



     bundles: Bundle[] = [];
selectedBundleId: number | null = null;

constructor(private bundleService: BundleService ,private router:Router) {}

 ngOnInit() {

    this.bundles= this.bundleService.getBundles();
  }

selectBundle(id: number) {
  this.selectedBundleId = id;
}

goToStep(step: number) {
  this.currentStep = step;
  
}

}
