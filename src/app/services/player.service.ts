import { Injectable } from '@angular/core';
import * as Hls from 'hls.js';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlayerService {


  public loadCounter$ = new Subject<number>();
  private counter = 0;

  public playUrl(url: string, videoTag: HTMLVideoElement, autoplay = true): void {
    if (navigator.userAgent.includes('iPhone')) {
      this.iPhonePlayer(url, videoTag, autoplay);
    } else {
      this.standartPlayer(url, videoTag, autoplay);
    }
  }

  private iPhonePlayer(url: string, videoTag: HTMLVideoElement, autoplay: boolean): void {
    this.addLoader();
    videoTag.src = url;
    videoTag.muted = true;
    videoTag.play();
    videoTag.onloadedmetadata = () => {
      this.removeLoader();
      if (!autoplay) {
        setTimeout(() => {
          videoTag.pause();
          videoTag.muted = false;
        }, 200);
      }
    }
  }

  private standartPlayer(url: string, videoTag: HTMLVideoElement, autoplay: boolean): void {
    this.addLoader();
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(videoTag);
    videoTag.onloadedmetadata = () => {
      this.removeLoader();
      if (autoplay) {
        videoTag.muted = true;
        videoTag.play();
      }
    }
  }

  private addLoader(): void {
    this.counter++;
    this.loadCounter$.next(this.counter);
  }

  private removeLoader(): void {
    setTimeout(() => {
      this.counter--;
      this.loadCounter$.next(this.counter);
    }, 100);
  }
}
