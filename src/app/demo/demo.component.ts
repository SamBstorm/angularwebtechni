import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  //templateUrl: './demo.component.html',
  template: `<div>test<router-outlet></router-outlet></div>`,
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
