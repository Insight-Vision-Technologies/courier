import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IClassfication } from '../Models/iclassfication';
import { ICompany, ICompanyAdmin } from '../Models/icompany';
import { IDriver } from '../Models/idriver';
import { IOrderAdmin } from '../Models/iorder-admin';
import { IorderUser } from '../Models/iorder-user';
import { IResponse } from '../Models/iresponse';
import { IRoleMajor } from '../Models/irole-major';
import { ITimeTable } from '../Models/itime-table';
import { IUserInfo } from '../Models/iuser-info';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient,) { }

  CountOrders(): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Admin/CountOrders`
    );
  }
  CountCouriers(): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Admin/CountCouriers`
    );
  }
  CountVehicales(): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Admin/CountVehicales`
    );
  }
  CountUser(): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Admin/CountUser`
    );
  }

  GetActiveOrders(): Observable<IResponse<IOrderAdmin[]>> {
    return this.http.get<IResponse<IOrderAdmin[]>>(
      `${environment.Api_core}/Admin/GetActiveOrders`
    );
  }

  GetUsersInfo(): Observable<IResponse<IUserInfo[]>> {
    return this.http.get<IResponse<IUserInfo[]>>(
      `${environment.Api_core}/Admin/GetUsersInfo`
    );
  }

  GetUsersInfoByID(userID:string): Observable<IResponse<IUserInfo>> {
    return this.http.get<IResponse<IUserInfo>>(
      `${environment.Api_core}/Admin/GetUsersInfoByID/`+userID
    );
  }
 
  DeactiveUser(userID:string): Observable<IResponse<any>> {
    return this.http.get<IResponse<any>>(
      `${environment.Api_core}/Admin/DeactiveUser/`+userID
    );
  }

  GetOrderUser(userID:string): Observable<IResponse<IorderUser[]>> {
   return this.http.get<IResponse<IorderUser[]>>(`${environment.Api_core}/Order/GetOrderUser/`+userID);
   }

   GetCompanyByID(compID:number): Observable<IResponse<ICompany>> {
   return this.http.get<IResponse<ICompany>>(`${environment.Api_core}/Admin/GetCompanyByID/`+compID);
   }

   GetAllCompany(): Observable<IResponse<ICompany[]>> {
   return this.http.get<IResponse<ICompany[]>>(`${environment.Api_core}/Admin/GetAllCompany`);
   }

   CountCompanyVehicales(compID:number): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Admin/CountCompanyVehicales/`+compID
    );
  }

  CountCompanyEmployee(compID:number): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Admin/CountCompanyEmployee/`+compID
    );
  }

  CountCompanyOrderCancle(compID:number): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Admin/CountCompanyOrderCancle/`+compID
    );
  }

  CountCompanyOrderOnProcess(compID:number): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Admin/CountCompanyOrderOnProcess/`+compID
    );
  }

  CountCompanyOrderHistory(compID:number): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Company/CountOrderHistory/` + compID
    );
  }

  CountRate(compID:number): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Company/CountRate/` + compID
    );
  }
 
  CountTotalRate(): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Admin/CountTotalRate`
    );
  }

  CountPayment(compID:number): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Company/CountPayment/` +compID
    );
  }

  getOrderCount(compID:number): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Company/CountOrders/` + compID
    );
  }

  GetAllOrders(): Observable<IResponse<IorderUser[]>> {
    return this.http.get<IResponse<IorderUser[]>>(
      `${environment.Api_core}/Admin/GetAllOrders`
    );
  }

  GetAllEmployee(): Observable<IResponse<IDriver[]>> {
    return this.http.get<IResponse<IDriver[]>>(
      `${environment.Api_core}/Admin/GetAllEmployee`
    );
  }

  GetAllCompanyAdmin(): Observable<IResponse<ICompanyAdmin[]>> {
    return this.http.get<IResponse<ICompanyAdmin[]>>(
      `${environment.Api_core}/Admin/GetAllCompanyAdmin`
    );
  }

  GetAllRoleMajor(): Observable<IResponse<IRoleMajor[]>> {
    return this.http.get<IResponse<IRoleMajor[]>>(
      `${environment.Api_core}/Admin/GetAllRoleMajor`
    );
  }

  getClassfication(): Observable<IResponse<IClassfication[]>> {
    return this.http.get<IResponse<IClassfication[]>>(
      `${environment.Api_core}/Admin/getClassfication`
    );
  }

  AddClassfication(postData: IClassfication) {
    console.log(postData);
    return this.http.post(`${environment.Api_core}/Admin/AddClassfication`, postData);
  }

  GetTimeCompany(compIDD:number): Observable<IResponse<ITimeTable[]>> {
    return this.http.get<IResponse<ITimeTable[]>>(`${environment.Api_core}/Company/GetTimeCompany/`+compIDD);
  }

}
