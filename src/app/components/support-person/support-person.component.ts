import { DTOArtistInfo } from './../../interfaces/artists.dto.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-person',
  templateUrl: './support-person.component.html',
  styleUrls: ['./support-person.component.scss']
})
export class SupportPersonComponent implements OnInit {

  @Input() person: DTOArtistInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
