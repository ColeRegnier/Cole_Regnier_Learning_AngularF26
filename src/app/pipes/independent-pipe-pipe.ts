import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'independentPipe',
})
export class IndependentPipePipe implements PipeTransform {
  transform(value: boolean ): string {
    if (value) {
      return "Country is independent";
    }
    return "Country is NOT independent";
  }
}
