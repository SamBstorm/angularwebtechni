import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPlayer } from 'src/app/models/api/iplayer';

@Injectable({
  providedIn: 'root'
})
export class PlayerApiService {

  private _url :string = "http://localhost:3000/players/";
  constructor(
    private _http : HttpClient
  ) { }

  public getAll() : Observable<IPlayer[]>{
    return this._http.get<IPlayer[]>(this._url);
  }

  public get(id : number) : Observable<IPlayer>{
    return this._http.get<IPlayer>(this._url+id);
  }

  public post(newPlayer : IPlayer) : Observable<IPlayer>{
    return this._http.post<IPlayer>(this._url, newPlayer);
  }

  public put(id:number, newValue:IPlayer) : Observable<IPlayer>{
    return this._http.put<IPlayer>(this._url+id, newValue);
  }

  public delete(id:number){
    return this._http.delete(this._url+id);
  }

  public checkUsername(username : string) : Observable<boolean>{
    return this._http.get<IPlayer[]>(this._url).pipe(
      map(data => data.find(d=> d.username == username) != undefined)
    );
  }
}
