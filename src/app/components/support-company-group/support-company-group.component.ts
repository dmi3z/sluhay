import { SupportCompany } from './../../interfaces/support.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-company-group',
  templateUrl: './support-company-group.component.html',
  styleUrls: ['./support-company-group.component.scss']
})
export class SupportCompanyGroupComponent implements OnInit {

  @Input() public supportCompanies: SupportCompany[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
