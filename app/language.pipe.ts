import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: string): string {
    if (value == "de") {
      return "Deutsch";
    }
    if (value == "en") {
      return "Englisch";
    }
    return null;
  }

}