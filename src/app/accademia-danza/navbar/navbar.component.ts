import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { LoadExcelHours, LocationType } from '../../../resources/plugin/loadExcelHours';

export const locations: Array<string> = ["Vignate"];

@Component({
  selector: 'app-accademia-danza-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AccademiaDanzaNavbarComponent {

  menuIcon = faBars;

  locations: Array<LocationType> = [];

  constructor(private loadExcelHours: LoadExcelHours) { }

  async ngOnInit() {
    this.locations = await this.loadExcelHours.getLocations("accademia-danza")
  }

  getLocationsName() {
    return this.locations.map(location => location.nome);
  }

  slideBar() {

    var mySidenav = document.getElementById("mySidenav");

    if (mySidenav != null) {
      if (mySidenav.style.width == "250px") {
        this.menuIcon = faBars;
        mySidenav.style.width = "0px";
      }
      else
        if (mySidenav.style.width == "0px" || mySidenav.style.width == "") {
          this.menuIcon = faX;
          mySidenav.style.width = "250px";
        }
    }
    else
      console.log("mySidenav null");
  }
}
