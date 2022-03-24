import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, switchMap, tap } from 'rxjs';
import { IPkmnBase, IType } from 'src/app/models/ipkmn-base';
import { IPkmnList } from 'src/app/models/ipkmn-list';
import { PokeapiService } from 'src/app/shared/services/pokeapi.service';

@Component({
  selector: 'app-demo13',
  templateUrl: './demo13.component.html',
  styleUrls: ['./demo13.component.scss']
})
export class Demo13Component implements OnInit {

  public pkmn! : IPkmnBase;
  public pkmns : IPkmnList[] = [];
  public dblDmgFrm : IType[] = [];
  constructor(private _api : PokeapiService) { }

  ngOnInit(): void {
    this._api.get(1).subscribe({
      next : (data) => 
      {
        this.pkmn = data;
        this._api.getTypeDoubleDamageFrom(this.pkmn.types[0].id).subscribe(
          {
            next : data => this.dblDmgFrm = data,
            error:console.error,
            complete : () => console.log("Fini chargement dégats...")
          }
        )
      }
    });
    this._api.getAll().subscribe({
      next : datas => this.pkmns = datas
    });
  }

  public onClick(id : number){
    this._api.get(id).subscribe({
      next : (data) => {
        this.pkmn = data;
        this._api.getTypeDoubleDamageFrom(this.pkmn.types[0].id).subscribe(
          {
            next : data => this.dblDmgFrm = data,
            error:console.error,
            complete : () => console.log("Fini chargement dégats...")
          }
        )
      }
    });
  }
}
