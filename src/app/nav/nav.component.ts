import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public menu : Link[] = [
    new Link("Accueil", "", [],true),
    new Link("Demo","/demo",[
      new Link("Démo 1 - Bindings", "/demo1"),
      new Link("Démo 2 - Pipes", "/demo2"),
      new Link("Démo 3 - Components Directives", "/demo3"),
      new Link("Démo 4 - Structurals Directives", "/demo4"),
      new Link("Démo 5 - Customs Directives", "/demo5"),
      new Link("Démo 6 - @Input() @Output()", "/demo6"),
      new Link("Démo 7 -Service", "/demo7"),
    ], true),
    new Link("Exercice",'/exercice',[
      new Link("Exercice 1 - Chonomètre",'/exo1'),
      new Link("Exercice 2 - Shopping List",'/exo2'),
      new Link("Exercice 3 - Shopping List v2",'/exo3'),
    ],true)
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
