import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPkmnBase } from 'src/app/models/ipkmn-base';
import { map, Observable } from 'rxjs';
import { IPkmnList } from 'src/app/models/ipkmn-list';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private _url : string = "https://pokeapi.co/api/v2/pokemon/"
  constructor(private _http : HttpClient) { }

  public get(id : number): Observable<IPkmnBase>{
    return this._http.get<any>(this._url + id)
    .pipe(map(d => {
      return {
        id : d.id,
        name : d.name,
        types : [
          {
            id : 0,
            name : d.types[0].type.name
          },
          {
            id : 1,
            name : d.types[1].type.name
          }
        ],
        back_default:d.sprites.back_default,
        front_default:d.sprites.front_default
      }
    }));
  }

  public getAll(): Observable<IPkmnList[]>{
    let params : HttpParams = new HttpParams()
    .set('offset',0)
    .set('limit',151);
    return this._http.get<any>(this._url, {params : params})
    .pipe(
      map(
      d => d.results.map(
        p => {
            return {
              id : p.url.replace(this._url,'').replace('/',''),
              name : p.name};
        })
    ));
  }
}
