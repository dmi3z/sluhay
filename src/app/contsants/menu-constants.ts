import { HeaderPage } from './../interfaces/header.interface';
import { MenuItem } from '../interfaces/menu-item.interface';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 0,
    name: '.LIVE',
    tag: 'live',
    img: '../../../assets/menu-live-logo.png',
    description: 'концерты',
    addDescription: '.лайвы',
  },
  {
    id: 1,
    name: '.ROCK',
    tag: 'rock',
    img: '../../../assets/menu-rock-logo.png',
    description: 'драйв',
    addDescription: '.смысл',
  },
  {
    id: 2,
    name: '.POP',
    tag: 'pop',
    img: '../../../assets/menu-pop-logo.png',
    description: 'популярная',
    addDescription: '.музыка',
  },

  {
    id: 3,
    name: '.RAP',
    tag: 'rap',
    img: '../../../assets/menu-rap-logo.png',
    description: 'мастера',
    addDescription: '.слова',
  },
];

export const MENU_PAGES: HeaderPage[] = [
  {
    id: 0,
    name: 'главная',
    url: '/main',
  },
  {
    id: 1,
    name: 'ротация',
    url: '/rotation',
  },
  {
    id: 2,
    name: 'вознаграждение',
    url: '/reward',
  },
];
