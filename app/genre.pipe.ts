import { Pipe, PipeTransform } from '@angular/core';

var $ = require('jquery');

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(value: string , genres: string): string {
    // console.log(genres);
    if (genres) {
      let xml = $($.parseXML(genres));
      let cat = xml.find("category[ID='" + value + "']");
      if (cat.length > 0) {
        let text = cat.find("label[" + $.escapeSelector("xml:lang") + "='de']").attr("text");
        if (text) {
          return text;
        }
      }
    }
    return null;
  }

}