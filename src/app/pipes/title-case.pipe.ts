import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    return value[0].toUpperCase() + value.substr(1).toLocaleLowerCase()
  }

}
