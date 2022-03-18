import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/iuser';

const KEY : string ='inscription';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  public saveUser(newUser : IUser){
    sessionStorage.setItem(KEY, JSON.stringify(newUser));
  }

  public deleteUser(){
    sessionStorage.removeItem(KEY);
  }

  public getUser() : IUser{
    let user : string | null = sessionStorage.getItem(KEY);
    if(user === null) throw new Error("No user saved.");
    return JSON.parse(user);
  }

  public updateUser(newUser : IUser){
    try {
      this.getUser()
    } catch (error) {
      throw error;
    }
    this.saveUser(newUser);
  }
}
