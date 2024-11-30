import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-eventi-danza-navbar',
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
export class EventiDanzaNavbarComponent {

  menuIcon = faBars;

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
