import { Pipe, PipeTransform } from '@angular/core';

import moment = require('moment/moment')
var $ = require('jquery');

@Pipe({
  name: 'mirDate'
})
export class DatePipe implements PipeTransform {

  transform(value: string): string {
    return moment(value).format("D MMMM YYYY");
  }

}