import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Nav } from "../../../shared/components/nav/nav";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Footer } from "../../../shared/components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [RouterLink, Nav, CarouselModule, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
