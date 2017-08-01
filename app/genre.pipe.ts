import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(value: string): string {
    if (value == "article") {
      return "Artikel / Aufsatz";
    }
    if (value == "poster") {
      return "Poster";
    }
    return null;
  }

}