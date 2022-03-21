import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceComponent } from './exercice.component';
import { Exo1Component } from './exo1/exo1.component';
import { Exo2ListComponent } from './exo2-list/exo2-list.component';
import { Exo3Component } from './exo3/exo3.component';
import { CreateFanComponent } from './exo4/create-fan/create-fan.component';
import { EditFanComponent } from './exo4/edit-fan/edit-fan.component';
import { FanDetailsComponent } from './exo4/fan-details/fan-details.component';
import { FanListComponent } from './exo4/fan-list/fan-list.component';
import { Exo5Component } from './exo5/exo5.component';
import { LoginFormComponent } from './exo6/login-form/login-form.component';
import { LogoutConfirmComponent } from './exo6/logout-confirm/logout-confirm.component';
import { FanChildrenGuard } from './guards/fan-children.guard';
import { InscriptionGuard } from './guards/inscription.guard';

const routes: Routes = [
  { path : "exo1", component : Exo1Component},
  { path : "exo2", component : Exo2ListComponent},
  { path : "exo3", component : Exo3Component},
  { path : "exo4", component : FanListComponent, children : [
    { path : "new", component : CreateFanComponent},
    { path : "details/:id", component : FanDetailsComponent},
    { path : "edit/:id", component : EditFanComponent},
  ], canActivateChild:[FanChildrenGuard]},
  { path : "exo4/list", redirectTo: 'exo4'},
  
  { path : "exo5", component : Exo5Component, canActivate : [InscriptionGuard]},
  { path : "exo6Login", component : LoginFormComponent},
  { path : "exo6Logout", component : LogoutConfirmComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
