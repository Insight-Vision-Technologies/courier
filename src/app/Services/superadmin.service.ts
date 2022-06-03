import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAdminPricing } from '../Models/iadmin-pricing';
import { IResponse } from '../Models/iresponse';
import { IFeatures } from '../Models/ifeatures';

@Injectable({
  providedIn: 'root'
})
export class SuperadminService {

  adminPriceId = 1;
  constructor(private http: HttpClient) { }

  getAdminPricing(): Observable<IResponse<any[]>> {
    return this.http.get<IResponse<any[]>>(
      `${environment.Api_core}/AdminPricing/GetAdminPricing/` + this.adminPriceId
    );
  }
  UpdateAdminPricing(formData: FormData): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const httpOptions = {
      headers: headers,
    };
    console.log('here');
    console.log(formData);
    return this.http.put(
      `${environment.Api_core}/AdminPricing/UpdateAdminPricing`,
      formData,
      httpOptions
    );
  }
   getAllFeatures(): Observable<IResponse<any[]>> {
    return this.http.get<IResponse<any[]>>(
      `${environment.Api_core}/Features/GetAllFeatures`
    );
   }
   getFeaturesById(id:any): Observable<IResponse<any[]>> {
    return this.http.get<IResponse<any[]>>(
      `${environment.Api_core}/Features/GetFeatureById/`+id
    );
   }
   DeleteFeature(id: number) : Observable<IResponse<any[]>>{
    return this.http.delete<IResponse<any[]>>(
      `${environment.Api_core}/Features/DeleteFeature/`+id
    );
  }

   AddFeatures(formData: FormData): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const httpOptions = {
      headers: headers,
    };
    console.log('here');
    console.log(formData);
    return this.http.post(
      `${environment.Api_core}/Features/AddFeatures`,
      formData,
      httpOptions
    );
  }
  UpdateFeatures(formData: FormData): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const httpOptions = {
      headers: headers,
    };
    console.log('here');
    console.log(formData);
    return this.http.put(
      `${environment.Api_core}/Features/UpdateFeatures`,
      formData,
      httpOptions
    );
  }
   AddRatingQuestion(formData: FormData): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const httpOptions = {
      headers: headers,
    };
    console.log('here');
    console.log(formData);
    return this.http.post(
      `${environment.Api_core}/RatingQuestion/AddRatingQuestion`,
      formData,
      httpOptions
    );
  }
  UpdateRatingQuestion(formData: FormData): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const httpOptions = {
      headers: headers,
    };
    console.log('here');
    console.log(formData);
    return this.http.put(
      `${environment.Api_core}/RatingQuestion/UpdateRatingQuestion`,
      formData,
      httpOptions
    );
  }
  getAllRatingQuestion(): Observable<IResponse<any[]>> {
    return this.http.get<IResponse<any[]>>(
      `${environment.Api_core}/RatingQuestion/GetAllRatingQuestion`
    );
   }
   getRatingQuestionById(id:any): Observable<IResponse<any[]>> {
    return this.http.get<IResponse<any[]>>(
      `${environment.Api_core}/RatingQuestion/GetRatingQuestionById/`+id
    );
   }
   deleteRatingQuestion(id: number) : Observable<IResponse<any[]>>{
    return this.http.delete<IResponse<any[]>>(
      `${environment.Api_core}/RatingQuestion/DeleteRatingQuestion/`+id
    );
   }

  AddAvailableArea(formData: FormData): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const httpOptions = {
      headers: headers,
    };
    console.log('here');
    console.log(formData);
    return this.http.post(
      `${environment.Api_core}/AvailableAreas/AddAvailableAreas`,
      formData,
      httpOptions
    );
  }
  UpdateAvailableArea(formData: FormData): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const httpOptions = {
      headers: headers,
    };
    console.log('here');
    console.log(formData);
    return this.http.put(
      `${environment.Api_core}/AvailableAreas/UpdateAvailableAreas`,
      formData,
      httpOptions
    );
  }
  getAllAvailableArea(): Observable<IResponse<any[]>> {
    return this.http.get<IResponse<any[]>>(
      `${environment.Api_core}/AvailableAreas/GetAllAvailableAreas`
    );
   }
 
   GetAllAvailableCities(): Observable<IResponse<any[]>> {
    return this.http.get<IResponse<any[]>>(
      `${environment.Api_core}/AvailableAreas/GetAllAvailableCities`
    );
   }
   getAvailableAreaById(id:any): Observable<IResponse<any[]>> {
    return this.http.get<IResponse<any[]>>(
      `${environment.Api_core}/AvailableAreas/GetAvailableAreaById/`+id
    );
   }
   deleteAvailableArea(id: number) : Observable<IResponse<any[]>>{
    return this.http.delete<IResponse<any[]>>(
      `${environment.Api_core}/AvailableAreas/DeleteAvailableArea/`+id
    );
   }
   UpdateAdminSettings(formData: FormData): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const httpOptions = {
      headers: headers,
    };
    console.log('here');
    console.log(formData);
    return this.http.put(
      `${environment.Api_core}/SuperAdminSettings/UpdateSuperAdminSettings`,
      formData,
      httpOptions
    );
  }
  getAllAdminSettings(): Observable<IResponse<any[]>> {
    return this.http.get<IResponse<any[]>>(
      `${environment.Api_core}/SuperAdminSettings/GetAllSuperAdminSettings`
    );
  }
   getAdminSettingsById(id:any): Observable<IResponse<any[]>> {
    return this.http.get<IResponse<any[]>>(
      `${environment.Api_core}/AvailableAreas/GetAvailableAreaById/`+id
    );
   }
   deleteAdminSettings(id: number) : Observable<IResponse<any[]>>{
    return this.http.delete<IResponse<any[]>>(
      `${environment.Api_core}/AvailableAreas/DeleteAvailableArea/`+id
    );
   }

  AddIncludeService(formData: FormData): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const httpOptions = {
      headers: headers,
    };
    console.log('here');
    console.log(formData);
    return this.http.post(
      `${environment.Api_core}/IncludeServices/AddIncludeService`,
      formData,
      httpOptions
    );
  }
  UpdateIncludeService(formData: FormData): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const httpOptions = {
      headers: headers,
    };
    console.log('here');
    console.log(formData);
    return this.http.put(
      `${environment.Api_core}/IncludeServices/UpdateIncludeService`,
      formData,
      httpOptions
    );
  }
  getAllIncludeService(): Observable<IResponse<any[]>> {
    return this.http.get<IResponse<any[]>>(
      `${environment.Api_core}/IncludeServices/GetAllIncludeServices`
    );
   }
   getIncludeServiceById(id:any): Observable<IResponse<any[]>> {
    return this.http.get<IResponse<any[]>>(
      `${environment.Api_core}/IncludeServices/GetIncludeServiceById/`+id
    );
   }
   deleteIncludeService(id: number) : Observable<IResponse<any[]>>{
    return this.http.delete<IResponse<any[]>>(
      `${environment.Api_core}/IncludeServices/DeleteIncludeService/`+id
    );
   }
}
