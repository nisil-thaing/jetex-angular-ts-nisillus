import { Directive, ViewContainerRef, ComponentFactory, ComponentRef } from '@angular/core';

@Directive({
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