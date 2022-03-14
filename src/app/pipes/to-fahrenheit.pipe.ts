import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFahrenheit'
})
export class ToFahrenheitPipe implements PipeTransform {

  transform(value: number): number {
    // return Math.round(value * 9/5 + 32);
    return (value * 9/5 + 32);

  }

}
