import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value:string): string {
    if (value == "published") {
      return "Veröffentlicht";
    }
    return null;
  }

}