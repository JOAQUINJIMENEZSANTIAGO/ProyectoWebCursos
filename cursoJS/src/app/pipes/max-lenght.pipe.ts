import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLenght'
})
export class MaxLenghtPipe implements PipeTransform {

  transform(value: string, length: number = value.length, split: string = ' '): string {
    if (value.length > length) {
      return value.split(split).slice(20, length).join(split) + '...';
    }
    return value;
  }

}
