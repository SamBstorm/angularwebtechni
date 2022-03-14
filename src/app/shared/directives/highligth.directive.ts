import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highligth]'
})
export class HighligthDirective {

  constructor(private _ref : ElementRef) {
    this._ref.nativeElement.style.fontWeight = "bold";
   }

   @HostListener('mouseenter') onMouseEnter(){
    this._ref.nativeElement.style.backgroundColor = "yellow";
   }

   @HostListener('mouseleave') onMouseLeave(){
    this._ref.nativeElement.style.backgroundColor = "";
   }
}
