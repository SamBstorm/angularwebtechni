import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceComponent } from './exercice.component';
import { Exo1Component } from './exo1/exo1.component';
import { Exo2ListComponent } from './exo2-list/exo2-list.component';

const routes: Routes = [
  { path : "exercice", component : ExerciceComponent, children : [
    { path : "exo1", component : Exo1Component},
    { path : "exo2", component : Exo2ListComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
