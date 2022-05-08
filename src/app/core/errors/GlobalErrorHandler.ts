import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable()

export class GlobalErrorHandler implements ErrorHandler{
    constructor(
        
        private zone: NgZone,
    private toster:ToastrService

      ) {}

      handleError(error: any): void {
       // Check if it's an error from an HTTP response
    if (!(error instanceof HttpErrorResponse)) {
        error = error.rejection; // get the error object
      }
      this.zone.run(() =>
      this.toster.error(error?.message || 'Undefined client error','Erssror',{timeOut : 5000,closeButton:true,progressBar:true})

        // this.errorDialogService.openDialog(
        //   error?.message || 'Undefined client error',
        //   error?.status
        // )
      );
  
      console.error('Error from global error handler', error);
      console.error( error);
      console.error( error);
      console.error( error.message);
    }
  }