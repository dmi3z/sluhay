import { HeaderPage } from './../interfaces/header.interface';
import { MenuItem } from '../interfaces/menu-item.interface';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 0,
    name: '.BY',
    tag: '',
    img: '../../../assets/menu-sluhay-logo.png',
    description: 'белорусская',
    addDescription: '.музыка',
  },
  {
    id: 1,
    name: '.LIVE',
    tag: 'live',
    img: '../../../assets/menu-live-logo.png',
    description: 'концерты',
    addDescription: '.лайвы',
  },
  {
    id: 2,
    name: '.ROCK',
    tag: 'rock',
    img: '../../../assets/menu-rock-logo.png',
    description: 'драйв',
    addDescription: '.смысл',
  },
  {
    id: 3,
    name: '.POP',
    tag: 'pop',
    img: '../../../assets/menu-pop-logo.png',
    description: 'популярная',
    addDescription: '.музыка',
  },

  {
    id: 4,
    name: '.EDM',
    tag: 'edm',
    img: '../../../assets/menu-edm-logo.png',
    description: 'электронная',
    addDescription: '.музыка',
  },
  {
    id: 5,
    name: '.RAP',
    tag: 'rap',
    img: '../../../assets/menu-rap-logo.png',
    description: 'мастера',
    addDescription: '.слова',
  },
  {
    id: 6,
    name: '.MOVA',
    tag: 'mova',
    img: '../../../assets/menu-mova-logo.png',
    description: 'белорусские',
    addDescription: '.песни',
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
