import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { PlayerApiService } from '../services/player-api.service';

@Directive({
  selector: '[appCheckUsernameValidator]',
  providers : [{provide: NG_ASYNC_VALIDATORS, useExisting : CheckUsernameValidatorDirective, multi: true}]
})
export class CheckUsernameValidatorDirective implements AsyncValidator{

  constructor(
    private _playerApi : PlayerApiService
  ) { }

  validate(control: AbstractControl):Observable<ValidationErrors | null> {
    return this._playerApi.checkUsername(control.value).pipe(
      map(data => {
        if(data) return {'checkusername' : {reason : 'This username is allready saved'}};
        else return null;
      })
    )
  }

}
