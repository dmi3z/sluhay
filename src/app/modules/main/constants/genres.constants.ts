import { GENRES } from '../../../contsants/genres.enum';
import { Genre } from './../../../interfaces/genre.interface';

export const GENRES_LIST: Genre[] = [
  {
    id: 1,
    value: GENRES.ALL,
    text: 'ВСЕ ЖАНРЫ',
  },
  {
    id: 1378,
    value: GENRES.ROCK,
    text: 'Rock',
  },
  {
    id: 1379,
    value: GENRES.POP,
    text: 'Pop',
  },
  {
    id: 1380,
    value: GENRES.EDM,
    text: 'EDM',
  },
  {
    id: 1381,
    value: GENRES.RAP,
    text: 'Rap',
  },
];
