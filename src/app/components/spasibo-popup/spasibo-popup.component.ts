import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-spasibo-popup',
  templateUrl: './spasibo-popup.component.html',
  styleUrls: ['./spasibo-popup.component.scss']
})
export class SpasiboPopupComponent {
  @Output() closeEvent = new EventEmitter();

  public closeModal(): void {
    this.closeEvent.next();
  }

  public stopProp(event: MouseEvent): void {
    event.stopPropagation();
  }

}
