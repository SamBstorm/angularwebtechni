import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerApiService } from 'src/app/shared/services/player-api.service';

@Component({
  selector: 'app-demo13-player-register',
  templateUrl: './demo13-player-register.component.html',
  styleUrls: ['./demo13-player-register.component.scss']
})
export class Demo13PlayerRegisterComponent implements OnInit {

  public playerForm! : FormGroup;
  constructor(
    private _fb : FormBuilder,
    private _playerApi : PlayerApiService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.playerForm = this._fb.group({
      username : [null, [Validators.required]]
    })
  }

  public onSubmit(){
    if(!this.playerForm.valid)return;
    this._playerApi.post(
      {id : 0, 
        username : this.playerForm.value.username}
        ).subscribe(
          {
            next : data => this._router.navigateByUrl('/demo/demo13/details/'+data.id)
          }
        )
  }

}
