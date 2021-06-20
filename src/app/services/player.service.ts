import { Injectable } from '@angular/core';
import * as Hls from 'hls.js';
import { LoadingService } from './loading.service';

@Injectable({ providedIn: 'root' })
export class PlayerService {

  constructor(private loadingService: LoadingService) { }

  public playUrl(url: string, videoTag: HTMLVideoElement, autoplay = true): void {
    // const url = this.parseStreamUrl(rawUrl);
    const isHlsSupport: boolean = Hls.isSupported();
    if (isHlsSupport) {
      this.hlsPlayer(url, videoTag, autoplay);
    } else {
      this.standartPlayer(url, videoTag, autoplay);
    }
  }

  private standartPlayer(url: string, videoTag: HTMLVideoElement, autoplay: boolean): void {
    this.loadingService.addLoader();
    videoTag.src = url;
    videoTag.muted = false;
    videoTag.onloadedmetadata = () => {
      this.loadingService.removeLoader();
      if (autoplay) {
        videoTag.muted = true;
        setTimeout(() => {
          videoTag.play();
        }, 500);
      }
    };
  }

  private hlsPlayer(url: string, videoTag: HTMLVideoElement, autoplay: boolean): void {
    this.loadingService.addLoader();
    // videoTag.poster = null;
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(videoTag);
    videoTag.muted = false;
    videoTag.onloadedmetadata = () => {
      this.loadingService.removeLoader();
      if (autoplay) {
        videoTag.muted = true;
        setTimeout(() => {
          videoTag.play();
        }, 500);
      }
    };
  }

  // private parseStreamUrl(url: string): string {
  //   if (url.includes('https')) {
  //     return url;
  //   } else {
  //     let new_url = url.replace('http', 'https');
  //     new_url = new_url.replace(':82', '');
  //     return new_url;
  //   }
  // }

}
