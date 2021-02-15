import { SupportPerson } from './../../interfaces/support.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-person-group',
  templateUrl: './support-person-group.component.html',
  styleUrls: ['./support-person-group.component.scss']
})
export class SupportPersonGroupComponent implements OnInit {
  @Input() public supportPersons: SupportPerson[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
