import { Component, Input } from '@angular/core';

import { AdsComponent } from '../services/ads-component';

@Component({
  templateUrl: '../templates/jetex-mobile-ads.component.html'
})
class JetExMobileAdsComponent implements AdsComponent {
  @Input() data: any;
}

export { JetExMobileAdsComponent };
