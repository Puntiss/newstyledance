import { Component, ViewEncapsulation } from '@angular/core';
import { ContactBarComponent } from '../../contact-bar/contact-bar.component';
import { CommonModule } from '@angular/common';
import { ScuolaDanzaNavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-scuola-danza-location',
  standalone: true,
  imports: [
    CommonModule,
    ContactBarComponent,
    ScuolaDanzaNavbarComponent
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ScuolaDanzaLocationComponent {
  redirectTo(newLocation: string) {
    window.location.href = newLocation;
  }
}
