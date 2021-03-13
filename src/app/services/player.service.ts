import { Injectable, PlatformRef } from '@angular/core';
import * as Hls from 'hls.js';

@Injectable({ providedIn: 'root' })
export class PlayerService {

  constructor(private platform: PlatformRef) { }

  public playUrl(url: string, videoTag: HTMLVideoElement, autoplay = true): void {
    console.log(navigator.userAgent);


    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(videoTag);
    if (autoplay) {
      videoTag.muted = true;
      videoTag.play();
    }
  }

  // private parseUrl(url: string): string {
  //   if (url.includes('https')) {
  //     return url;
  //   } else {
  //     let newUrl = url.replace('http', 'https');
  //     newUrl = newUrl.replace(':82', '');
  //     return newUrl;
  //   }
  // }
}
