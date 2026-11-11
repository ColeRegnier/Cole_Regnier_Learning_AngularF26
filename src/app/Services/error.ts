import { Injectable, Service, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ErrorService {
  private message = signal<string | null>(null);
  errorMessage = this.message.asReadonly();

  setError(msg: string) {
    this.message.set(msg);
  }
  clearError() {
    this.message.set(null);
  }
}
