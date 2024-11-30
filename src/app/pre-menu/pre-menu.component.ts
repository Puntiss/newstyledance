import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactBarComponent } from '../contact-bar/contact-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pre-menu',
  standalone: true,
  imports: [
    CommonModule,
    ContactBarComponent,
    RouterModule
  ],
  templateUrl: './pre-menu.component.html',
  styleUrl: './pre-menu.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PreMenuComponent {

  opacityButtonTop = 1;
  opacityButtons = 0;

  showOptions() {
    let backgroundAudio = document.getElementById("background-audio");
    if (backgroundAudio && backgroundAudio instanceof HTMLAudioElement) {
      backgroundAudio.play();
    }

    this.opacityButtonTop = 0;
    this.opacityButtons = 1;
  }



}
