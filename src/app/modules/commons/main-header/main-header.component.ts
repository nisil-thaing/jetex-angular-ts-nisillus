import { Component, OnInit, OnDestroy } from '@angular/core';
import * as jQuery from 'jQuery';

interface stickyHeaderStateLayout {
  isFixed: boolean,
  isVisibled: boolean,
  previousTop: number,
  headerEle: any,
  headerHeight: number,
  contentEle: any
}

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html'
})
class MainHeaderComponent implements OnInit, OnDestroy {
  private stickyHeaderState: stickyHeaderStateLayout = {
    isFixed: true,
    isVisibled: true,
    previousTop: 70,
    headerEle: undefined,
    headerHeight: 0,
    contentEle: undefined,
  };

  ngOnInit() {
    this.stickyHeaderState.headerEle = jQuery('header.sticky-navigation');
    this.stickyHeaderState.contentEle = jQuery('section.content');

    window.addEventListener('scroll', this.onWindowScrollingHandle);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onWindowScrollingHandle);
  }

  onWindowScrollingHandle = () => {
    let currentTop = document.documentElement.scrollTop || document.body.scrollTop;

    // check if user is scrolling up
    if (this.stickyHeaderState.headerEle.length > 0 && this.stickyHeaderState.contentEle.length > 0) {
      this.stickyHeaderState.headerHeight = this.stickyHeaderState.headerEle.height();

      if (currentTop < this.stickyHeaderState.previousTop) {
        // scrolling up
        if (currentTop > 70 && this.stickyHeaderState.headerEle.hasClass('is-fixed')) {
          if (!this.stickyHeaderState.contentEle.hasClass('header-is-visible')) {
            this.stickyHeaderState.contentEle.addClass('header-is-visible');
          }
          if (!this.stickyHeaderState.isVisibled) {
            this.stickyHeaderState.isVisibled = true;
          }
        } else {
          if (this.stickyHeaderState.contentEle.hasClass('header-is-visible header-is-fixed')) {
            this.stickyHeaderState.contentEle.removeClass('header-is-visible header-is-fixed');
          }
          if (this.stickyHeaderState.isFixed) {
            this.stickyHeaderState.isFixed = false;
          }
          if (this.stickyHeaderState.isVisibled) {
            this.stickyHeaderState.isVisibled = false;
          }
        }
      } else {
        // scrolling down
        if (this.stickyHeaderState.contentEle.hasClass('header-is-visible')) {
          this.stickyHeaderState.contentEle.removeClass('header-is-visible');
        }
        if (this.stickyHeaderState.isVisibled) {
          this.stickyHeaderState.isVisibled = false;
        }
        if (currentTop > this.stickyHeaderState.headerHeight && !this.stickyHeaderState.headerEle.hasClass('is-fixed')) {
          if (!this.stickyHeaderState.contentEle.hasClass('header-is-fixed')) {
            this.stickyHeaderState.contentEle.addClass('header-is-fixed');
          }
          if (!this.stickyHeaderState.isFixed) {
            this.stickyHeaderState.isFixed = true;
          }
        }
      }
    }

    this.stickyHeaderState.previousTop = currentTop >= 70 ? currentTop : 70;
  }
}

export { MainHeaderComponent };