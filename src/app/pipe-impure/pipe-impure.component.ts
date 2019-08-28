import { Component, OnInit } from '@angular/core';
import { Profile } from '../pipe-impure/profile';

@Component({
  selector: 'app-pipe-impure',
  templateUrl: './pipe-impure.component.html',
  styleUrls: ['./pipe-impure.component.css']
})
export class PipeImpureComponent implements OnInit {

  profiles: Profile[] = [];

  constructor() { 
    this.profiles = [
      {name: 'John', education: 'BE'},
      {name: 'Susan', education: 'MCA'},
      {name: 'Ruby', education: 'MCA'}
    ]
  }

  ngOnInit() {
  }

  addUser(user: string){
    var profile = { name: user, education: 'MCA'};
    this.profiles.push(profile);
    console.log(this.profiles);
  }

}