import { ContentCard } from './../../interfaces/content-card.interface';
import { Component, Input, OnInit } from '@angular/core';
import { SIDE } from 'src/app/contsants/side.enum';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

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
  public poster: string;

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.genreLogo = this.getGenreLogo();
    this.poster = this.getPoster();
  }

  private getGenreLogo(): string {
    const logoUrl = `assets/logo_${this.content.genre}.png`;
    return logoUrl;
  }

  private getPoster(): string {
    return this.dataService.getChannelFrame(this.content.id);
  }

}
