import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';

// @Pipe({
//   name: 'svDate'
// })
// export class MomentPipe implements PipeTransform {
//
//   transform(value: string, formatFrom: string, formatTo: string = 'DD.MM.YYYY'): string {
//     return moment(value, formatFrom).format(formatTo);
//   }
//
// }

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
