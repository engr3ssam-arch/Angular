import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonEngine } from '@angular/ssr/node';

@Component({
  selector: 'app-nav',
  imports: [RouterLink ,RouterLinkActive ,CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  isMenuCollapsed = true;

  
  toggleNavbar() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

}
