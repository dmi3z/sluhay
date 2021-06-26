import { HeaderPage } from './../../interfaces/header.interface';
import { MENU_PAGES } from './../../contsants/menu-constants';
import { MenuItem } from './../../interfaces/menu-item.interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MENU_ITEMS } from 'src/app/contsants/menu-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public menuIsOpen: boolean;
  public menuBtnText: string;
  public menuItems: MenuItem[] = MENU_ITEMS;
  public menuPages: HeaderPage[] = MENU_PAGES;
  @Output() selectFragment: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.menuIsOpen = false;
    this.selectButtonName();
  }

  public changeMenuStatus(): void {
    this.menuIsOpen = !this.menuIsOpen;
    this.selectButtonName();
  }

  private selectButtonName(): void {
    this.menuBtnText = this.menuIsOpen ? 'закрыть меню' : 'меню';
  }

  public navigateToFragment(fragment: string): void {
    this.changeMenuStatus();
    this.selectFragment.next(fragment);
  }
}
