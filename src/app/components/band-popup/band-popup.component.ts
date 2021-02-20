import { DTOArtistInfo } from './../../interfaces/artists.dto.interfaces';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-band-popup',
  templateUrl: './band-popup.component.html',
  styleUrls: ['./band-popup.component.scss'],
})
export class BandPopupComponent {
  @Input() public bands: DTOArtistInfo;
  @Input() public index: number;
  @Output() public changeSlide = new EventEmitter<string>();
  @Output() public hidePopup = new EventEmitter();

  constructor() {}

  public closePopup(): void {
    this.hidePopup.next();
  }

  public nextSlide(): void {
    this.changeSlide.next('next');
  }

  public prevSlide(): void {
    this.changeSlide.next('prev');
  }
}
