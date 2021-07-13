import { ContentCard } from './../interfaces/content-card.interface';
import { GENRES } from './genres.enum';

export const CONTENT_CARDS: ContentCard[] = [
  {
    genre: GENRES.CHANNEL,
    text: 'белорусская музыка',
    url: 'https://sluhay.by/live/Ch045pub/index.m3u8',
    id: 10970,
  },
  {
    genre: GENRES.LIVE,
    text: 'концерты. лайвы',
    url: 'https://sluhay.by/live/Ch173pub/index.m3u8',
    id: 10975,
  },
  {
    genre: GENRES.POP,
    text: 'популярная. музыка',
    url: 'https://sluhay.by/live/Ch066pub/index.m3u8',
    id: 10972,
  },
  {
    genre: GENRES.ROCK,
    text: 'драйв. смысл',
    url: 'https://sluhay.by/live/Ch114pub/index.m3u8',
    id: 10971,
  },
  {
    genre: GENRES.EDM,
    text: 'электронная. музыка',
    url: 'https://sluhay.by/live/Ch091pub/index.m3u8',
    id: 10973,
  },
  {
    genre: GENRES.RAP,
    text: 'мастера. слова',
    url: 'https://sluhay.by/live/Ch107pub/index.m3u8',
    id: 10974,
  },
  {
    genre: GENRES.MOVA,
    text: 'белорусские. песни',
    url: 'http://93.189.224.26/live/Ch034pub/index.m3u8',
    id: 10976,
  },
];
