import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public isMuted: boolean;
  public isFullscreen: boolean;
  public isControls: boolean;

  public readonly URL = 'http://persik.by/stream/3502/32/10970.m3u8';

  constructor() { }

  ngOnInit(): void {}



}
