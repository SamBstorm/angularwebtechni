import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-logout-confirm',
  templateUrl: './logout-confirm.component.html',
  styleUrls: ['./logout-confirm.component.scss']
})
export class LogoutConfirmComponent implements OnInit {

  constructor(private _session : SessionService, private _router : Router) { }

  ngOnInit(): void {
  }

  public onClick(){
    this._session.deleteUser();
    this._router.navigateByUrl('/exercice/exo6Login');
  }

}
