import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

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

  public compareValues(controlName1: string, controlName2: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      let form: FormGroup = formGroup as FormGroup;
      if (form.controls?.[controlName1].value != form.controls?.[controlName2].value)
        return {
          'comparevalues': {
            reason: 'Not the same values',
            control1: { name: controlName1, value: form.controls?.[controlName1].value },
            control2: { name: controlName2, value: form.controls?.[controlName2].value }
          }
        };
      return null;
    }
  }
}
