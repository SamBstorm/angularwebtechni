import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/iuser';
import { CustomValidatorsService } from 'src/app/shared/services/custom-validators.service';
import { LocalService } from 'src/app/shared/services/local.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-exo5',
  templateUrl: './exo5.component.html',
  styleUrls: ['./exo5.component.scss']
})
export class Exo5Component implements OnInit {

  public inscriptionForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _session: SessionService,
    private _local: LocalService,
    private _validators: CustomValidatorsService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    // try {
    // let user : IUser = this._session.getUser();
    // this.inscriptionForm = this._fb.group({
    //   lastname : [user.lastname,[Validators.required]],
    //   firstname : [user.firstname,[Validators.required]],
    //   birthdate : [new Date(user.birthdate),[Validators.required]],
    //   email : [user.email,[Validators.required]],
    //   password : [null,[Validators.required]],
    //   checkpwd : [null,[Validators.required]]
    // }) 
    // } catch (error) {
    //   this.inscriptionForm = this._fb.group({
    //     lastname : [null,[Validators.required]],
    //     firstname : [null,[Validators.required]],
    //     birthdate : [null,[Validators.required]],
    //     email : [null,[Validators.required]],
    //     password : [null,[Validators.required]],
    //     checkpwd : [null,[Validators.required]]
    //   }) 
    // }

    let user: IUser | null;
    try {
      user = this._session.getUser();
    } catch (error) {
      user = null;
    }
    this.inscriptionForm = this._fb.group({
      lastname: [user?.lastname, [Validators.required]],
      firstname: [user?.firstname, [Validators.required]],
      birthdate: [user?.birthdate, [Validators.required]],
      email: [user?.email, [Validators.required]],
      password: [null, [Validators.required]],
      checkpwd: [null, [Validators.required]]
    },
      {
        validators: [this._validators.compareValues('password','checkpwd')],
        updateOn: 'blur'
      })
  }

  public onSubmit() {
    if(!this.inscriptionForm.valid) return;
    let user: IUser = {
      firstname: this.inscriptionForm.controls?.['firstname'].value ?? "",
      lastname: this.inscriptionForm.controls?.['lastname'].value ?? "",
      birthdate: this.inscriptionForm.controls?.['birthdate'].value ?? "",
      email: this.inscriptionForm.controls?.['email'].value ?? "",
      password: ""
    }
    this._local.saveUser(user);
    this._router.navigateByUrl('/');
  }

  public onChange() {
    let user: IUser = {
      firstname: this.inscriptionForm.controls?.['firstname'].value ?? "",
      lastname: this.inscriptionForm.controls?.['lastname'].value ?? "",
      birthdate: this.inscriptionForm.controls?.['birthdate'].value ?? "",
      email: this.inscriptionForm.controls?.['email'].value ?? "",
      password: ""
    }
    this._session.saveUser(user);
  }

  //Seulement pour un seul control...
  // public compareValues(controlName : string ) : ValidatorFn | null{
  //   return (control : AbstractControl) : ValidationErrors | null => {
  //     if(!this.inscriptionForm) return null;
  //     if(control.value != this.inscriptionForm.controls?.[controlName].value)
  //       return {'comparevalues':{
  //         reason : 'Not the same values'
  //       }};

  //     return null;
  //   }
  // }

  

}
