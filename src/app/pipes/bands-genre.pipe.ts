import { Pipe, PipeTransform } from '@angular/core';
import { DTOArtistInfo } from '../interfaces/artists.dto.interfaces';

@Pipe({
  name: 'appBandsGenrePipe'
})

export class BandsGenrePipe implements PipeTransform {
  transform(bands: DTOArtistInfo[], genreId: number): DTOArtistInfo[] {
    return bands.filter(band => band.genres.includes(genreId));
  }
}
