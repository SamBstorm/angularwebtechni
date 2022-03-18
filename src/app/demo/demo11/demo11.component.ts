import { Component, OnInit } from '@angular/core';
import { IFan } from 'src/app/models/ifan';

const KEY: string = "demo11";

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html',
  styleUrls: ['./demo11.component.scss']
})
export class Demo11Component implements OnInit {

  public localValue: string = "";
  public sessionValue: string = "";
  public fan? : IFan; 
  public fanInStorage! : string | null;

  constructor() { }

  ngOnInit(): void {
    this.localValue = localStorage.getItem(KEY) ?? "";
    this.sessionValue = sessionStorage.getItem(KEY) ?? "";
    let fanASauver : IFan = {
      id : 1, 
      name: "Samuel", 
      birthdate: new Date(1987,9,27), 
      series:[
        "Chips",
        "K2000",
        "Dallas"
      ]};
    localStorage.setItem('fan',JSON.stringify(fanASauver));
    this.fanInStorage = localStorage.getItem('fan');
    this.fan = JSON.parse(localStorage.getItem('fan')??"");
  }

  public saveIntoLocal() {
    localStorage.setItem(KEY, this.localValue);
  }

  public saveIntoSession() {
    sessionStorage.setItem(KEY, this.sessionValue);
  }

  public deleteIntoLocal(){
    localStorage.removeItem(KEY);
  }

  public deleteIntoSession(){
    sessionStorage.removeItem(KEY);
  }
}
