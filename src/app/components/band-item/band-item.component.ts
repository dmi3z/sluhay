import { DTOArtistInfo } from './../../interfaces/artists.dto.interfaces';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-band-item',
  templateUrl: './band-item.component.html',
  styleUrls: ['./band-item.component.scss']
})
export class BandItemComponent implements OnInit {

  @Input() public band: DTOArtistInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
