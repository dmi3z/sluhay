import { ContentCard } from './../../interfaces/content-card.interface';
import { Component, Input, OnInit } from '@angular/core';
import { SIDE } from 'src/app/contsants/side.enum';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() public content: ContentCard;
  @Input() public side: SIDE = SIDE.LEFT;
  public genreLogo: string;
  public sides = SIDE;

  public ngOnInit(): void {
    this.genreLogo = this.getGenreLogo();
  }

  private getGenreLogo(): string {
    const logoUrl = `assets/logo_${this.content.genre}.png`;
    return logoUrl;
  }

}
