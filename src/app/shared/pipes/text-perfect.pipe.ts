import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TextPerfect'
})
export class TextPerfect implements PipeTransform {

  transform(value: string): string {
    const res: string = value.length <= 95 ? value : `${value.slice(0,100)}...`;
    return res;
  }
}
