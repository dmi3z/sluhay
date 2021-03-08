import { ContentCard } from './../interfaces/content-card.interface';
import { GENRES } from './genres.enum';

export const CONTENT_CARDS: ContentCard[] = [
  {
    genre: GENRES.SLUHAY,
    text: 'sluhay by',
    url: 'http://persik.by/stream/3502/32/10970.m3u'
  },
  {
    genre: GENRES.LIVE,
    text: 'концерты. лайвы',
    url: 'http://persik.by/stream/3502/32/10975.m3u8'
  },
  {
    genre: GENRES.POP,
    text: 'популярная. музыка',
    url: 'http://persik.by/stream/3502/32/10972.m3u8'
  },
  {
    genre: GENRES.ROCK,
    text: 'драйв. смысл',
    url: 'http://persik.by/stream/3502/32/10971.m3u8'
  },
  {
    genre: GENRES.EDM,
    text: 'электронная. музыка',
    url: 'http://persik.by/stream/3502/32/10973.m3u8'
  },
  {
    genre: GENRES.RAP,
    text: 'мастера. слова',
    url: 'http://persik.by/stream/3502/32/10974.m3u8'
  }
];
