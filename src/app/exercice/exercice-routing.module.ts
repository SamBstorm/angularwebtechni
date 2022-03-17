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

const routes: Routes = [
  { path : "exo1", component : Exo1Component},
  { path : "exo2", component : Exo2ListComponent},
  { path : "exo3", component : Exo3Component},
  { path : "exo4/list", component : FanListComponent},
  { path : "exo4", redirectTo: 'exo4/list'},
  { path : "exo4/new", component : CreateFanComponent},
  { path : "exo4/details/:id", component : FanDetailsComponent},
  { path : "exo4/edit/:id", component : EditFanComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
