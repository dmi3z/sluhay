import { Genre } from './genre.interface';
interface DTOArtistId {
  video_id: number;
}

export interface DTOArtists {
  total: number;
  videos: DTOArtistId[];
}

export interface DTOArtistInfo {
  countries: string[];
  cover: string;
  description: string;
  genres: number[];
  genre?: Genre;
  name: string;
  video_id: number;
  year: string;
  international_name: string;
}
