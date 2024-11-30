import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ContactBarComponent } from '../../contact-bar/contact-bar.component';
import { EventiDanzaNavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-eventi-danza-chi-siamo',
  standalone: true,
  imports: [
    CommonModule,
    ContactBarComponent,
    EventiDanzaNavbarComponent
  ],
  templateUrl: './chisiamo.component.html',
  styleUrl: './chisiamo.component.css',
  encapsulation: ViewEncapsulation.None
})
export class EventiDanzaChiSiamoComponent {
}
