import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss'],
})
export class Exo1Component implements OnInit, OnDestroy {
  totalSeconds!: number;
  timer: any;

  constructor() {
  }
  ngOnDestroy(): void {
    alert('Ho quel dommage d\'être parti si vite!')
  }

  ngOnInit(): void {
    this.totalSeconds = 0;
  }

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
