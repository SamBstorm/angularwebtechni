import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highligth]'
})
export class HighligthDirective {

  @Input() defaultColor? : string;

  constructor(private _ref : ElementRef) {
    this._ref.nativeElement.style.fontWeight = "bold";
   }

   @HostListener('mouseenter') onMouseEnter(){
    this._ref.nativeElement.style.backgroundColor = (this.defaultColor)?this.defaultColor : "yellow";
   }

   @HostListener('mouseleave') onMouseLeave(){
    this._ref.nativeElement.style.backgroundColor = "";
   }
}
