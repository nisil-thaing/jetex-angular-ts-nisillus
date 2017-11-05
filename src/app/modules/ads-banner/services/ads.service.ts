import { Injectable } from '@angular/core';

import { JetExMobileAdsComponent } from '../components/jetex-mobile-ads.component';
import { AdsItem } from './ads-item';

@Injectable()
class AdsService {
  getAds = (): Array<AdsItem> => {
    return [
      {
        component: JetExMobileAdsComponent,
        data: {
          name: 'Thai Nguyen',
          bio: 'Do something dummy'
        }
      }
    ];
  }
}

export { AdsService };
