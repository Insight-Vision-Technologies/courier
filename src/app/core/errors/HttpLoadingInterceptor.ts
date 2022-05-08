import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";

@Injectable()

export class HttpLoadingInterceptor implements HttpInterceptor {
    constructor(    private toster:ToastrService
      ) {}
  
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      console.log('errzs')

        return next.handle(request).pipe(catchError(err => {
          // console.log(err)
          console.log('errcore'+err)
        this.toster.error(err.statusText,'Error',{timeOut : 2000,closeButton:true,progressBar:true})

return throwError('err.statusText')
        }
        )
         
      ) 
    }
  }