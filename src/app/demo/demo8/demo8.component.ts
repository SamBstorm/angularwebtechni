import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {

  public inscriptionForm! : FormGroup;
  
  constructor(private _fb : FormBuilder) {

   }

  ngOnInit(): void {
    this.inscriptionForm = this._fb.group({
      name : [null,[Validators.required, Validators.maxLength(32)]],
      firstname : [null,[Validators.required, Validators.maxLength(32)]],
      birthdate : [null,[Validators.required, this.minAgeValidator(18)]],
      gender : [null,[Validators.required]],
      skills : this._fb.array([])
    });
  }

  public getSkills() : FormArray {
    return this.inscriptionForm.get('skills') as FormArray;
  }

  public addNewSkill(){
    this.getSkills().push(new FormControl(null,[Validators.required]))    
  }

  public removeSkill(index:number){
    this.getSkills().removeAt(index);
  }

  public submitInscription(){
    console.log(this.inscriptionForm);
  }

  public minAgeValidator(minAge:number):ValidatorFn|null {
    return (control : AbstractControl) : ValidationErrors |null => {
      if(!control.value) return {
        'minagevalidator':{
          reason :'No date'
        }
      }
      let date: Date = new Date(control.value);
      let year : number = date.getTime();
      let currentYear : number = Date.now();
      let diffTime : Date = new Date(currentYear - year);
      // let age = Math.abs(new Date(Date.now() - new Date(control.value).getTime()).getUTCFullYear() - 1970);
      if(Math.abs(diffTime.getUTCFullYear() - 1970) < minAge) return {
        'minagevalidator':{
          reason:'Vous être trop jeune.',
          value : control.value
        }
      }
      return null;
    }
  }
}
