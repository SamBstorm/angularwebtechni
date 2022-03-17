import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFan } from 'src/app/models/ifan';
import { FanService } from '../../services/fan.service';

@Component({
  selector: 'app-fan-list',
  templateUrl: './fan-list.component.html',
  styleUrls: ['./fan-list.component.scss']
})
export class FanListComponent implements OnInit {

  public fans : IFan[] = [];
  constructor(
    private _router : Router,
    private _fan : FanService
  ) { }

  ngOnInit(): void {
    this.fans = this._fan.getAll();
  }

  public navigateToCreate(){
    this._router.navigateByUrl('/exercice/exo4/new');
  }

  public deleteFan(id : number){
    this._fan.delete(id);
  }

}
