import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FragmentScrollingService {
  public fragment$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor() {}

  public setFragment(section: string): void {
    this.fragment$.next(section);
  }
}
