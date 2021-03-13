import { Injectable } from '@angular/core';
import * as Hls from 'hls.js';

@Injectable({ providedIn: 'root' })
export class PlayerService {

  public playUrl(url: string, videoTag: HTMLVideoElement, autoplay = true): void {
    if (navigator.userAgent.includes('iPhone')) {
      this.iPhonePlayer(url, videoTag, autoplay);
    } else {
      this.standartPlayer(url, videoTag, autoplay);
    }
  }

  private iPhonePlayer(url: string, videoTag: HTMLVideoElement, autoplay: boolean): void {
    videoTag.src = url;
    videoTag.muted = true;
    videoTag.play();
    if (!autoplay) {
      setTimeout(() => {
        videoTag.pause();
        videoTag.muted = false;
      }, 100);
    }
  }

  private standartPlayer(url: string, videoTag: HTMLVideoElement, autoplay: boolean): void {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(videoTag);
    if (autoplay) {
      videoTag.muted = true;
      videoTag.play();
    }
  }
}
