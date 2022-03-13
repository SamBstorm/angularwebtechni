import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  maChaine : string = "Bonjour les développeurs Full Stack Web !";
  monNombre : number = 15.4587459;
  dateDuJour : Date = new Date();
  maTemp : number = 14;

  constructor() { }

  ngOnInit(): void {
  }

}
