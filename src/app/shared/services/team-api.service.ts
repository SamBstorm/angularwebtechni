import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeam } from 'src/app/models/api/iteam';

@Injectable({
  providedIn: 'root'
})
export class TeamApiService {

  private _url :string = "http://localhost:3000/teams/";
  constructor(
    private _http : HttpClient
  ) { }

  public getAll() : Observable<ITeam[]>{
    return this._http.get<ITeam[]>(this._url);
  }

  public get(id : number) : Observable<ITeam>{
    return this._http.get<ITeam>(this._url+id);
  }

  public post(newTeam : ITeam) : Observable<ITeam>{
    return this._http.post<ITeam>(this._url, newTeam);
  }

  public put(id:number, newValue:ITeam) : Observable<ITeam>{
    return this._http.put<ITeam>(this._url+id, newValue);
  }

  public delete(id:number){
    return this._http.delete(this._url+id);
  }
}
