import { GENRES } from '../contsants/genres.enum';

export interface ContentCard {
  genre: GENRES;
  text: string;
  url: string;
  id: number;
}
