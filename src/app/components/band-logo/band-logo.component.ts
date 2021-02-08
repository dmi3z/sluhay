import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-band-logo',
  templateUrl: './band-logo.component.html',
  styleUrls: ['./band-logo.component.scss']
})
export class BandLogoComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
