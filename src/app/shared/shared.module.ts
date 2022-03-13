import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from '../pipes/to-fahrenheit.pipe';
import { ConvertSecondsPipe } from '../pipes/convert-seconds.pipe';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertSecondsPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ToFahrenheitPipe,
    ConvertSecondsPipe
  ]

})
export class SharedModule { }
