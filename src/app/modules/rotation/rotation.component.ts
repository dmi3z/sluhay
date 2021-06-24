import { Component, OnInit } from '@angular/core';
import { AGREEMENT_TEXT } from './constants/rotation.constant';

@Component({
  selector: 'app-rotation',
  templateUrl: './rotation.component.html',
  styleUrls: ['./rotation.component.scss'],
})
export class RotationComponent implements OnInit {
  public quoteText = AGREEMENT_TEXT;
  constructor() {}

  public ngOnInit(): void {}
}
