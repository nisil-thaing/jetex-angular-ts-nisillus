import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ads-host]'
})
class AdsHostDirective {
  constructor(public _viewContainerRef: ViewContainerRef) {}
}

export { AdsHostDirective };