import { Component } from '@angular/core';
import { EXPLANATORY_TEXT } from './constants/reward-about-card.constants';

@Component({
  selector: 'app-reward-about-card',
  templateUrl: './reward-about-card.component.html',
  styleUrls: ['./reward-about-card.component.scss'],
})
export class RewardAboutCardComponent {
  public quoteText: string = EXPLANATORY_TEXT;
  constructor() {}
}
