import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @ViewChild('video', { static: true }) videoRef: ElementRef;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playBanner();
  }

  private playBanner(): void {
    const video = this.videoRef.nativeElement as HTMLVideoElement;
    video.muted = true;
    this.playerService.playUrl('http://persik.by/stream/3502/32/10970.m3u8', video);
  }

}
