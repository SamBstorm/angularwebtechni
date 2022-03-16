import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';
import { Exo1Component } from './exo1/exo1.component';
import { SharedModule } from '../shared/shared.module';
import { Exo2ListComponent } from './exo2-list/exo2-list.component';
import { Exo2AddFormComponent } from './exo2-add-form/exo2-add-form.component';
import { Exo2ListItemComponent } from './exo2-list-item/exo2-list-item.component';
import { Exo3Component } from './exo3/exo3.component';
import { Exo3addArticleComponent } from './exo3add-article/exo3add-article.component';


@NgModule({
  declarations: [
    ExerciceComponent,
    Exo1Component,
    Exo2ListComponent,
    Exo2AddFormComponent,
    Exo2ListItemComponent,
    Exo3Component,
    Exo3addArticleComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ]
})
export class ExerciceModule { }
