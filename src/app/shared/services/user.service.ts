import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public username? :string;
  
  constructor() { }

  public login(username : string){
    this.username = username;
  }

  public logout(){
    this.username = undefined;
  }

  public isLogged():boolean{
    return this.username != undefined;
  }
}
