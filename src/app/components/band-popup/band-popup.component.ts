import { DTOArtistInfo } from './../../interfaces/artists.dto.interfaces';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-band-popup',
  templateUrl: './band-popup.component.html',
  styleUrls: ['./band-popup.component.scss'],
})
export class BandPopupComponent implements OnChanges {
  @Input() public bands: DTOArtistInfo;
  @Input() public index: number;
  @Output() public changeSlide = new EventEmitter<string>();
  @Output() public hidePopup = new EventEmitter();

  public descriptionText: string;

  constructor() {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.index) {
      this.descriptionText = this.getDescriptionText(this.bands[this.index].description);
    }
  }

  public closePopup(): void {
    this.hidePopup.next();
  }

  public nextSlide(): void {
    this.changeSlide.next('next');
  }

  public prevSlide(): void {
    this.changeSlide.next('prev');
  }

  private getDescriptionText(description: string): string {
    const result = description?.length > 350 ?  description.slice(0, 350) + '...' : description;
    return result;
  }
}
