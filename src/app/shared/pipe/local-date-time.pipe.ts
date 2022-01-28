import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: string): string {
    let outputDate: moment.Moment = moment(date, "YYYY-MM-DD HH:mm:ss");
    return outputDate.format('DD-MM-YYYY HH:mm');
  }

}
