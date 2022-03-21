import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILogin } from 'src/app/models/ilogin';
import { IUser } from 'src/app/models/iuser';

const KEY : string ='inscription';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public IsConnectedSub : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnected());
  constructor() { }

  public saveUser(newUser : ILogin|IUser){
    sessionStorage.setItem(KEY, JSON.stringify(newUser));
    this.IsConnectedSub.next(this.isConnected());
  }
  
  public deleteUser(){
    sessionStorage.removeItem(KEY);
    this.IsConnectedSub.next(this.isConnected());
  }

  public getUser() : ILogin|IUser{
    let user : string | null = sessionStorage.getItem(KEY);
    if(user === null) throw new Error("No user saved.");
    return JSON.parse(user);
  }

  public updateUser(newUser : ILogin|IUser){
    try {
      this.getUser()
    } catch (error) {
      throw error;
    }
    this.saveUser(newUser);
  }

  public isConnected() : boolean{
    try {
      this.getUser()
    } catch (error) {
      return false;
    }
      return true;
  }
}
