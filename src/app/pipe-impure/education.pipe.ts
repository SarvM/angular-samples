import { Pipe, PipeTransform } from '@angular/core';
import { Profile } from '../pipe-impure/profile';

@Pipe({
  name: 'education',
  pure: true
})
export class EducationPipe implements PipeTransform {
  transform(profile: Profile[], name: string) {
    return profile.filter(p => p.education === name);
  }
}