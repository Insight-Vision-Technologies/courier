import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor( private toster:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      // console.log(err)
      console.log('errsss')
    this.toster.error(err.statusText,'Eraror',{timeOut : 2000,closeButton:true,progressBar:true})

return throwError('err')
}
)
 
) 
}
}