import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCutPipe'
})
export class CutPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 4) {
      return 'by';
    }
    return value;
  }
}
