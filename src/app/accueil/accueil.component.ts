import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  public username : string = "";

  constructor(private _userService : UserService) { }

  ngOnInit(): void {
    this.username = this._userService.username ?? "";
  }

}
