import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonEngine } from '@angular/ssr/node';
import { DataService } from '../../../core/services/dataServices/data-service';
import { Observable } from 'rxjs';
import { User } from '../../interface/user';
@Component({
  selector: 'app-nav',
  imports: [RouterLink ,RouterLinkActive ,CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav  {
 isPurchaseModalOpen = false;

  currentUser$: Observable<User| null>;

  constructor(private authService: DataService) {
  
  this.currentUser$ = this.authService.currentUser$;
  }

  isMenuCollapsed = true;
  toggleNavbar() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
  toggleModal() {
    this.isPurchaseModalOpen = !this.isPurchaseModalOpen;
  }

}
