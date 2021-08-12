import { Pipe, PipeTransform } from '@angular/core';
import { TitleCasePipe } from './title-case.pipe'

@Pipe({
  name: 'nameFormat'
})
export class NameFormatPipe implements PipeTransform {

  titleCase: TitleCasePipe = new TitleCasePipe()

  transform(value: string): string {
    const nameWithoutHyphen = value.replace(/-/g, ' ')

    return nameWithoutHyphen
          .split(' ')
          .map((word) => this.titleCase.transform(word))
          .join(' ')
  }

}
