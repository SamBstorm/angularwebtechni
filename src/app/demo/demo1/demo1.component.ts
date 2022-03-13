import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  maChaine : string = "Bonjour les Web";
  monNom: string = "Aude";
  monHumeur : string = ":)";

  estCliquable : boolean = false;

  monPlaceholder : string = "Entrez un truc";
  constructor() { }

  ngOnInit(): void {
  }

  pasContent() : void {
    this.monHumeur = ":(";
  }

  toggleCliquable() : void {
    this.estCliquable = !this.estCliquable;
  }
}
