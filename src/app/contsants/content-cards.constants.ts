import { ContentCard } from './../interfaces/content-card.interface';
import { GENRES } from './genres.enum';

export const CONTENT_CARDS: ContentCard[] = [
  {
    genre: GENRES.RAP,
    text: 'концерты и лайвы',
    url: 'assets/stub.jpg'
  },
  {
    genre: GENRES.ROCK,
    text: 'драйв/смысл',
    url: 'assets/stub.jpg'
  },
  {
    genre: GENRES.POP,
    text: 'популярная музыка',
    url: 'assets/stub.jpg'
  }
];
