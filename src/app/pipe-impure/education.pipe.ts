import { Pipe, PipeTransform } from '@angular/core';
import { Profile } from '../pipe-impure/profile';

@Pipe({
  name: 'education'
})
export class EducationPipe implements PipeTransform {
  transform(profile: Profile[], name: string) {
    console.log(profile);
    return profile.education === name? profile.name: null;
  }
}