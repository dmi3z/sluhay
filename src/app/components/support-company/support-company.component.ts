import { Component, Input, OnInit } from '@angular/core';
import { SupportCompany } from 'src/app/interfaces/support.interface';

@Component({
  selector: 'app-support-company',
  templateUrl: './support-company.component.html',
  styleUrls: ['./support-company.component.scss']
})
export class SupportCompanyComponent implements OnInit {

  @Input() public company: SupportCompany;

  constructor() { }

  ngOnInit(): void {
  }

}
