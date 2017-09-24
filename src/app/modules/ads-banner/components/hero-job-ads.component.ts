import { Component, Input } from '@angular/core';

import { AdsComponent } from '../services/ads-component';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4> 
      
      {{data.body}}
    </div>
  `
})
export class HeroJobAdsComponent implements AdsComponent {
  @Input() data: any;

}



/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/