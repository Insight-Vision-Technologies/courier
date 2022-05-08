import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Istring } from '../Models/faq';
import { ICompOverInfo } from '../Models/icomp-over';
import { IGuestOrder } from '../Models/iguest';
import { Iorder, IOrderPrice } from '../Models/iorder';
import { IorderUser } from '../Models/iorder-user';
import { IResponse } from '../Models/iresponse';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  userId: string = this.authService.UserModel.UserId;
  compID = localStorage.getItem('compId');
  orderID = localStorage.getItem('orderId');
  formData: FormData = new FormData();

  constructor(private authService: AuthService, private http: HttpClient) { }

  getOrderByID(id: number): Observable<IResponse<IorderUser>> {
    return this.http.get<IResponse<IorderUser>>(
      `${environment.Api_core}/Order/GetOrderByID/` + id
    );
  }

  GetOrderByIDDetails(orderID:number): Observable<IResponse<IorderUser>> {
    return this.http.get<IResponse<IorderUser>>(
      `${environment.Api_core}/Order/GetOrderByIDDetails/` + orderID
    );
  }

  getOrderByNumber(id: string): Observable<IResponse<IorderUser>> {
    console.log(id)
    return this.http.get<IResponse<IorderUser>>(
      `${environment.Api_core}/Order/GetOrderByNumber/` + id
    );
  }



  UpdateOrderStatus(id: number) {
    console.log(id);
    return this.http.get(
      `${environment.Api_core}/Order/UpdateOrderStatus/` + id
    );
  }

 
  addOrder(postData: FormData): Observable<Istring> {
     let headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        const httpOptions = {
            headers: headers
        };
    console.log(postData);
    return this.http.post<Istring>(
      `${environment.Api_core}/Order/CreateOrder`,
      postData,httpOptions
    );
  }


  CreateOrderGuestWithPercent(postData: FormData): Observable<Istring> {
    let headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        const httpOptions = {
            headers: headers
        };
    console.log(postData);
    return this.http.post<Istring>(
      `${environment.Api_core}/Order/CreateOrderGuestWithPercent`,
      postData,httpOptions
    );
    // return this.http.post<ICompOverInfo>(
    //   `${environment.Api_core}/Order/CreateGuestOrder`,
    //   postData
    // );
  }
  addGuestOrder(postData: FormData): Observable<ICompOverInfo> {
    let headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        const httpOptions = {
            headers: headers
        };
    console.log(postData);
    return this.http.post<any>(
      `${environment.Api_core}/Order/CreateGuestOrder`,
      postData,httpOptions
    );
  
  }

  //GetOrderPriceDetails
  GetFinishOrderCompany(): Observable<IResponse<IorderUser[]>> {
    console.log(this.compID)
   return this.http.get<IResponse<IorderUser[]>>(`${environment.Api_core}/Company/GetFinishOrderCompany/`+this.compID);
   }

   GetOrderPriceDetails(orderNumber:string): Observable<IResponse<IOrderPrice>> {
    console.log(this.compID)
   return this.http.get<IResponse<IOrderPrice>>(`${environment.Api_core}/Order/GetOrderPriceDetails/`+orderNumber);
   }

   GetOrderPriceDetailsComp(idOrder:number): Observable<IResponse<IOrderPrice>> {
    console.log(this.compID)
   return this.http.get<IResponse<IOrderPrice>>(`${environment.Api_core}/Order/GetOrderPriceDetails/`+idOrder);
   }

   GetOrderUser(): Observable<IResponse<IorderUser[]>> {
    console.log(this.compID)
   return this.http.get<IResponse<IorderUser[]>>(`${environment.Api_core}/Order/GetOrderUser/`+this.userId);
   }

   UpdateOrderMethod(orderNumber:string,method:number): Observable<IResponse<any>> {
    console.log(this.compID)
   return this.http.get<IResponse<any>>(`${environment.Api_core}/Order/UpdateOrderMethod/`+orderNumber+
   '/' +method);
   }
  }
