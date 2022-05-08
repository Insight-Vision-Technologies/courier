import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICAR } from '../Models/icar';
import { IDriver } from '../Models/idriver';
import { IorderUser } from '../Models/iorder-user';
import { IResponse } from '../Models/iresponse';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  driverID = localStorage.getItem('driverId');

  constructor(private http: HttpClient) { }

  DriverLogin(email:string,pass:string): Observable<IResponse<IDriver>> {
    console.log(email+'dff'+pass)

    return this.http.get<IResponse<IDriver>>(`${environment.Api_core}/Driver/DriverLogin/`+email+'/'+pass);

  }

  CountDriverOrder(): Observable<IResponse<number>> {

    return this.http.get<IResponse<number>>(`${environment.Api_core}/Driver/CountDriverOrder/`+this.driverID);

  }

  CountDriverTodayOrders(): Observable<IResponse<number>> {

    return this.http.get<IResponse<number>>(`${environment.Api_core}/Driver/CountDriverTodayOrders/`+this.driverID);

  }

  getDriverOrder(): Observable<IResponse<IorderUser[]>> {
    return this.http.get<IResponse<IorderUser[]>>(
      `${environment.Api_core}/Driver/GetDriverOrder/` + this.driverID
    );
  }

  getDriverInfo(): Observable<IResponse<IDriver>> {
    return this.http.get<IResponse<IDriver>>(
      `${environment.Api_core}/Driver/GetDriverByID/` + this.driverID
    );
  }


  CountPayment(): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Driver/CountPayment/` + this.driverID
    );
  }

  ChangeDriverAvailble(): Observable<IResponse<boolean>> {
    return this.http.get<IResponse<boolean>>(
      `${environment.Api_core}/Driver/ChangeDriverAvailble/` + this.driverID
    );
  }
}
