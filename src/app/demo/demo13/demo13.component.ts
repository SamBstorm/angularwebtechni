import { Component, OnInit } from '@angular/core';
import { IPkmnBase } from 'src/app/models/ipkmn-base';
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
  constructor(private _api : PokeapiService) { }

  ngOnInit(): void {
    this._api.get(1).subscribe({
      next : (data) => this.pkmn = data
    });
    this._api.getAll().subscribe({
      next : datas => this.pkmns = datas
    });
  }

  public onClick(id : number){
    this._api.get(id).subscribe({
      next : (data) => this.pkmn = data
    });
  }
}
