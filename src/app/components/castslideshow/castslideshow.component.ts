import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Cast } from '../../interfaces/credits-response';

@Component({
  selector: 'app-castslideshow',
  templateUrl: './castslideshow.component.html',
  styleUrls: ['./castslideshow.component.css']
})
export class CastslideshowComponent implements OnInit,AfterViewInit {

  @Input() cast: Cast[];
  constructor() { }

  ngOnInit() {
    console.log(this.cast);
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween:15
    });
  }
}
