import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @ViewChild('video', { static: true }) videoRef: ElementRef;
  public video: HTMLVideoElement;
  public isMuted: boolean;
  public isPlay = true;
  public isFullscreen: boolean;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.video = this.videoRef.nativeElement as HTMLVideoElement;
    this.video.onfullscreenchange = (event) => {
      this.isMuted = !this.isMuted;
      this.video.muted = this.isMuted;
    };
    this.playBanner();
  }

  public fullscreenMode(): void {
    this.video.requestFullscreen();
    this.video.muted = false;
  }

  private playBanner(): void {
    this.isMuted = true;
    this.video.muted = this.isMuted;
    this.playerService.playUrl('http://persik.by/stream/3502/32/10970.m3u8', this.video);
    this.isPlay = true;
  }

}
