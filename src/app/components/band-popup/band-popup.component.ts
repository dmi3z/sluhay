import { DTOArtistInfo } from './../../interfaces/artists.dto.interfaces';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-band-popup',
  templateUrl: './band-popup.component.html',
  styleUrls: ['./band-popup.component.scss'],
})
export class BandPopupComponent implements OnInit {
  @Input() public bands: DTOArtistInfo;
  @Input() public index: number;
  @Output() public changeSlide = new EventEmitter<string>();
  @Output() public hidePopup = new EventEmitter();

  public descriptionText: string;

  constructor() {}

  public ngOnInit(): void {
    this.descriptionText = this.getDescriptionText(this.bands[this.index].description);
  }

  public closePopup(): void {
    this.hidePopup.next();
  }

  public nextSlide(): void {
    this.changeSlide.next('next');
    this.descriptionText = this.getDescriptionText(this.bands[this.index].description);
  }

  public prevSlide(): void {
    this.changeSlide.next('prev');
    this.descriptionText = this.getDescriptionText(this.bands[this.index].description);
  }

  private getDescriptionText(description: string): string {
    const result = description?.length > 400 ?  description.slice(0, 400) + '...' : description;
    return result;
  }
}
