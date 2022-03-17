import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFan } from 'src/app/models/ifan';
import { CustomValidatorsService } from 'src/app/shared/services/custom-validators.service';
import { FanService } from '../../services/fan.service';

@Component({
  selector: 'app-edit-fan',
  templateUrl: './edit-fan.component.html',
  styleUrls: ['./edit-fan.component.scss']
})
export class EditFanComponent implements OnInit {
  
  public editFanForm! : FormGroup;
  public fan! : IFan;

  constructor(
    private _fb : FormBuilder,
    private _valid : CustomValidatorsService,
    private _fan : FanService,
    private _router : Router,
    private _activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    let id = this._activatedRoute.snapshot.params['id'];
    this.fan = this._fan.get(id);
    this.editFanForm = this._fb.group({
      name : [this.fan.name, [Validators.required]],
      birthdate : [this.fan.birthdate.toISOString().substring(0,10), [Validators.required, this._valid.minAge(13)]],
      series : this._fb.array([])   //On peut remplir avec un tableau de données, mais nous n'aurons pas le Validators.
    });
    this.fan.series.forEach(s => this.addNewSerie(s)) //On remplit le tableau à l'aide d'une boucle qui appelle la fonction créant le formControl avec un validator adéquat.
  }

  public getSeries() : FormArray{
    return this.editFanForm.controls['series'] as FormArray;
  }

  public addNewSerie(value:string|null = null){
    this.getSeries().push(new FormControl(value,[Validators.required]));
  }

  public removeSerie(index : number){
    this.getSeries().removeAt(index);
  }

  public onSubmit(){
    if(!this.editFanForm.valid)throw new Error("Invalid form...");
    this.fan.name = this.editFanForm.value.name.trim();
    this.fan.birthdate = new Date(this.editFanForm.value.birthdate);
    this.fan.series = this.getSeries().controls.map(s => s.value.trim());
    this._fan.update(this.fan.id,this.fan);
    
    this._router.navigateByUrl('/exercice/exo4/details/'+this.fan.id);
  }

}
