import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DemoComponent } from './demo/demo.component';


const routes: Routes = [
  {path:'' , component: AccueilComponent},
  {path : "demo", component : DemoComponent, loadChildren : () => import("./demo/demo.module").then( m => m.DemoModule)},
  {path : "exercice", loadChildren : () => import('./exercice/exercice.module').then(m => m.ExerciceModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
