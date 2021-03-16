import { DTOArtistInfo } from './../../interfaces/artists.dto.interfaces';
import { Genre } from './../../interfaces/genre.interface';
import { Component, Input, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

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
  public isPreviewOpened: boolean;
  public previewedId: number;
  public isMobileView: boolean;
  public currentWidth: number;

  @HostListener('window:resize', ['$event']) public onResize(event): void {
    this.currentWidth = event.target.innerWidth;
    this.isMobileView = this.currentWidth <= 879;
  }

  constructor() { }

  ngOnInit(): void {
    this.currentWidth = window.innerWidth;
    this.isMobileView = this.currentWidth <= 879;
  }

  public activateGenre(genreId: number): void {
    this.changeGenre.next(genreId);
  }

  public openPreview(id: number): void {
    this.isPreviewOpened = true;
    this.previewedId = id;
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

}
