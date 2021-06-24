import { Component, OnInit } from '@angular/core';
import { ABOUT_REWARD } from './constants/reward.constant';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss'],
})
export class RewardComponent implements OnInit {
  public quoteText = ABOUT_REWARD;
  constructor() {}

  public ngOnInit(): void {}
}
