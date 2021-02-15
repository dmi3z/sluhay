import { ContentCard } from './../../interfaces/content-card.interface';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SIDE } from 'src/app/contsants/side.enum';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() public content: ContentCard;
  @Input() public side: SIDE = SIDE.LEFT;
  @ViewChild('player', { static: true }) public playerRef: ElementRef;
  public genreLogo: string;
  public sides = SIDE;

  constructor(private playerService: PlayerService) { }

  public ngOnInit(): void {
    this.genreLogo = this.getGenreLogo();
    const player = this.playerRef.nativeElement as HTMLVideoElement;
    this.playerService.playUrl(this.content.url, player, false);
  }

  private getGenreLogo(): string {
    const logoUrl = `assets/logo_${this.content.genre}.png`;
    return logoUrl;
  }

}
