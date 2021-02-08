import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  DTOArtistInfo,
  DTOArtists,
} from '../interfaces/artists.dto.interfaces';

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly BASE_URL = 'https://api.persik.by/v2/';

  constructor(private http: HttpClient) {}

  public getArtistsIds(genreId: number): Observable<number[]> {
    const params = new HttpParams()
      .set('sort', 'last')
      .set('category_id', '4')
      .set('genre_id', genreId.toString())
      .set('device', 'web-by');
    return this.http
      .get<DTOArtists>(this.BASE_URL.concat('content/videos'), { params })
      .pipe(map((data) => data.videos.map((item) => item.video_id)));
  }

  public getArtistsInfo(videoIds: number[]): Observable<DTOArtistInfo[]> {
    let queryString = '?';
    videoIds.forEach((item, index) => {
      if (index !== videoIds.length - 1) {
        queryString += `id[]=${item}&`;
      } else {
        queryString += `id[]=${item}`;
      }
    });
    return this.http.get<{ videos: DTOArtistInfo[] }>(this.BASE_URL.concat('content/video', queryString))
      .pipe(map((data) => data.videos));
  }
}
