import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-play-pipe',
  templateUrl: './play-pipe.component.html',
  styleUrls: ['./play-pipe.component.css']
})
export class PlayPipeComponent implements OnInit {

  birthday = new Date(1988, 3, 15);
  toggle = true;
  selectFormat = 'short';
  @ViewChild('s', {static: false}) sRef: ElementRef; 

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  constructor() { }

  onChange(sel: HTMLInputElement) {
    this.selectFormat = sel.value;
  }

  ngOnInit() {
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  /**
   * The pipe with system defined filter
   * The pipe filter and parameters -- String and Component Property
   */

}