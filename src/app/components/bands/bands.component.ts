import { DTOArtistInfo } from './../../interfaces/artists.dto.interfaces';
import { Genre } from './../../interfaces/genre.interface';
import { Component, Input, OnInit, Output, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})
export class BandsComponent implements OnInit {
  @Input() public genres: Genre[] = [];
  @Input() public bands: DTOArtistInfo[] = [];
  @Input() public allBands: DTOArtistInfo[] = [];
  @Input() public selectedGenreId: number;
  @Output() changeGenre = new EventEmitter<number>();
  @ViewChild('scrollContent', { static: false }) public scrollContentRef: ElementRef;
  public isPreviewOpened: boolean;
  public previewedId: number;
  public isMobileView: boolean;
  public currentWidth: number;
  private readonly horizontalBrakeWidth = 970;

  @HostListener('window:resize', ['$event']) public onResize(event): void {
    this.currentWidth = event.target.innerWidth;
    this.isMobileView = this.currentWidth <= this.horizontalBrakeWidth;
  }

  constructor() { }

  ngOnInit(): void {
    this.currentWidth = window.innerWidth;
    this.isMobileView = this.currentWidth <= this.horizontalBrakeWidth;
  }

  public activateGenre(genreId: number): void {
    this.changeGenre.next(genreId);
    this.scrollToTop();
  }

  public openPreview(id: number): void {
    this.isPreviewOpened = true;
    this.previewedId = id;
  }

  public openPreviewHorizontal(band: DTOArtistInfo, genre: Genre): void {
    if (genre.id !== 1) {
      this.bands = this.allBands.filter(item => item.genres.includes(genre.id));
    } else {
      this.bands = this.allBands;
    }
    const index = this.bands.indexOf(band);
    this.openPreview(index);
  }

  public closePopup(): void {
    this.isPreviewOpened = false;
  }

  public changeSlide(way: string): void {
    if (way === 'next') {
      this.nextSlide();
    } else {
      this.prevSlide();
    }
  }

  private nextSlide(): void {
    if (this.bands.length - 1 > this.previewedId) {
      this.previewedId++;
    } else {
      this.previewedId = 0;
    }
  }

  private prevSlide(): void {
    if (this.previewedId > 0) {
      this.previewedId--;
    } else {
      this.previewedId = this.bands.length - 1;
    }
  }

  private scrollToTop(): void {
    const scrollContent = this.scrollContentRef.nativeElement as HTMLDivElement;
    scrollContent.scrollTo(0, 0);
  }

}
