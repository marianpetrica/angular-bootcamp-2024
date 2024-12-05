import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {

  transform(num: number | null , ...args: unknown[]): string {
    return num + "a";
  }

}
