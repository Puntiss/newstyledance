import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { customOptions } from '../../resources/plugin/owl-carousel.config';
import { LoadExcelGallery } from '../../resources/plugin/loadExcelGallery';
import { CarouselModule } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    CarouselModule
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  galleryImgages: Array<string> = [];
  customOptions = customOptions;

  constructor(private loadExcelGallery: LoadExcelGallery) { }

  async ngOnInit() {
    this.galleryImgages = await this.loadExcelGallery.loadfromSchool("gallery", "gallery");
  }
}
