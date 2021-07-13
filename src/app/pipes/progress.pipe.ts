import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appProgress',
})
export class ProgressPipe implements PipeTransform {
  private readonly MAX_COUNT = 14;
  transform(counter: number): string {
    return (
      Math.round(((this.MAX_COUNT - counter) / this.MAX_COUNT) * 100) + '%'
    );
  }
}
