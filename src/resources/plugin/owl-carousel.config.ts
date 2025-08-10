import { OwlOptions } from "ngx-owl-carousel-o";

export const customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      1200: {
        items: 2
      },
      1600: {
        items: 3
      }
    },
    nav: true,
    autoplay: true
  }