import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      name : [null,[Validators.required]],
      firstname : [null,[Validators.required]],
      birthdate : [null,[Validators.required]],
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

}
