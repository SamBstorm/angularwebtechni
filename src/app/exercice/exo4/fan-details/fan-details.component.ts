import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFan } from 'src/app/models/ifan';
import { FanService } from '../../services/fan.service';

@Component({
  selector: 'app-fan-details',
  templateUrl: './fan-details.component.html',
  styleUrls: ['./fan-details.component.scss']
})
export class FanDetailsComponent implements OnInit {

  public fan! : IFan;

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _fan : FanService,
    private _router : Router
    ) { }

  ngOnInit(): void {
    let id : number = this._activatedRoute.snapshot.params['id'];
    try {
      this.fan = this._fan.get(id);
    } catch (error) {
      console.warn(error);
      this._router.navigateByUrl('/exercice/exo4')
    }
  }

}
