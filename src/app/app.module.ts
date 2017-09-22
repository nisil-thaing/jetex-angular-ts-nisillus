import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { routesConfig } from './modules/configs/index';

import { AppComponent } from './app.component';
import { MainHeaderComponent, MainContentComponent } from './modules/commons/index';

import { HomePageComponent } from './modules/home-page/index';
import { HotelsSearchComponent } from './modules/hotels/index';
import { FlightsSearchComponent } from './modules/flights/index';
import { SearchHistoriesComponent } from './modules/search-histories/index';
import { PageNotFoundComponent } from './modules/page-not-found/index';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainContentComponent,
    HotelsSearchComponent,
    FlightsSearchComponent,
    SearchHistoriesComponent,
    HomePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
