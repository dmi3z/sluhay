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

  constructor() { }

  ngOnInit(): void {
  }

  public activateGenre(genreId: number): void {
    this.changeGenre.next(genreId);
  }

}
