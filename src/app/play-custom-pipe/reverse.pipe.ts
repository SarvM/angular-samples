import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  constructor() {}
  transform(input: string): string {
    if(input === undefined) return input;
    return Array.from(input).reverse().join('');
  }
}