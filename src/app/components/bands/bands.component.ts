import { DTOArtistInfo } from './../../interfaces/artists.dto.interfaces';
import { Genre } from './../../interfaces/genre.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})
export class BandsComponent implements OnInit {
  @Input() public genres: Genre[] = [];
  @Input() public bands: DTOArtistInfo[] = [];
  @Input() public selectedGenreId: number;
  @Output() changeGenre = new EventEmitter<number>();
  public isPreviewOpened: boolean;
  public previewedId: number;

  constructor() { }

  ngOnInit(): void {
  }

  public activateGenre(genreId: number): void {
    this.changeGenre.next(genreId);
  }

  public openPreview(id: number): void {
    this.isPreviewOpened = true;
    this.previewedId = id;
    console.log(this.previewedId);

  }

  public closePopup(): void {
    this.isPreviewOpened = false;
  }

  public changeSlide(way: string): void {
    console.log(way);

    if (way === 'next') {
      this.nextSlide();
    } else {
      this.prevSlide();
    }
  }

  private nextSlide(): void {
    if (this.bands.length - 1 > this.previewedId) {
      this.previewedId++;
    }
  }

  private prevSlide(): void {
    if (this.previewedId > 0) {
      this.previewedId--;
    }
  }

}
