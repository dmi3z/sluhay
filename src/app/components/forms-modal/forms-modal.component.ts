import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forms-modal',
  templateUrl: './forms-modal.component.html',
  styleUrls: ['./forms-modal.component.scss']
})
export class FormsModalComponent {
  @Output() closeEvent = new EventEmitter();

  constructor() { }

  public closeModal(): void {
    this.closeEvent.next();
  }

  public stopProp(event: MouseEvent): void {
    event.stopPropagation();
  }

}
