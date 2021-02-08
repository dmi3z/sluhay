import { SIDE } from './contsants/side.enum';
import { CONTENT_CARDS } from './contsants/content-cards.constants';
import { ContentCard } from './interfaces/content-card.interface';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Genre } from './interfaces/genre.interface';
import { GENRES } from './contsants/genres.enum';
import { DataService } from './services/data.service';
import { switchMap, map, take } from 'rxjs/operators';
import { DTOArtistInfo } from './interfaces/artists.dto.interfaces';
import { forkJoin, Observable } from 'rxjs';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('video', { static: true }) videoRef: ElementRef;
  public contentCards: ContentCard[] = CONTENT_CARDS;
  public sides = SIDE;
  public genres: Genre[] = [];
  public allBands: DTOArtistInfo[] = [];
  public filteredBands: DTOArtistInfo[] = [];
  public activeGenreId = 1;

  constructor(private dataService: DataService, private playerService: PlayerService) {}

  public ngOnInit(): void {
    this.genres = this.getGenres();
    const allData$ = this.genres.slice(1)
      .map(({ id }) => this.getArtistsInfo(id));
    forkJoin(allData$).pipe(map((data) => data.reduce((accum, item) => accum.concat(...item), [])),take(1))
      .subscribe((data) => {
        this.allBands = data;
        this.filteredBands = data;
      });

    this.playBanner();
  }

  public onGenreChange(genreId): void {
    this.activeGenreId = genreId;
    if (genreId !== 1) {
      this.filteredBands = this.allBands.filter((item) =>
        item.genres.includes(genreId)
      );
    } else {
      this.filteredBands = this.allBands;
    }
  }

  private getArtistsInfo(id: number): Observable<DTOArtistInfo[]> {
    return this.dataService.getArtistsIds(id).pipe(
      switchMap((result) => this.dataService.getArtistsInfo(result)),
      map((data) =>
        data.map((item) => {
          const genreId = item.genres[0];
          const genre = this.genres.find((g) => g.id === genreId);
          return { ...item, genre };
        })
      ),
      take(1)
    );
  }

  private playBanner(): void {
    const video = this.videoRef.nativeElement as HTMLVideoElement;
    video.muted = true;
    this.playerService.playUrl('https://app.viloud.tv/hls/channel/3b04a550b716860f89c4bd0a7bea3d1f.m3u8', video);
  }

  private getGenres(): Genre[] {
    const genres: Genre[] = [
      {
        id: 1,
        value: GENRES.ALL,
        text: 'ВСЕ ЖАНРЫ',
      },
      {
        id: 1380,
        value: GENRES.EDM,
        text: 'EDM',
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
        id: 1381,
        value: GENRES.RAP,
        text: 'Rap',
      },
    ];

    return genres;
  }
}