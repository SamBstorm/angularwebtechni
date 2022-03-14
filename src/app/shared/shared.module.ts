import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from '../pipes/to-fahrenheit.pipe';
import { ConvertSecondsPipe } from '../pipes/convert-seconds.pipe';
import { FormsModule } from '@angular/forms';
import { HighligthDirective } from './directives/highligth.directive';
import { SamEverywhereDirective } from './directives/sam-everywhere.directive';
import { ToggleInvisibleDirective } from './directives/toggle-invisible.directive';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertSecondsPipe,
    HighligthDirective,
    SamEverywhereDirective,
    ToggleInvisibleDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports : [
    ToFahrenheitPipe,
    ConvertSecondsPipe,
    FormsModule,
    HighligthDirective,
    SamEverywhereDirective,
    ToggleInvisibleDirective
  ]

})
export class SharedModule { }
