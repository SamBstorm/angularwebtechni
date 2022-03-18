import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/iuser';

const KEY : string ='inscription';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  public saveUser(newUser : IUser){
    localStorage.setItem(KEY, JSON.stringify(newUser));
  }

  public deleteUser(){
    localStorage.removeItem(KEY);
  }

  public getUser() : IUser{
    let user : string | null = localStorage.getItem(KEY);
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
