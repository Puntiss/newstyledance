import { Component, ViewEncapsulation } from '@angular/core';
import { ContactBarComponent } from '../../contact-bar/contact-bar.component';
import { CommonModule } from '@angular/common';
import { AccademiaDanzaNavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-accademia-danza-location',
  standalone: true,
  imports: [
    CommonModule,
    ContactBarComponent,
    AccademiaDanzaNavbarComponent
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AccademiaDanzaLocationComponent {
  redirectTo(newLocation: string) {
    window.location.href = newLocation;
  }
}
