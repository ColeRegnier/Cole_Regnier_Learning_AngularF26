import { computed, Injectable, Service, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoadingService {
  //number of requests
  private count = signal(0)
  // bool true when 1 request
  isLoading = computed(() => this.count()>0);

  increase(){
    this.count.update((count) => count+1)
  }
  decrease(){
    this.count.update((count) => count - 1)
  }
}
