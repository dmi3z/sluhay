import { SupportPerson } from './../../interfaces/support.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-person',
  templateUrl: './support-person.component.html',
  styleUrls: ['./support-person.component.scss']
})
export class SupportPersonComponent implements OnInit {

  @Input() person: SupportPerson;

  constructor() { }

  ngOnInit(): void {
  }

}
