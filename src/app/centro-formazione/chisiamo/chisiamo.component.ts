import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ContactBarComponent } from '../../contact-bar/contact-bar.component';
import { RouterModule } from '@angular/router';
import { CentroFormazioneNavbarComponent, locations } from '../navbar/navbar.component';

@Component({
  selector: 'app-accademia-danza-chi-siamo',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    ContactBarComponent,
    CentroFormazioneNavbarComponent
  ],
  templateUrl: './chisiamo.component.html',
  styleUrl: './chisiamo.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CentroFormazioneChiSiamoComponent {
  locations = locations;
}
