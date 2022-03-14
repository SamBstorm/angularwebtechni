import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleInvisible]'
})
export class ToggleInvisibleDirective {

  constructor(private _ref : ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this._changeVisibility();
  }
  @HostListener('mouseleave') onMouseLeave(){
    this._changeVisibility();
  }

  private _changeVisibility(){
    let subMenus : HTMLElement[] = this._ref.nativeElement.querySelectorAll('li');
    for (let index = 0; index < subMenus.length; index++) {
      const subMenu = subMenus[index];
      subMenu.classList.toggle('invisible');
    }
  }
}
