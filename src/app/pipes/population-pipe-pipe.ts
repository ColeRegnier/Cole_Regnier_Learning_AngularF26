import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'populationPipe',
})
export class PopulationPipePipe implements PipeTransform {
  transform(value: number | string | null | undefined, format:string,decimal:number = 1 ): string{
    if (value == null || value == undefined || value == '') {
      return '';
    }

    const num = Number(value);
    if (format =="short"){
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(decimal) + 'B';
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(decimal) + 'M';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(decimal) + 'K';
      }
    }
    return String(num);
  }
}
