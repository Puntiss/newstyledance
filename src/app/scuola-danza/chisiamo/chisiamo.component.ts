import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ContactBarComponent } from '../../contact-bar/contact-bar.component';
import { ScuolaDanzaNavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-scuola-danza-chi-siamo',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    ContactBarComponent,
    ScuolaDanzaNavbarComponent
  ],
  templateUrl: './chisiamo.component.html',
  styleUrl: './chisiamo.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ScuolaDanzaChiSiamoComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      1200: {
        items: 2
      },
      1600: {
        items: 3
      }
    },
    nav: false,
    autoplay: true
  }
}
