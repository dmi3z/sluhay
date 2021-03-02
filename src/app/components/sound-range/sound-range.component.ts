import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-sound-range',
  templateUrl: './sound-range.component.html',
  styleUrls: ['./sound-range.component.scss']
})
export class SoundRangeComponent implements OnInit {

  public options: Options = {
    floor: 0,
    ceil: 100
  };

  public value = 20;

  constructor() { }

  ngOnInit(): void {
  }



}
