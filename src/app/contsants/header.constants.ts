import { HeaderPage } from './../interfaces/header.interface';
import { HeaderItem } from '../interfaces/header.interface';

export const HEADER_ITEMS: HeaderItem[] = [
  {
    id: 0,
    name: 'Концерты и трансляции  LIVE',
    tag: 'live',
  },
  {
    id: 1,
    name: 'rock',
    tag: 'rock',
  },
  {
    id: 2,
    name: 'pop',
    tag: 'pop',
  },
  {
    id: 3,
    name: 'edm',
    tag: 'edm',
  },
  {
    id: 4,
    name: 'rap',
    tag: 'rap',
  },
  {
    id: 5,
    name: 'музыканты',
    tag: 'musicions',
  },
  {
    id: 6,
    name: 'поддержка проекта',
    tag: 'donates',
  },
  {
    id: 7,
    name: 'подписка',
    tag: 'subscriptions',
  },
  {
    id: 8,
    name: 'компании',
    tag: 'companies',
  },
];

export const HEADER_PAGES: HeaderPage[] = [
  {
    id: 0,
    name: 'ротация',
    url: 'rotation',
  },
  {
    id: 1,
    name: 'вознаграждение',
    url: 'reward',
  },
];
