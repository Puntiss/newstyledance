import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PreMenuComponent } from './pre-menu/pre-menu.component';


export const NUMERO_WHATSAPP_LINO: string = "393338484116";
export const NUMERO_WHATSAPP_GIOVANNA: string = "393384421180";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    PreMenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: '../resources/css/style.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  showPromotion = false;
  ngOnInit(): void {
    /*setTimeout(() => {
      this.showPromotion = true;
    }, 1000);*/
    console.log("Appcomponent working")
  }

  title = 'newstyledance';
}



