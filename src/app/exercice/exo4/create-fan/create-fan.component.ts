import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFan } from 'src/app/models/ifan';
import { CustomValidatorsService } from 'src/app/shared/services/custom-validators.service';
import { FanService } from '../../services/fan.service';

@Component({
  selector: 'app-create-fan',
  templateUrl: './create-fan.component.html',
  styleUrls: ['./create-fan.component.scss']
})
export class CreateFanComponent implements OnInit {

  public createFanForm! : FormGroup;
  constructor(
    private _fb : FormBuilder,
    private _valid : CustomValidatorsService,
    private _fan : FanService,
    private _router : Router
    ) { }

  ngOnInit(): void {
    this.createFanForm = this._fb.group({
      name : [null, [Validators.required]],
      birthdate : [null, [Validators.required, this._valid.minAge(13)]],
      series : this._fb.array([])
    });
  }

  public getSeries() : FormArray{
    return this.createFanForm.controls['series'] as FormArray;
  }

  public addNewSerie(){
    this.getSeries().push(new FormControl(null,[Validators.required]));
  }

  public removeSerie(index : number){
    this.getSeries().removeAt(index);
  }

  public onSubmit(){
    if(!this.createFanForm.valid)throw new Error("Invalid form...");
    let fan : IFan = {
      id : 0,
      name : this.createFanForm.value.name.trim(),
      birthdate : new Date(this.createFanForm.value.birthdate),
      series : this.getSeries().controls.map(s => s.value.trim())
    };
    let id : number = this._fan.create(fan);
    console.log('/exercice/exo4/details/'+id);
    
    this._router.navigateByUrl('/exercice/exo4/details/'+id);
  }
}
