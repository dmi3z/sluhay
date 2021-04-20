import { PlayerService } from 'src/app/services/player.service';
import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner-player',
  templateUrl: './banner-player.component.html',
  styleUrls: ['./banner-player.component.scss']
})
export class BannerPlayerComponent implements OnInit {

  @Input() url: string;
  @Input() autoplay: boolean;
  @Input() controls: boolean;
  @ViewChild('player', { static: true }) public playerRef: ElementRef;

  @Input() isFullscreen: boolean;
  public isPlay = true;

  private player: HTMLVideoElement;

  constructor(private playerService: PlayerService) { }

  public ngOnInit(): void {
    this.player = this.playerRef.nativeElement as HTMLVideoElement;
    this.playerService.playUrl(this.url, this.player, this.autoplay);
  }

  // public toggleFullscreen(): void {
  //   this.isFullscreen = !this.isFullscreen;
  //   this.player.muted = !this.player.muted;
  // }

  // public openFullscreen(): void {
  //   this.isFullscreen = true;
  //   this.player.muted = false;
  // }

  // public closeFullscreen(): void {
  //   this.isFullscreen = false;
  //   this.player.muted = true;
  // }

  // public togglePlay(): void {
  //   this.isPlay = !this.isPlay;
  //   if (this.isPlay) {
  //     this.player.play();
  //   } else {
  //     this.player.pause();
  //   }
  // }

  public onVolumeChange(value: number): void {
    this.player.volume = value / 100;
  }

}
