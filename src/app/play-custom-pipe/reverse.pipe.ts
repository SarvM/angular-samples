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

/**
 * Pure and Impure Pipes ==> Understand Pure and Impure Functions
Pure ==> One more condition  - The input to the pipe cannot be mutable. 

The pipe has to be impure one only if it has internal state, but also if the input is mutable. 
 */