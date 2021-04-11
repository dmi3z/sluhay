import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class LoadingService {
  public loadCounter$ = new Subject<number>();
  private counter = 0;

  public addLoader(): void {
    this.counter++;
    this.loadCounter$.next(this.counter);
  }

  public removeLoader(): void {
    this.counter--;
    this.loadCounter$.next(this.counter);
  }
}
