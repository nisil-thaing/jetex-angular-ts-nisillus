import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { AdsService } from '../../ads-banner/services/ads.service';
import { AdsItem } from '../../ads-banner/services/ads-item';

import * as $ from 'jQuery';
import debounce from 'lodash/debounce';

@Component({
  templateUrl: '../templates/home-page.component.html'
})
class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {
  ads: Array<AdsItem> = [];
  title = 'Ngan, I still loving you!';

  calculateMosaicSize = debounce(() => {
    const mosaicItemObjects: any = $('.mosaic-des-top .item');
    let objectSmallHeight: number;

    mosaicItemObjects.each((index, item) => {
      if (objectSmallHeight === undefined && $(item).hasClass('small')) {
        objectSmallHeight = $(item).width();
      }
    });

    mosaicItemObjects.css('height', objectSmallHeight + 'px');
  }, 500);

  constructor(private _adsService: AdsService) {}

  ngOnInit() {
    this.ads = this._adsService.getAds();
  }

  ngAfterViewInit() {
    this.calculateMosaicSize();
    $(window).on('resize', this.calculateMosaicSize);
  }

  ngOnDestroy() {
    $(window).off('resize');
  }
}

export { HomePageComponent };
