import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-sound-range',
  templateUrl: './sound-range.component.html',
  styleUrls: ['./sound-range.component.scss']
})
export class SoundRangeComponent implements OnInit {

  @Input() isWhite: boolean;
  @Output() public changeEvent = new EventEmitter<number>();

  public options: Options = {
    floor: 0,
    ceil: 100,
    showSelectionBar: true,
    hideLimitLabels: true,
    hidePointerLabels: true,
  };

  public value = 100;

  constructor() { }

  ngOnInit(): void {
  }

  public onValueChange(): void {
    this.changeEvent.next(this.value);
  }



}
