import { Injectable } from '@angular/core';
import * as Hls from 'hls.js';

@Injectable({ providedIn: 'root' })
export class PlayerService {

  public playUrl(url: string, videoTag: HTMLVideoElement, autoplay = true): void {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(videoTag);
    if (autoplay) {
      videoTag.play();
    }
  }
}
