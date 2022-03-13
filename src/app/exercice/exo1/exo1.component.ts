import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss'],
})
export class Exo1Component implements OnInit {
  totalSeconds: number = 0;
  timer: any;

  constructor() {}

  ngOnInit(): void {}

  start() {
    this.timer = setInterval( () => { this.totalSeconds ++; } , 1000);
  }

  pause() {
    clearInterval(this.timer);
    this.timer = null;
  }

  reset() {
    this.pause();
    this.totalSeconds = 0;
  }
}
