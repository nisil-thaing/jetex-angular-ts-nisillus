import { Component, Input, ViewChild, ComponentFactoryResolver, OnInit, OnDestroy } from '@angular/core';

import { AdsHostDirective } from '../directives/ads-host.directive';
import { AdsItem } from '../services/ads-item';
import { AdsComponent } from '../services/ads-component';

@Component({
  selector: 'ads-banner',
  templateUrl: '../templates/ads-banner.component.html'
})
class AdsBannerComponent implements OnInit, OnDestroy {
  @Input() ads: Array<AdsItem>;
  @ViewChild(AdsHostDirective) adsHost: AdsHostDirective;
  currentAdsIndex: number = -1;
  subscription: any;
  interval: any;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadAdsComponent();
    // this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadAdsComponent = () => {
    this.currentAdsIndex = (this.currentAdsIndex + 1) % this.ads.length;
    let adsItem = this.ads[this.currentAdsIndex];

    let componentFactory = this._componentFactoryResolver.resolveComponentFactory(adsItem.component);

    this.adsHost.destroyAllViews();
    let componentRef = this.adsHost.createComponent(componentFactory);
    (<AdsComponent>componentRef.instance).data = adsItem.data;
  }

  getAds = () => {
    this.interval = setInterval(() => {
      this.loadAdsComponent();
    }, 1000);
  }
}

export { AdsBannerComponent };