import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { routesConfig } from './modules/configs/index';

import { AppComponent } from './app.component';
import { MainHeaderComponent, MainContentComponent } from './modules/commons/index';

import { HomePageComponent } from './modules/home-page/index';
import { AdsBannerComponent, JetExMobileAdsComponent, AdsHostDirective } from './modules/ads-banner/index';
import { SearchHistoriesComponent } from './modules/search-histories/index';
import { PageNotFoundComponent } from './modules/page-not-found/index';
import { AdsService } from './modules/ads-banner/services/ads.service';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainContentComponent,
    /* HotelsSearchComponent,
    FlightsSearchComponent, */
    SearchHistoriesComponent,
    HomePageComponent,
    AdsBannerComponent,
    JetExMobileAdsComponent,
    AdsHostDirective,
    PageNotFoundComponent
  ],
  entryComponents: [
    JetExMobileAdsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesConfig, { useHash: true })
  ],
  providers: [
    AdsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
