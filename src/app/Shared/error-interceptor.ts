import { HttpErrorResponse, HttpInterceptor, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from '../Services/error';

export const errorInterceptor: HttpInterceptorFn = (req,next)=> {
  const errorService = inject(ErrorService);
  return next(req).pipe (
    catchError((error:HttpErrorResponse) => {
      console.log(error +" error caught")
      let message:string;
      if (error.status ===0){
        message = 'could not reach the sever';
      } else if (error.status===404){
        message = 'data not found';
      } else if (error.status >= 500){
        message = 'the server is having issues';
      } else {
        message = 'its so over' + error.status;
      }
      errorService.setError(message);
      return throwError(()=>error);
    })
  )
}
