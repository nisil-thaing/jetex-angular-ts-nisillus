import { Directive, ViewContainerRef, ComponentFactory, ComponentRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ads-host]'
})
class AdsHostDirective {
  constructor(private _viewContainerRef: ViewContainerRef) {}

  destroyAllViews = () => {
    this._viewContainerRef.clear();
  }

  createComponent = <C>(componentFactory: ComponentFactory<C>): ComponentRef<C> => {
    return this._viewContainerRef.createComponent(componentFactory);
  }
}

export { AdsHostDirective };
