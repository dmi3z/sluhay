import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HeaderItem } from 'src/app/interfaces/header.interface';
import { HEADER_ITEMS } from '../../contsants/header.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isWhite: boolean;
  @Output() selectedFragment = new EventEmitter<string>()

  public headerItems: HeaderItem[] = HEADER_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

  public selectFragment(fragment: string): void {
    this.selectedFragment.next(fragment);
  }

}
