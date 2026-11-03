import { Injectable, Service, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GuardService {
  guardEnabled = signal(true);
  //toggle function that changes to the opposite of what the guard is currently set to.
  toggle(){this.guardEnabled.update(v=>!v)}
}
