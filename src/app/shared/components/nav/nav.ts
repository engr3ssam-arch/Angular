import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonEngine } from '@angular/ssr/node';
import { DataService } from '../../../core/services/dataServices/data-service';
import { Observable } from 'rxjs';
import { User } from '../../interface/user';
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

  currentUser$: Observable<User| null>;
  selectedType: string = '';

  constructor(private authService: DataService , private router:Router ,private pageTitleService:PageTitleService) {
  
  this.currentUser$ = this.authService.currentUser$;
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
      this.router.navigate(['/purchase', this.selectedType]);
    }
  }
}
