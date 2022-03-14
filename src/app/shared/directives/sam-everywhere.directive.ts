import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSamEverywhere]'
})
export class SamEverywhereDirective {

  constructor(private _ref : ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this._ref.nativeElement.innerText = "Sam";
  }

}
