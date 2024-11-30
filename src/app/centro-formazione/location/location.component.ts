import { Component, ViewEncapsulation } from '@angular/core';
import { ContactBarComponent } from '../../contact-bar/contact-bar.component';
import { CommonModule } from '@angular/common';
import { CentroFormazioneNavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-centro-formazione-location',
  standalone: true,
  imports: [
    CommonModule,
    ContactBarComponent,
    CentroFormazioneNavbarComponent
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CentroFormazioneLocationComponent {
  redirectTo(newLocation: string) {
    window.location.href = newLocation;
  }
}
