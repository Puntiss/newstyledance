import { Component, ViewEncapsulation } from '@angular/core';
import { EventiDanzaNavbarComponent } from '../navbar/navbar.component';
import { ContactBarComponent } from '../../contact-bar/contact-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventi-danza-production',
  standalone: true,
  imports: [
    CommonModule,
    ContactBarComponent,
    EventiDanzaNavbarComponent
  ],
  templateUrl: './production.component.html',
  styleUrl: './production.component.css',
  encapsulation: ViewEncapsulation.None
})
export class EventiDanzaProductionComponent {

}
