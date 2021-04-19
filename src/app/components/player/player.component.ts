import { PlayerService } from './../../services/player.service';
import { Component, Input, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  public static playerRefs: HTMLVideoElement[] = [];
  @Input() url: string;
  @Input() autoplay: boolean;
  @Input() controls: boolean;
  @Input() poster: string;
  @ViewChild('player', { static: true }) public playerRef: ElementRef;
  @Input() isFullscreen: boolean;

  public isPlay: boolean;

  private player: HTMLVideoElement;

  constructor(private playerService: PlayerService) { }

  public ngOnInit(): void {
    this.player = this.playerRef.nativeElement as HTMLVideoElement;
    PlayerComponent.playerRefs.push(this.player);
    this.playerService.playUrl(this.url, this.player, this.autoplay);

    this.player.onpause = () => this.isPlay = false;
    this.player.onplay = () => this.isPlay = true;
  }

  public toggleFullscreen(): void {
    this.isFullscreen = !this.isFullscreen;
  }

  public playVideo(): void {
    this.stopAllPlayers();
    this.player.play();
  }

  public pauseVideo(): void {
    this.player.pause();
  }

  public onVolumeChange(value: number): void {
    this.player.volume = (value / 100);
  }

  private stopAllPlayers(): void {
    PlayerComponent.playerRefs.forEach(item => {
      if (!item.paused) {
        item.pause();
      }
    });
  }

}
