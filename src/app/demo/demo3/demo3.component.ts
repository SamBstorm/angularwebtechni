import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  currentStyles : any;

  italic : boolean = false;
  bold : boolean = false;
  size : boolean = false;

  class: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

    setCurrentStyle(){
      this.currentStyles = {
        'font-style' : this.italic ? 'italic' : 'normal',
        'font-weight' : this.bold ? 'bold' : 'normal',
        'font-size' : this.size ? '24px' : '12px',
      };
    }

    toggleItalic(){
      this.italic = !this.italic;
      this.setCurrentStyle();
    }

    toggleBold() {
      this.bold = !this.bold;
      this.setCurrentStyle();
    }

    toggleSize(){
      this.size = !this.size;
      this.setCurrentStyle();
    }

    toggleClass(){
      this.class = !this.class;
    }
}
