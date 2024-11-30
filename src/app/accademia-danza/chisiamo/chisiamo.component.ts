import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ContactBarComponent } from '../../contact-bar/contact-bar.component';
import { AccademiaDanzaNavbarComponent, locations } from '../../accademia-danza/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accademia-danza-chi-siamo',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContactBarComponent,
    AccademiaDanzaNavbarComponent
  ],
  templateUrl: './chisiamo.component.html',
  styleUrl: './chisiamo.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AccademiaDanzaChiSiamoComponent {
  locations = locations;
}
