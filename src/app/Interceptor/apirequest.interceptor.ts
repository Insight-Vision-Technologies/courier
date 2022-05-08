import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable()
export class ApirequestInterceptor implements HttpInterceptor {

  constructor(private authSer:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.authSer.token;
    
    if (token) {
     
        request = this.setHeader(request, token);
      
    }

    return next.handle(request);
  }

  private setHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return request;
  }
}