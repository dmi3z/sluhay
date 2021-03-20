import { ContentCard } from './../interfaces/content-card.interface';
import { GENRES } from './genres.enum';

export const CONTENT_CARDS: ContentCard[] = [
  {
    genre: GENRES.CHANNEL,
    text: 'белорусская музыка',
    url: 'http://93.189.224.26/live/Ch045pub/index.m3u8'
  },
  {
    genre: GENRES.LIVE,
    text: 'концерты. лайвы',
    url: 'http://93.189.224.26/live/Ch173pub/index.m3u8'
  },
  {
    genre: GENRES.POP,
    text: 'популярная. музыка',
    url: 'http://93.189.224.26/live/Ch066pub/index.m3u8'
  },
  {
    genre: GENRES.ROCK,
    text: 'драйв. смысл',
    url: 'http://93.189.224.26/live/Ch114pub/index.m3u8'
  },
  {
    genre: GENRES.EDM,
    text: 'электронная. музыка',
    url: 'http://93.189.224.26/live/Ch091pub/index.m3u8'
  },
  {
    genre: GENRES.RAP,
    text: 'мастера. слова',
    url: 'http://93.189.224.26/live/Ch107pub/index.m3u8'
  }
];
