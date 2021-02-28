import { SupportCompany } from './../../interfaces/support.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-support-company-group',
  templateUrl: './support-company-group.component.html',
  styleUrls: ['./support-company-group.component.scss']
})
export class SupportCompanyGroupComponent {

  @Input() public supportCompanies: SupportCompany[] = [];
  @Output() openEvent = new EventEmitter();

  constructor() { }

  public openModal(): void {
    console.log(1);

    this.openEvent.next();
  }

}
