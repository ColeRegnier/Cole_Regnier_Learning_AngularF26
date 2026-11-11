import { HttpInterceptorFn } from '@angular/common/http';
import { LoadingService } from '../Services/loading';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loadingInterceptor : HttpInterceptorFn = (req, next) =>{
  const loadingService = inject(LoadingService);
  loadingService.increase();
  // finalize runs when the request finishes in calls the decrease function on loading sevice to keep our running count in snyc
  return next(req).pipe(finalize(()=> loadingService.decrease()));

}
