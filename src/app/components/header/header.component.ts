import { Component, OnInit } from '@angular/core';
import { HeaderItem } from 'src/app/interfaces/header.interface';
import { HEADER_ITEMS } from '../../contsants/header.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerItems: HeaderItem[] = HEADER_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
