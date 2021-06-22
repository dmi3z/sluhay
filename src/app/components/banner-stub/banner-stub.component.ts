import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-stub',
  templateUrl: './banner-stub.component.html',
  styleUrls: ['./banner-stub.component.scss'],
})
export class BannerStubComponent {
  @Input() isFullscreen: boolean;
  constructor() {}
}
