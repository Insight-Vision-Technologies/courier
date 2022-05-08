import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICAR } from './../Models/icar';
import { map } from 'rxjs/operators';
import { CarsComponent } from '../Components/company/cars/cars.component';
import { Faq } from './../Models/faq';
import { IDriver, IDriverCompany } from '../Models/idriver';
import { IEmirates } from '../Models/iemirates';
import { IResponse } from '../Models/iresponse';
import { IListPrice, IPriceComp } from '../Models/iprice-comp';

@Injectable({
  providedIn: 'root',
})
export class CRUDTestService {
  constructor(private http: HttpClient) {}
   idd =  localStorage.getItem('compId');

  getAllVehicale(): Observable<IResponse<ICAR[]>> {
    // console.log(this.http.get<ICAR[]>(`${environment.Api_core}`))
    var id =  localStorage.getItem('compId');

    return this.http.get<IResponse<ICAR[]>>(`${environment.Api_core}/vehicle/GetAll/`+this.idd);
    // .pipe(map(response=> response),

    //  catchError(this.handleError)
    // );
  }

  getVehiclebyID(id: number): Observable<IResponse<ICAR>> {
    return this.http.get<IResponse<ICAR>>(`${environment.Api_core}/vehicle/GetById/` + id);
  }

  deleteCar(id: number) {
    return this.http.delete(
      `${environment.Api_core}/vehicle/DeleteVehicle/` + id
    );
  }

  updatePost(postData: ICAR, id: number) {
    console.log(postData);
    return this.http.put(
      `${environment.Api_core}/vehicle/UpdateVehicle/` + id,
      postData
    );
  }
getAllPrices(): Observable<IResponse<IPriceComp[]>> {
    return this.http.get<IResponse<IPriceComp[]>>(`${environment.Api_core}/Price/GetAllPrices`);

  }
  addVehicle(postData: ICAR) {


    console.log(postData);
    return this.http.post(
      `${environment.Api_core}/vehicle/AddVehicle`,
      postData
    );
  }

  getVehicaleDriver(): Observable<IResponse<ICAR[]>> {

    return this.http.get<IResponse<ICAR[]>>(`${environment.Api_core}/vehicle/GetVehDriver/`+this.idd);

  }

  GetAllForUpdate(driID:number): Observable<IResponse<ICAR[]>> {

    return this.http.get<IResponse<ICAR[]>>(`${environment.Api_core}/vehicle/GetAllForUpdate/`+driID+'/'+this.idd);

  }
  getAllDriver(): Observable<IResponse<IDriver[]>> {
    // console.log(this.http.get<IResponse<ICAR[]>>(`${environment.Api_core}`))
    return this.http.get<IResponse<IDriver[]>>(`${environment.Api_core}/Driver/GetAllDetails/`+this.idd);
  }

  getAllDriverCompany(): Observable<IResponse<IDriverCompany[]>> {
    // console.log(this.http.get<IResponse<ICAR[]>>(`${environment.Api_core}`))
    return this.http.get<IResponse<IDriverCompany[]>>(`${environment.Api_core}/Driver/GetAllDetails/`+this.idd);
  }
   getAllDrivers(): Observable<IResponse<IDriver[]>> {
    // console.log(this.http.get<IResponse<ICAR[]>>(`${environment.Api_core}`))
    return this.http.get<IResponse<IDriver[]>>(`${environment.Api_core}/Driver/GetAll/`);
  }

  getAllDriverWithOrder(): Observable<IResponse<IDriver[]>> {
    // console.log(this.http.get<IResponse<ICAR[]>>(`${environment.Api_core}`))
    return this.http.get<IResponse<IDriver[]>>(`${environment.Api_core}/Driver/GetAllWithorder/`+this.idd);
  }

  GetDriverDirection(): Observable<IResponse<IDriver[]>> {
    // console.log(this.http.get<IResponse<ICAR[]>>(`${environment.Api_core}`))
    return this.http.get<IResponse<IDriver[]>>(`${environment.Api_core}/Driver/GetDriverDirection/`+this.idd);
  }

  getDriverbyID(id: number): Observable<IResponse<IDriver>> {
    return this.http.get<IResponse<IDriver>>(`${environment.Api_core}/Driver/GetDriverByID/` + id);
  }

  deleteDriver(id: number) {
    return this.http.delete(
      `${environment.Api_core}/Driver/DeleteVehicle/` + id
    );
  }

  updateDriver(postData: IDriver, id: number) {
    console.log(postData);
    return this.http.put(
      `${environment.Api_core}/Driver/UpdateVehicle/` + id,
      postData
    );
  }

  addDriver(postData: IDriver) {
    // const httpOptions = {
    //   method: 'POST',

    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     //,'Accept':' */*'
    //     //,'Authorization': 'my-auth-token'
    //   }),
    // };

    console.log(postData);
    return this.http.post(
      `${environment.Api_core}/Driver/AddDriver`,
      postData
    );
  }

  getfaq(): Observable<Faq[]> {
    return this.http.get<Faq[]>(`${environment.Api_core}/QusAns/GetAllAsk`);
  }

 getAllEmirates(): Observable<IResponse<IEmirates[]>>{
    // console.log(this.http.get<IDriver[]>(`${environment.Api_core}`))
    return this.http.get<IResponse<IEmirates[]>>(`${environment.Api_core}/Emirates/GetAllEmirates`);
  }


  getAllPricefilter(from:string , time:string): Observable<IResponse<IListPrice[]>> {
    // console.log(this.http.get<ICAR[]>(`${environment.Api_core}`))
    var id =  localStorage.getItem('compId');

    return this.http.get<IResponse<IListPrice[]>>(`${environment.Api_core}/Price/GetAllFilter/`
    +this.idd+
    '/' +
    from+
    '/'+
    time);
    // .pipe(map(response=> response),

    //  catchError(this.handleError)
    // );
  }
  getAllPrice(): Observable<IResponse<IPriceComp[]>> {
    var id =  localStorage.getItem('compId');

    return this.http.get<IResponse<IPriceComp[]>>(`${environment.Api_core}/Price/GetAllDetails/`+this.idd);

  }


  getAllPriceFrom(from:string): Observable<IResponse<IPriceComp[]>> {
    var id =  localStorage.getItem('compId');

    return this.http.get<IResponse<IPriceComp[]>>(`${environment.Api_core}/Price/GetFromPrice/`+this.idd
    +'/'
    +from);
  }

  getPricebyID(id: number): Observable<ICAR> {
    return this.http.get<ICAR>(`${environment.Api_core}/Price/GetById/` + id);
  }

  deletePrice(id: number) {
    return this.http.delete(
      `${environment.Api_core}/Price/DeleteVehicle/` + id
    );
  }

  updatePrice(postData: IPriceComp) {
    console.log(postData);
    return this.http.put(
      `${environment.Api_core}/Price/UpdatePrice`,
      postData
    );
  }

  addPrice(postData: IPriceComp) {
    console.log(postData);
    return this.http.post(
      `${environment.Api_core}/Price/AddPrice`,
      postData
    );
  }
  // saveToken(token: any) {
  //   localStorage.setItem('token', token);
  // }

  // getToken() {
  //   return localStorage.getItem('token');
  // }

  // isAuthenticated() {
  //   if (this.getToken()) {
  //     return true;
  //   }
  //   return false;
  // }
}
