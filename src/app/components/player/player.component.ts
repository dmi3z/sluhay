import { PlayerService } from './../../services/player.service';
import { Component, Input, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() url: string;
  @Input() autoplay: boolean;
  @Input() controls: boolean;
  @ViewChild('player', { static: true }) public playerRef: ElementRef;

  @Input() isFullscreen: boolean;
  public isPlay: boolean;

  private player: HTMLVideoElement;

  constructor(private playerService: PlayerService) { }

  public ngOnInit(): void {
    this.player = this.playerRef.nativeElement as HTMLVideoElement;
    this.playerService.playUrl(this.url, this.player, this.autoplay);
  }

  public toggleFullscreen(): void {
    this.isFullscreen = !this.isFullscreen;
  }

  public togglePlay(): void {
    this.isPlay = !this.isPlay;
    if (this.isPlay) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

}
