import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICompany, ICompanyTodayOrder } from '../Models/icompany';
import { IDirection, IDirectionDriver } from '../Models/idirection';
import { IDriVehRecord } from '../Models/idri-veh-record';
import { IorderUser } from '../Models/iorder-user';
import { IRegisterResponse } from '../Models/iregister-response';
import { IName, IReport } from '../Models/ireport';
import { IResponse } from '../Models/iresponse';
import { ICompanysize, ISizeOrder } from '../Models/isize-order';
import { ITimeTable } from '../Models/itime-table';
import { ITypeOrder } from '../Models/itype-order';
import { ITest } from '../Models/iuser';
import { IDriver } from './../Models/idriver';
import { Iprice } from './../Models/iprice';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  userId: string = this.authService.UserModel.UserId;
  compID = localStorage.getItem('compId');

  constructor(private http: HttpClient, private authService: AuthService) {}

  RegisterCompany(formData: FormData): Observable<IRegisterResponse> {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const httpOptions = {
      headers: headers,
    };

    console.log('here');
    console.log(formData);
    return this.http.post<IRegisterResponse>(
      `${environment.Api_core}/Company/RegisterCompanyUser`,
      formData,
      httpOptions
    );
    // return this.http.post(
    //   `${environment.Api_core}/Company/RegisterCompany`,formData,httpOptions
    // );
  }
  UpdateCompany(formData: FormData): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const httpOptions = {
      headers: headers,
    };
    console.log('here');
    console.log(formData);
    return this.http.put(
      `${environment.Api_core}/Company/UpdateCompany`,
      formData,
      httpOptions
    );
  }

  checkCompany(): Observable<IResponse<ICompany[]>> {
    console.log(this.userId);
    return this.http.get<IResponse<ICompany[]>>(
      `${environment.Api_core}/Company/CheckCompany/` + this.userId
    );
  }

  CompanyInfo(): Observable<IResponse<ICompany>> {
    console.log(this.userId);
    return this.http.get<IResponse<ICompany>>(
      `${environment.Api_core}/Company/CompanyInfo/` + this.userId
    );
  }
  getOrderByID(): Observable<IResponse<IorderUser[]>> {
    console.log(this.compID);
    return this.http.get<IResponse<IorderUser[]>>(
      `${environment.Api_core}/Company/GetOrderCompany/` + this.compID
    );
  }

  GetOrderByIDDetails(orderID:number): Observable<IResponse<IorderUser>> {
    return this.http.get<IResponse<IorderUser>>(
      `${environment.Api_core}/Order/GetOrderByIDDetails/` + orderID
    );
  }

  GetTodayOrders(): Observable<IResponse<ICompanyTodayOrder[]>> {
    console.log(this.compID);
    return this.http.get<IResponse<ICompanyTodayOrder[]>>(
      `${environment.Api_core}/Company/GetTodayOrders/` + this.compID
    );
  }


  CountDirection(): Observable<IResponse<number>> {
    console.log(this.compID);
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Company/CountDirection/` + this.compID
    );
  }

  CountPayment(): Observable<IResponse<number>> {
    console.log(this.compID);
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Company/CountPayment/` + this.compID
    );
  }

  CountRate(): Observable<IResponse<number>> {
    console.log(this.compID);
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Company/CountRate/` + this.compID
    );
  }

  getOrder(): Observable<IResponse<IorderUser[]>> {
    return this.http.get<IResponse<IorderUser[]>>(
      `${environment.Api_core}/Order/GetOrderUser/` + this.userId
    );
  }
  getCompany(): Observable<IResponse<ICompany[]>> {
    return this.http.get<IResponse<ICompany[]>>(
      `${environment.Api_core}/Company/GetCompany/` + this.compID
    );
  }

  getType(): Observable<IResponse<ITypeOrder[]>> {
    return this.http.get<IResponse<ITypeOrder[]>>(
      `${environment.Api_core}/Price/GetType/` + this.compID
    );
  }

  addType(postData: ITypeOrder) {
    console.log(postData);
    return this.http.post(`${environment.Api_core}/Price/AddType`, postData);
  }

  getSize(size: number): Observable<IResponse<ISizeOrder>> {
    return this.http.get<IResponse<ISizeOrder>>(
      `${environment.Api_core}/Price/GetSize/` + this.compID + '/' + size
    );
  }

  addSize(postData: ISizeOrder) {
    console.log(postData);
    return this.http.post(`${environment.Api_core}/Price/AddSize`, postData);
  }

  getPriceSize(): Observable<IResponse<ICompanysize>> {
    return this.http.get<IResponse<ICompanysize>>(
      `${environment.Api_core}/Price/GetPercentSize/` + this.compID
    );
  }

  addPriceSize(postData: ICompanysize) {
    console.log(postData);
    return this.http.post(`${environment.Api_core}/Price/AddPercentSize`, postData);
  }
  getDriVehRecord(idDri:number): Observable<IResponse<IDriVehRecord[]>> {
    return this.http.get<IResponse<IDriVehRecord[]>>(
      `${environment.Api_core}/DriVeh/GetDriVehRecord/` + idDri
    );
  }

  idComp:number=0
  getDriName(): Observable<IResponse<IName[]>> {
    console.log(this.compID)
    console.log(typeof(this.compID))
if(this.compID){
  this.idComp =parseInt(this.compID)
}
console.log(typeof(this.idComp))

    return this.http.get<IResponse<IName[]>>(
      `${environment.Api_core}/Report/GetDriver/` + this.idComp
    );
  }

  getVehName(): Observable<IResponse<IName[]>> {
    return this.http.get<IResponse<IName[]>>(
      `${environment.Api_core}/Report/GetVehicle/` + this.idComp
    );
  }

  addReport(postData: IReport) {
    console.log(postData);
    return this.http.post(`${environment.Api_core}/Report/AddReport`, postData);
  }

  getReport(vehId:number): Observable<IResponse<IReport[]>> {
    return this.http.get<IResponse<IReport[]>>(
      `${environment.Api_core}/Report/GetReport/` + vehId
    );
  }

  getOrderCount(): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Company/CountOrders/` + this.compID
    );
  }

  getOrderHistoryCount(): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/Company/CountOrderHistory/` + this.compID
    );
  }


  GetDirection(): Observable<IResponse<IDirection[]>> {
    return this.http.get<IResponse<IDirection[]>>(
      `${environment.Api_core}/Price/GetDirection/` + this.compID
    );
  }

  GetDriverDirection(driverID:number): Observable<IResponse<IDirection[]>> {
    return this.http.get<IResponse<IDirection[]>>(
      `${environment.Api_core}/Driver/GetDriverDirection/` + driverID
    );
  }

  CheckDriverDirection(driverID:number,directioID:number): Observable<IResponse<IDirectionDriver[]>> {
    return this.http.get<IResponse<IDirectionDriver[]>>(
      `${environment.Api_core}/Driver/CheckDriverDirection/` + driverID+'/'+directioID
    );
  }


  GetOtherDriver(driverID:number): Observable<IResponse<IDirectionDriver[]>> {
    return this.http.get<IResponse<IDirectionDriver[]>>(
      `${environment.Api_core}/Driver/GetOtherDriver/` + driverID
    );
  }

  UpdateDriverDirection(driverID:number,oldDriver:number): Observable<IResponse<any>> {
    return this.http.get<IResponse<any>>(
      `${environment.Api_core}/Driver/UpdateDriverDirection/` + driverID+'/'+oldDriver
    );
  }


  NoAssignDirection(driverID:number): Observable<IResponse<any>> {
    return this.http.get<IResponse<any>>(
      `${environment.Api_core}/Driver/NoAssignDirection/` + driverID
    );
  }

  AddDriverDirection(driverID:number , from:string,to:string,reverse:boolean) {
    return this.http.get(`${environment.Api_core}/Driver/AddDriverDirection/`+driverID+'/'+from+'/'+to+'/'+reverse);
  }

  DeleteDriverWithDirection(id: number) : Observable<IResponse<IDirection[]>>{
    return this.http.delete<IResponse<IDirection[]>>(
      `${environment.Api_core}/Driver/DeleteDriverWithDirection/` + id
    );
  }

  CheckDriverOrders(id: number) : Observable<IResponse<IDirection[]>>{
    return this.http.delete<IResponse<IDirection[]>>(
      `${environment.Api_core}/Driver/CheckDriverOrders/` + id
    );
  }

  GetDriverDeliver(id:number): Observable<IResponse<IDirectionDriver[]>> {
    return this.http.get<IResponse<IDirectionDriver[]>>(`${environment.Api_core}/Company/GetDriverDeliver/`+id);
  }

  GetTimeCompany(): Observable<IResponse<ITimeTable[]>> {
    return this.http.get<IResponse<ITimeTable[]>>(`${environment.Api_core}/Company/GetTimeCompany/`+this.compID);
  }

  GetTimeCompanyForPrice(): Observable<IResponse<ITimeTable[]>> {
    return this.http.get<IResponse<ITimeTable[]>>(`${environment.Api_core}/Company/GetTimeCompanyForPrice/`+this.compID);
  }

  AddTimeCompany(postData: ITimeTable[]) {
    console.log(postData);
    return this.http.post(`${environment.Api_core}/Company/AddTimeCompany`, postData);
  }

  UpdateTimeCompany(postData: ITimeTable[]) {
    console.log(postData);
    return this.http.post(`${environment.Api_core}/Company/UpdateTimeCompany`, postData);
  }

}
