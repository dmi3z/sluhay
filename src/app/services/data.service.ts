import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
  DTOArtistInfo,
  DTOArtists,
} from '../interfaces/artists.dto.interfaces';
import { LoadingService } from './loading.service';

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly BASE_URL = 'https://api.persik.by/v2/';

  constructor(private http: HttpClient, private loadingService: LoadingService) {}

  public getArtistsIds(genreId: number): Observable<number[]> {
    this.loadingService.addLoader();
    const params = new HttpParams()
      .set('sort', 'last')
      .set('category_id', '4')
      .set('genre_id', genreId.toString())
      .set('device', 'web-by');
    return this.http
      .get<DTOArtists>(this.BASE_URL.concat('content/videos'), { params })
      .pipe(tap(() => this.loadingService.removeLoader()), map((data) => data.videos.map((item) => item.video_id)));
  }

  public getArtistsInfo(videoIds: number[]): Observable<DTOArtistInfo[]> {
    this.loadingService.addLoader();
    let queryString = '?';
    videoIds.forEach((item, index) => {
      if (index !== videoIds.length - 1) {
        queryString += `id[]=${item}&`;
      } else {
        queryString += `id[]=${item}`;
      }
    });
    return this.http.get<{ videos: DTOArtistInfo[] }>(this.BASE_URL.concat('content/video', queryString))
      .pipe(tap(() => this.loadingService.removeLoader()), map((data) => data.videos));
  }

  public getChannelFrame(id: number): string {
    const unixTime = new Date().getTime() / 1000;
    const t = Math.round(unixTime);
    return `https://old.persik.by/utils/show-frame.php?c=${id}&t=${t}&tr=crop&w=800&h=500`;
  }
}
