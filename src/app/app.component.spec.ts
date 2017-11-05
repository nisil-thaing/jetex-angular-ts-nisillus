import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { routesConfig } from './modules/configs/index';

import { AppComponent } from './app.component';
import { MainHeaderComponent, MainContentComponent } from './modules/commons/index';

import { HomePageComponent } from './modules/home-page/index';
import { AdsBannerComponent, AdsHostDirective } from './modules/ads-banner/index';
import { SearchHistoriesComponent } from './modules/search-histories/index';
import { PageNotFoundComponent } from './modules/page-not-found/index';
import { AdsService } from './modules/ads-banner/services/ads.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainHeaderComponent,
        MainContentComponent,
        SearchHistoriesComponent,
        HomePageComponent,
        AdsBannerComponent,
        AdsHostDirective,
        PageNotFoundComponent
      ],
      imports: [
        RouterModule.forRoot(routesConfig, { useHash: true })
      ],
      providers: [
        AdsService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  /* it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  })); */
});
