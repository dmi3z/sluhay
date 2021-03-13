import { Injectable } from '@angular/core';
import * as Hls from 'hls.js';

@Injectable({ providedIn: 'root' })
export class PlayerService {

  public playUrl(incomeUrl: string, videoTag: HTMLVideoElement, autoplay = true): void {
    const hls = new Hls();
    const url = this.parseUrl(incomeUrl);
    console.log('URL: ', url);
    hls.loadSource(url);
    hls.attachMedia(videoTag);
    if (autoplay) {
      videoTag.muted = true;
      videoTag.play();
    }
  }

  private parseUrl(url: string): string {
    if (url.includes('https')) {
      return url;
    } else {
      let newUrl = url.replace('http', 'https');
      newUrl = newUrl.replace(':82', '');
      return newUrl;
    }
  }
}
