import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ContactBarComponent } from '../../contact-bar/contact-bar.component';
import { ScuolaDanzaNavbarComponent } from '../navbar/navbar.component';
import { LoadExcelGallery } from '../../../resources/plugin/loadExcelGallery';
import { customOptions } from '../../../resources/plugin/owl-carousel.config';

@Component({
  selector: 'app-scuola-danza-chi-siamo',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    ContactBarComponent,
    ScuolaDanzaNavbarComponent
  ],
  templateUrl: './chisiamo.component.html',
  styleUrl: './chisiamo.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ScuolaDanzaChiSiamoComponent {

  gallerySedeImgages: Array<string> = [];
  galleryPrincipaleImgages: Array<string> = [];
  customOptions = customOptions;

  constructor(private loadExcelGallery: LoadExcelGallery) { }

  async ngOnInit() {
    this.gallerySedeImgages = await this.loadExcelGallery.loadfromSchool("scuola-danza", "gallery-sede");
    this.galleryPrincipaleImgages = await this.loadExcelGallery.loadfromSchool("scuola-danza", "gallery-principale");
  }

}
