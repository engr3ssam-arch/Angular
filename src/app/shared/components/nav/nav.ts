import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from '../../../core/services/dataServices/data-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PageTitleService } from '../../../Purchase/service/pageTitle Service/page-title-service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink ,RouterLinkActive ,CommonModule,FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav  {
  isPurchaseModalOpen = false;
  
  private authService = inject(DataService); 
  currentUser$ = this.authService.currentUser$;
  
  selectedType: string = '';

  constructor( private router:Router ,private pageTitleService:PageTitleService) {

  }

  isMenuCollapsed = true;
  toggleNavbar() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
  toggleModal() {
    this.isPurchaseModalOpen = !this.isPurchaseModalOpen;
  }

selectService(name: string) {
  this.pageTitleService.setServiceName(name); 
 
}

 onProceed() {
    if (this.selectedType) {
      this.isPurchaseModalOpen = false; 
      this.router.navigate(['/purchase-main', this.selectedType]);
    }
  }

  logout() {
  this.authService.logout(); 
  this.router.navigate(['/login']); 
}
}
