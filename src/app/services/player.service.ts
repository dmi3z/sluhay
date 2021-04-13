import { Injectable } from '@angular/core';
import * as Hls from 'hls.js';
import { LoadingService } from './loading.service';

@Injectable({ providedIn: 'root' })
export class PlayerService {

  constructor(private loadingService: LoadingService) { }

  public playUrl(url: string, videoTag: HTMLVideoElement, autoplay = true): void {
    // if (navigator.userAgent.includes('iPhone')) {
    //   this.iPhonePlayer(url, videoTag, autoplay);
    // } else {
    //   this.standartPlayer(url, videoTag, autoplay);
    // }
    const isHlsSupport: boolean = Hls.isSupported();
    console.log('Hls support: ', isHlsSupport);
    if (isHlsSupport) {
      this.hlsPlayer(url, videoTag, autoplay);
    } else {
      this.standartPlayer(url, videoTag, autoplay);
    }
  }

  private standartPlayer(url: string, videoTag: HTMLVideoElement, autoplay: boolean): void {
    // this.loadingService.addLoader();
    videoTag.src = url;
    videoTag.muted = true;
    videoTag.onloadedmetadata = () => {
      videoTag.play();
      // this.loadingService.removeLoader();
      if (!autoplay) {
        setTimeout(() => {
          videoTag.pause();
          videoTag.muted = false;
        }, 200);
      }
    }
  }

  private hlsPlayer(url: string, videoTag: HTMLVideoElement, autoplay: boolean): void {
    // this.loadingService.addLoader();
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(videoTag);
    videoTag.onloadedmetadata = () => {
      // this.loadingService.removeLoader();
      if (autoplay) {
        videoTag.muted = true;
        videoTag.play();
      }
    }
  }

}
