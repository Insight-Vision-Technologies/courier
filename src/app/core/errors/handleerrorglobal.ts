import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Inject, Injectable, Injector, NgZone } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable()

export class handleErrorGlobal implements ErrorHandler{
    constructor(
        
        private zone: NgZone,
        @Inject(Injector) private injector: Injector
    // private toster:ToastrService

      ) {}

      handleError(error: any): void {
      console.error('ss', error);

       // Check if it's an error from an HTTP response
    if (!(error instanceof HttpErrorResponse)) {
        // error = error.rejection; // get the error object
    //   this.zone.run(() =>
    console.error('Error fifff', error);

        // this.toastrService.error(error,'Error',{timeOut : 2000,closeButton:true,progressBar:true})
    //   )
      }
   
      this.toastrService.error(error || 'Undefined client error','Error',{timeOut : 5000,closeButton:true,progressBar:true})
  
      console.error('Error from global error handlder', error);
    }
    private get toastrService(): ToastrService {
        return this.injector.get(ToastrService);
    }
  }