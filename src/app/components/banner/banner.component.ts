import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  public isMuted: boolean;
  public isFullscreen: boolean;
  public isControls: boolean;
  @Input() isStub = false;
  @Output() selectedFragment = new EventEmitter<string>();

  public readonly URL = 'https://sluhay.by/live/Ch045pub/index.m3u8';

  constructor() {}

  ngOnInit(): void {}

  public onLiveScroll(): void {
    this.selectedFragment.next('channel');
  }
}
