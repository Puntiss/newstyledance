import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ConcorsiyRowType, E_CONCORSI_TYPE, LoadExcelConcorsi } from '../../../resources/plugin/loadExcelConcorsi';
import { ContactBarComponent } from '../../contact-bar/contact-bar.component';
import { ScuolaDanzaNavbarComponent } from '../navbar/navbar.component';
import { customOptions } from '../../../resources/plugin/owl-carousel.config';
import { CarouselModule } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-concorsi',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    ContactBarComponent,
    ScuolaDanzaNavbarComponent
  ],
  templateUrl: './concorsi.component.html',
  styleUrl: './concorsi.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ScuolaDanzaConcorsiComponent {

  E_CONCORSI_TYPE = E_CONCORSI_TYPE;
  dataSource: Array<ConcorsiyRowType> = [];
  customOptions = customOptions;

  constructor(private loadExcelConcorsi: LoadExcelConcorsi) { }

  async ngOnInit() {
    this.dataSource = await this.loadExcelConcorsi.loadfromSchool("scuola-danza");
  }

}
