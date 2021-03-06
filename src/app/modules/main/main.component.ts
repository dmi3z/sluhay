import { FragmentScrollingService } from '../../services/fragment-scrolling.service';
import { PlayerService } from 'src/app/services/player.service';
import { map, take, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../services/data.service';
import { SupportCompany } from 'src/app/interfaces/support.interface';
import { Observable, forkJoin, Subject, Subscription } from 'rxjs';
import { DTOArtistInfo } from './../../interfaces/artists.dto.interfaces';
import { Genre } from './../../interfaces/genre.interface';
import { SIDE } from 'src/app/contsants/side.enum';
import { CONTENT_CARDS } from './../../contsants/content-cards.constants';
import { ContentCard } from './../../interfaces/content-card.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SUPPORT_COMPANIES } from './constants/support-companies.constants';
import { GENRES_LIST } from './constants/genres.constants';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  public contentCards: ContentCard[] = CONTENT_CARDS;
  public sides = SIDE;
  public genres: Genre[] = GENRES_LIST;
  public allBands: DTOArtistInfo[] = [];
  public filteredBands: DTOArtistInfo[] = [];
  public supportPersons: Observable<DTOArtistInfo[]>;
  public activeGenreId = 1;
  public supportCompanies: SupportCompany[] = SUPPORT_COMPANIES;
  public isShowCompanySupportModal: boolean;
  public isShowSpasiboModal: boolean;
  public loadCounter$: Subject<number>;
  public fragmentSubscription: Subscription;

  constructor(
    private dataService: DataService,
    private fragmentScrollingService: FragmentScrollingService,
    private loadingService: LoadingService
  ) {}

  public ngOnInit(): void {
    this.loadCounter$ = this.loadingService.loadCounter$;
    const allData$ = this.genres
      .slice(1)
      .map(({ id }) => this.getArtistsInfo(id));
    forkJoin(allData$)
      .pipe(
        map((data) => data.reduce((accum, item) => accum.concat(...item), [])),
        take(1)
      )
      .subscribe((data) => {
        data.sort((a, b) => a.name.localeCompare(b.name));
        this.allBands = data;
        this.filteredBands = data;
      });
    this.fragmentSubscription =
      this.fragmentScrollingService.fragment$.subscribe((fragment) => {
        this.scrollToFragment(fragment);
      });
    this.supportPersons = this.dataService
      .getArtistsIds(1384)
      .pipe(switchMap((ids) => this.dataService.getArtistsInfo(ids)));
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

  public closeModal(): void {
    this.isShowCompanySupportModal = false;
  }

  public openModal(): void {
    this.isShowCompanySupportModal = true;
  }

  public closeSpasiboModal(): void {
    this.isShowSpasiboModal = false;
  }

  public openSpasiboModal(): void {
    this.isShowSpasiboModal = true;
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

  public scrollToFragment(fragment: string): void {
    if (fragment) {
      setTimeout(() => {
        const block = document.querySelector('#' + fragment);
        if (block) {
          block.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }

  public ngOnDestroy(): void {
    this.fragmentSubscription.unsubscribe();
    this.fragmentScrollingService.setFragment(null);
  }
}
