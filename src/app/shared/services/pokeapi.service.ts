import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPkmnBase, IType } from 'src/app/models/ipkmn-base';
import { map, Observable } from 'rxjs';
import { IPkmnList } from 'src/app/models/ipkmn-list';
import { IGetAllResult } from 'src/app/models/api/iget-all-result';
import { IGetOneResult, ITypeDamageResult, ITypeResult } from 'src/app/models/api/iget-one-result';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private _url : string = "https://pokeapi.co/api/v2/pokemon/"
  private _urlType : string = "https://pokeapi.co/api/v2/type/"
  constructor(private _http : HttpClient) { }

  public get(id : number): Observable<IPkmnBase>{
    return this._http.get<IGetOneResult>(this._url + id)
    .pipe(map(this._getOneResultToPkmnBase));
  }

  public getAll(): Observable<IPkmnList[]>{
    let params : HttpParams = new HttpParams()
    .set('offset',0)
    .set('limit',151);
    return this._http.get<IGetAllResult>(this._url, {params : params})
    .pipe(map(this._getAllResultToPkmnListArray));    //Signature de la fonction identique à la lambda attendue.
    // .pipe(map(data =>this._getAllResultToPkmnListArray(data))); 
  }

  public getType(id:number):Observable<IType>{
    return this._http.get<ITypeResult>(this._urlType+id)
    .pipe(map(this._getTypeResultToType));
  }

  public getTypeDoubleDamageFrom(id : number):Observable<IType[]>{
    return this._http.get<ITypeDamageResult>(this._urlType+id)
    .pipe(map(this._getTypeResultToDoubleDamageFrom));
  }

  private _getAllResultToPkmnListArray(data : IGetAllResult) : IPkmnList[]{
    let result : IPkmnList[] = []
    data.results.forEach(
      pkmnUrl =>
          result.push({
            id: parseInt(pkmnUrl.url.split('/').reverse()[1]), // OU bien parseInt(p.url.replace(this._url,'').replace('/',''))
            name:pkmnUrl.name})
    )
    return result;
  }

  private _getOneResultToPkmnBase(data : IGetOneResult) : IPkmnBase{
    let result : IPkmnBase = {
      id : data.id,
      name : data.name,
      types : [],
      back_default:data.sprites.back_default??"",
      front_default:data.sprites.front_default??""
    };
    data.types.forEach(dt=>
      result.types.push(
        {
          id: parseInt(dt.type.url.split('/').reverse()[1]),
          name : dt.type.name
        }
      ))
    return result;
  }

  private _getTypeResultToType (data :ITypeResult) : IType{
    console.log(data);
    
    return {
      id: parseInt(data.url.split('/').reverse()[1]),
      name : data.name
    };
  }

  private _getTypeResultToDoubleDamageFrom(data : ITypeDamageResult) : IType[]{
    let dataDamage : ITypeResult[] = data.damage_relations.double_damage_from;
    console.log(dataDamage);
    let result : IType[] = dataDamage.map(this._getTypeResultToType);
    console.log(result);
    return result;
    
  }
}
