import { Injectable } from '@angular/core';

/* import { HeroJobAdsComponent } from '../components/hero-job-ads.component';
import { HeroProfileComponent } from '../components/hero-profile.component'; */
import { JetExMobileAdsComponent } from '../components/jetex-mobile-ads.component';
import { AdsItem } from './ads-item';

@Injectable()
class AdsService {
  getAds = () : Array<AdsItem> => {
    return [
      {
        component: JetExMobileAdsComponent,
        data: {
          name: 'Bombasto',
          bio: 'Brave as they come'
        }
      },
      /* {
        component: HeroProfileComponent,
        data: {
          name: 'Bombasto',
          bio: 'Brave as they come'
        }
      },
      {
        component: HeroProfileComponent,
        data: {
          name: 'Dr IQ',
          bio: 'Smart as they come'
        }
      },
      {
        component: HeroJobAdsComponent,
        data: {
          headline: 'Hiring for several positions',
          body: 'Submit your resume today!'
        }
      },
      {
        component: HeroJobAdsComponent,
        data: {
          headline: 'Openings in all departments',
          body: 'Apply today'
        }
      }, */
    ];
  }
}

export { AdsService };