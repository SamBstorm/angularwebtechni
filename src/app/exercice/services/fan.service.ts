import { Injectable } from '@angular/core';
import { IFan } from 'src/app/models/ifan';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  public fans : IFan[] = [];
  private _maxId : number = this.fans.length; //0;

  constructor() { }

  public getAll():IFan[]{
    return this.fans;
  }

  public get(id : number) : IFan{
    let fan : IFan |undefined = this.fans.find(f => f.id == id);
    if(!fan) throw new Error(`No fan with id : ${id}`);
    return fan;
  }

  public create(newFan : IFan) : number{
    this._maxId++;
    newFan.id = this._maxId;
    this.fans.push(newFan);
    return this._maxId;
    //return newFan.id;
  }

  public update(id:number, newFan : IFan) : void{
    let oldFan = this.get(id);
    oldFan.name = newFan.name;
    oldFan.birthdate = newFan.birthdate;
    oldFan.series = newFan.series;
  }

  public delete(id:number):void{
    this.fans = this.fans.filter(f => f.id != id);
  }
}
