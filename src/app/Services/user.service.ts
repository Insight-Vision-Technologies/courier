import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAddress } from '../Models/iaddress';
import { ICompOver, ICompOverInfo } from '../Models/icomp-over';
import { IDriver } from '../Models/idriver';
import { Iorder } from '../Models/iorder';
import { IOrderDriver, IOrderDriverInfo, IOrderInfo, IOrderRate, IorderUser } from '../Models/iorder-user';
import { IResponse } from '../Models/iresponse';
import { ITypeAll } from '../Models/itype-order';
import { IUser } from '../Models/iuser';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  addpayment(newAddressINfo: IAddress) {
    throw new Error('Method not implemented.');
  }
  userId: string = this.authService.UserModel.UserId;
  compID = localStorage.getItem('compId');
  OrderID = localStorage.getItem('orderId');

  constructor(private authService: AuthService, private http: HttpClient) {
    this.authService.getUser()
  }

  getUserByID(): Observable<IResponse<IUser>> {
    console.log(this.userId)
    console.log(this.authService.UserModel.UserId)
    return this.http.get<IResponse<IUser>>(
      `${environment.Api_core}/User/GetById/` + this.userId
    );
  }

  updateUser(postData: IUser) {
    console.log(postData);
    console.log(postData);
    return this.http.put<IResponse<IUser>>(
      `${environment.Api_core}/User/UpdateUser/` + this.userId,
      postData
    );
  }

  cancleOrder() {

    return this.http.get<IResponse<any>>(
      `${environment.Api_core}/User/CancleOrder/` + this.OrderID);
  }

  returnOrder() {
    return this.http.get<IResponse<any>>(
      `${environment.Api_core}/User/ReturnOrder/` + this.OrderID);
  }

  CountTrackOrder() {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/User/CountTrackOrder/` + this.userId);
  }

  CountPayment() {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/User/CountPayment/` + this.userId);
  }

  RateOrder() {
    return this.http.get<IResponse<IOrderRate[]>>(
      `${environment.Api_core}/User/RateOrder/` + this.userId);
  }


  SetRateOrder(orderID:number,rate:number) {
    return this.http.get<IResponse<Iorder[]>>(
      `${environment.Api_core}/User/SetRateOrder/` + orderID +'/'+ rate);
  }

  getOrder(): Observable<IResponse<IorderUser[]>> {
    return this.http.get<IResponse<IorderUser[]>>(
      `${environment.Api_core}/Order/GetOrderUser/` + this.userId
    );
  }

  getOrderByID(id: number): Observable<IResponse<IorderUser>> {
    return this.http.get<IResponse<IorderUser>>(
      `${environment.Api_core}/Order/GetOrderByID/` + id
    );
  }
  GetOrderDriverName(id: number): Observable<IResponse<IOrderDriverInfo>> {
    return this.http.get<IResponse<IOrderDriverInfo>>(
      `${environment.Api_core}/Order/GetOrderDriverName/` + id
    );
  }


  getOrderOver(keyword: ICompOverInfo): Observable<IResponse<ICompOver[]>> {
    console.log(keyword);
    return this.http.get<IResponse<ICompOver[]>>(
      `${environment.Api_core}/Order/GetCompPrice/` +
        keyword.from +
        '/' +
        keyword.to +
        '/' +
        keyword.deliveryTime +
        '/' +
        keyword.size +
        '/' +
        keyword.type +
        '/' +
        keyword.width +
        '/' +
        keyword.height +
        '/' +keyword.length


        // /{size:int}/{type}/{width:int}/{Height:int}/{length:int}
    );
  }

  GetOverCompany(orderNumber:string, DeliveryTime:string): Observable<IResponse<ICompOver[]>> {
    return this.http.get<IResponse<ICompOver[]>>(
      `${environment.Api_core}/Order/GetOverCompany/` +
      orderNumber +
        '/' +
        DeliveryTime 



        // /{size:int}/{type}/{width:int}/{Height:int}/{length:int}
    );
  }

  addOrderInfo(postData: IOrderInfo) {
    console.log(postData);
    return this.http.post(
      `${environment.Api_core}/Order/AddOrderInfo`,
      postData
    );
  }

  addOrderdriver(postData: IOrderDriver) {
    console.log(postData);
    return this.http.post(
      `${environment.Api_core}/Order/AddOrderDriver`,
      postData
    );
  }

  getAddressByUserID(): Observable<IResponse<IAddress[]>> {
    return this.http.get<IResponse<IAddress[]>>(
      `${environment.Api_core}/Address/GetAddressUser/` + this.userId
    );
  }

  addAddress(postData: IAddress) {
    console.log(postData);
    return this.http.post(
      `${environment.Api_core}/Address/AddAddress`,
      postData
    );
  }

  updateAddress(postData: IAddress) {
    console.log(postData);
    console.log(postData.addressID);
    return this.http.put<IResponse<IAddress>>(
      `${environment.Api_core}/Address/UpdateAddress/` + postData.addressID,
      postData
    );
  }

  deleteAddress(id: number) {
    return this.http.delete(
      `${environment.Api_core}/Address/DeleteAddress/` + id
    );
  }

  getAddressbyID(id: number): Observable<IAddress> {
    return this.http.get<IAddress>(`${environment.Api_core}/Address/GetAddressBYID/` + id);
  }

  getalltype(): Observable<IResponse<ITypeAll[]>> {
    return this.http.get<IResponse<ITypeAll[]>>(
      `${environment.Api_core}/Price/GetAllType`
    );
  }

  getCountUser(): Observable<IResponse<number>> {
    return this.http.get<IResponse<number>>(
      `${environment.Api_core}/User/CountOrderUser/` + this.userId
    );
  }
}
