import { Component, OnInit } from '@angular/core';
import { IEleve } from 'src/app/models/ieleve';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {

  public eleves : IEleve[] = [
    {first_name : "David", last_name:"Biondolillo"},
    {first_name:"Gaëtan", last_name:"Massart"},
    {first_name:"Alexandre" , last_name : "Demey"},
    {first_name:"Laetitia" , last_name : "Barone"},
    {first_name:"Fany" , last_name : "Colosio"},
    {first_name:"Tristan" , last_name : "Roël"},
    {first_name:"Axel" , last_name : "Clever"},
    {first_name:"Aurélien" , last_name : "Marchal"},
    {first_name:"Rémi" , last_name : "Wathelet"},
    {first_name:"Abdurahman" , last_name : "Bayhoca"},
    {first_name:"Simon" , last_name : "Rase"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  public recevoirClone(clone : IEleve){
    this.eleves.unshift(clone);
  }
}
