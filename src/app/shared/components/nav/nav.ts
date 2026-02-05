import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonEngine } from '@angular/ssr/node';

@Component({
  selector: 'app-nav',
  imports: [RouterLink ,RouterLinkActive ,CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  

 @Input({required:true}) isLogin !:boolean ;

  isMenuCollapsed = true;
  toggleNavbar() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

}
