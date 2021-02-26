import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @ViewChild('video', { static: true }) videoRef: ElementRef;
  public video: any;
  public isMuted: boolean;
  public isFullscreen: boolean;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.video = this.videoRef.nativeElement as HTMLVideoElement;
    this.video.addEventListener('webkitfullscreenchange', () => {
      this.isMuted = !this.isMuted;
      this.video.muted = this.isMuted;
    });

    this.video.onfullscreenchange = () => {
      this.isMuted = !this.isMuted;
      this.video.muted = this.isMuted;
    };

    this.playBanner();
  }

  public fullscreenMode(): void {
    if (this.video.requestFullscreen) {
      this.video.requestFullscreen();
    } else if (this.video.webkitRequestFullScreen) {
      this.video.webkitRequestFullScreen();
    } else if (this.video.mozRequestFullScreen) {
      this.video.mozRequestFullScreen();
    } else if (this.video.msRequestFullScreen) {
      this.video.mozRequestFullScreen();
    }
    this.video.muted = false;
  }

  private playBanner(): void {
    this.isMuted = true;
    this.video.muted = this.isMuted;
    this.playerService.playUrl('http://persik.by/stream/3502/32/10970.m3u8', this.video);
  }

}
