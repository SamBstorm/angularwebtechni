import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoRoutingModule } from './demo/demo-routing.module';
import { ExerciceRoutingModule } from './exercice/exercice-routing.module';
import { NavComponent } from './nav/nav.component';
import { ConvertSecondsPipe } from './pipes/convert-seconds.pipe';
import { SharedModule } from './shared/shared.module';
import { AccueilComponent } from './accueil/accueil.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AccueilComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoRoutingModule,
    ExerciceRoutingModule,
    SharedModule
  ],
  exports : [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
