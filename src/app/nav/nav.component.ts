import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public menu : Link[] = [
    new Link("Accueil", "",undefined, [],true),
    new Link("Demo","/demo", undefined, [
      new Link("Démo 1 - Bindings", "/demo1"),
      new Link("Démo 2 - Pipes", "/demo2"),
      new Link("Démo 3 - Components Directives", "/demo3"),
      new Link("Démo 4 - Structurals Directives", "/demo4"),
      new Link("Démo 5 - Customs Directives", "/demo5"),
      new Link("Démo 6 - @Input() @Output()", "/demo6"),
      new Link("Démo 7 - Service", "/demo7"),
      new Link("Démo 8 - Formulaires", "/demo8"),
      new Link("Démo 9 - Params routing", "/demo9/coucou"),
      new Link("Démo 9 - QueryParams routing", "/demo9/Hello",{sender :"toto"}),
      new Link("Démo 10 - Formulaire avec file", "/demo10"),
      new Link("Démo 11 - Storage", "/demo11"),
    ], true),
    new Link("Exercice",'/exercice',undefined,[
      new Link("Exercice 1 - Chonomètre",'/exo1'),
      new Link("Exercice 2 - Shopping List",'/exo2'),
      new Link("Exercice 3 - Shopping List v2",'/exo3'),
      new Link("Exercice 4 - Fan Series",'/exo4'),
    ],true)
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
