import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceArray',
})
export class SlicePipe implements PipeTransform {
  transform(arr: Array<any>, nb: number): Array<any> {
    return [...arr].slice(0, nb);
  }
}
