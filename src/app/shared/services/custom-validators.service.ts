import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor() { }

  public minAge(age : number): ValidatorFn | null{
    return (control : AbstractControl) : ValidationErrors | null =>{
      if(control.value == null) return null;
      let controldate : number = new Date(control.value).getTime();
      let today : number = Date.now();
      let dif : number = Math.abs(new Date(today - controldate).getFullYear() - 1970);
      if(dif < age) return {'minage':{reason : 'Too young...'}}; 
      return null;
    }
  }
}
