import { Component, AfterViewInit, OnDestroy } from '@angular/core';

import * as $ from 'jQuery';
import debounce from 'lodash/debounce';

@Component({
  templateUrl: '../templates/home-page.component.html'
})
class HomePageComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit() {
    this.calculateMosaicSize();
    $(window).on('resize', this.calculateMosaicSize);
  }

  ngOnDestroy() {
    $(window).off('resize');
  }

  calculateMosaicSize = debounce(() => {
    let mosaicItemObjects: any = $(".mosaic-des-top .item");
    let objectSmallHeight: number = undefined;

    mosaicItemObjects.each((index, item) => {
      if (objectSmallHeight === undefined && $(item).hasClass('small')) {
        objectSmallHeight = $(item).width();
      }
    });

    mosaicItemObjects.css("height", objectSmallHeight + "px");    
  }, 500);
}

export { HomePageComponent }