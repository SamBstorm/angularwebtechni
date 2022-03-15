import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  public username : string ="";
  public isLogged : boolean = false;

  constructor(private _userService : UserService) { }

  ngOnInit(): void {
    this.username = this._userService.username ?? "";
    this.isLogged = this._userService.isLogged();
  }

  public login(){
    this._userService.login(this.username);
    this.isLogged = this._userService.isLogged();
  }
  public logout(){
    this.username = "";
    this._userService.logout();
    this.isLogged = this._userService.isLogged();
  }

}
