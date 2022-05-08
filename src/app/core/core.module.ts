import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalErrorHandler } from './errors/GlobalErrorHandler';
import { HttpLoadingInterceptor } from './errors/HttpLoadingInterceptor';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      // processes all errors
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      // interceptor to show loading spinner
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule { }
