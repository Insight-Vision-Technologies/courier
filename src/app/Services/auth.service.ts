import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { IRegister } from '../Models/iregister-response';
import { IUserModel } from '../Models/IUserModel';
import { IRegisterResponse, ILogin } from './../Models/iregister-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    this.getUser()
   }
  isLogin : boolean = false;
  checkIfLogged(){

    this.isLogin!=this.isLogin
  }
  Register(postData: IRegister) {

    // console.log(postData);
    return this.http.post<IRegisterResponse>(
      `${environment.Api_core}/Auth/Register`,
      postData
    );
  }

  login(postData: ILogin) {


    // console.log(postData);
    return this.http.post<IRegisterResponse>(
      `${environment.Api_core}/Auth/Login`,
      postData
    );
  }

  UserModel: IUserModel = {
    Email: '',
    UserId:'',
    Role: [],
  };
  UserRole: IUserModel = {
    Email: '',
    UserId:'',
    Role: [],
  };
  tt:any
  token:any
getUser(){
   this.token = localStorage.getItem('token');
  //  console.log(this.token);

    // var givenName = decodedToken['given_name'];

    if (this.token){
    // console.log('this.tt');

     this.tt = jwtDecode(this.token);
    this.UserModel= this.tt
   this.UserRole= this.tt
    // console.log(this.tt);
    // console.log(this.tt.UserId);

    // console.log(this.tt.CompId);
    //      localStorage.removeItem('compId');
    //  localStorage.setItem('compId',this.tt.CompId);
    // console.log(this.tt.Role[1]);
    // console.log(this.UserModel.Role);
    }
}
getUserCompany(){
  this.token = localStorage.getItem('token');
 //  console.log(this.token);


   if (this.token){
   // console.log('this.tt');

    this.tt = jwtDecode(this.token);
   this.UserModel= this.tt
   this.UserRole= this.tt
   // console.log(this.tt);
   // console.log(this.tt.UserId);
   console.log(this.tt.CompId);
    localStorage.removeItem('compId');
    localStorage.setItem('compId',this.tt.CompId);
   // console.log(this.tt.Role[1]);
   // console.log(this.UserModel.Role);
   }
}
}
