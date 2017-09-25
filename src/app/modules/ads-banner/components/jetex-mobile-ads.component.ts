import { Component, Input } from '@angular/core';

import { AdsComponent } from '../services/ads-component';

@Component({
  template: `
    <div class="whiteBackground">
      <div class="container">
        <div class="row pady50top">
          <div class="col-sm-push-6 col-sm-6 col-xs-12 pady150topd">
            <div>
              <h3 class="pady30bot"><a href="https://play.google.com/store/apps/details?id=com.jetexplorer.jetex&amp;hl=en" target="_blank">GET JETEXPLORER MOBILE APP</a></h3>
            </div>
            <div class="pady15bot">
              <p> Explore Asia’s best flight deals with JetExplorer Mobile Application for Android. Save your searches and access
                them across your devices.</p>
            </div>
            <div class="">
              <a href="https://play.google.com/store/apps/details?id=com.jetexplorer.jetex&amp;hl=en" target="_blank"><img alt="androidbtn" src="assets/images/mobile-ads/androidbtn.png" style="max-height: 70px; display: none !important;"></a>
            </div>
          </div>
          <div class="col-sm-pull-6 col-sm-6 col-xs-12 pady30topm" style="text-align: center;">
            <img alt="andoidAds" src="assets/images/mobile-ads/app-promo-android.png" style="max-width: 450px; width: 100%; display: none !important;">
          </div>
        </div>
      </div>
    </div>
  `
})
class JetExMobileAdsComponent implements AdsComponent {
  @Input() data: any;
}

export { JetExMobileAdsComponent };
