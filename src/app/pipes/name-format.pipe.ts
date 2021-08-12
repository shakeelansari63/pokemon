import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFormat'
})
export class NameFormatPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/-/g, ' ')
  }

}
