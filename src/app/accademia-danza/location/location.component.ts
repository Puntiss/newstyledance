import { Component, ViewEncapsulation } from '@angular/core';
import { ContactBarComponent } from '../../contact-bar/contact-bar.component';
import { CommonModule } from '@angular/common';
import { AccademiaDanzaNavbarComponent } from '../navbar/navbar.component';
import { LoadExcelHours, LocationType } from '../../../resources/plugin/loadExcelHours';


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
  locations: Array<LocationType> = [];

  constructor(private loadExcelHours: LoadExcelHours) { }

  async ngOnInit() {
    this.locations = await this.loadExcelHours.getLocations("accademia-danza");
  }

  redirectTo(newLocation: string) {
    window.location.href = newLocation;
  }
}
