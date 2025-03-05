import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTime',
})
export class TimerPipe implements PipeTransform {
  transform(total: number, ...args: unknown[]): string {
    let h = Math.floor(total / 3600000).toString().padStart(2, '0');
    let m = Math.floor(((total / 60000) % 60)).toString().padStart(2, '0');
    let s = Math.floor(((total / 1000) % 60)).toString().padStart(2, '0') ;
    let ms = (total % 1000).toString().padStart(3, '0');

    // return h + ':' + m + ':' + s + ':' + ms;
    return `${h}:${m}:${s}:${ms}`;
  }
}
