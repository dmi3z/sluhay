import { GENRES } from '../contsants/genres.enum';

export interface Genre {
  id: number;
  value: GENRES;
  text: string;
}
