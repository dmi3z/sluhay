import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuIsOpen: boolean;
  menuText: string;
  constructor() {}

  public ngOnInit(): void {
    this.changeMenuStatus();
  }

  public changeMenuStatus(): void {
    this.menuIsOpen = !this.menuIsOpen;
    this.menuText = this.menuIsOpen ? 'закрыть меню' : 'меню';
  }
}
