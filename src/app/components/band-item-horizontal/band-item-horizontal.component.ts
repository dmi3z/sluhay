import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DTOArtistInfo } from 'src/app/interfaces/artists.dto.interfaces';

@Component({
  selector: 'app-band-item-horizontal',
  templateUrl: './band-item-horizontal.component.html',
  styleUrls: ['./band-item-horizontal.component.scss']
})
export class BandItemHorizontalComponent implements OnInit {
  @Input() public dimension: number;
  @Input() public band: DTOArtistInfo;
  @Input() public index: number;
  @Output() public selectEvent = new EventEmitter<DTOArtistInfo>();

  constructor() { }

  ngOnInit(): void {
  }

  public selectBand(): void {
    this.selectEvent.next(this.band);
  }

}
