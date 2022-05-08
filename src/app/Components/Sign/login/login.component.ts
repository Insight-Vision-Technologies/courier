import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { ILogin, IRegisterResponse } from './../../../Models/iregister-response';
import * as jwtDecode from 'jwt-decode';
import { UserService } from 'src/app/Services/user.service';
import { IUser } from 'src/app/Models/iuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  adminFrm: FormGroup
  // admininfo:User={}
  comp:ILogin={
    email:'',
    password:'',
    username:''
  }

  respon : IRegisterResponse={
    message:'',
    isSuccess:false,
    errors:[]

  }


UserInfo: IUser={
  name:'',
  phone:'',
  city:'',
  country:'',
  email:'',
  addressDetails:'',
}
  constructor(private fb: FormBuilder,private router:Router,private authService:AuthService,
    // private aythService: AuthService,
    private toster:ToastrService,
    private UserService:UserService

   ) {

    this.adminFrm=this.fb.group({

      id:[2],
      Email: new FormControl('',[Validators.required,Validators.email]),
      Password:[''],
      JoinDate:['']


      });
  }

  ngOnInit(): void {
  }


  login(){
    this.router.navigateByUrl('/');

  }
  logForm(form:NgForm){
    // console.log(form.value);
    // console.log(form.value);
    // console.log(this.comp);

    this.comp=form.value

    // console.log(this.comp);

    this.authService.login(this.comp)
    .subscribe(
    res=>{
      console.log(res)

      if(res.isSuccess==false){
        console.log(res.message)

        throw res.message
      }
      else{
      // console.log(res)
      this.respon=res
      // console.log(this.respon.message)

      this.toster.success('Logged In successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})

      // console.log(res)
    localStorage.removeItem('token');

    localStorage.setItem('token', this.respon.message);
    localStorage.removeItem('logg')

    this.authService.getUser()
    console.log("Hello login");
    // console.log(this.authService.UserModel.Role[0]);
    console.log(this.authService.tt.Role);
    console.log(this.authService.tt.Role[0]);
    console.log(this.authService.tt.Role[1]);

    if(this.authService.tt.Role == 'User'){
      console.log('this.tt.CompId');
      this.router.navigate(['/Profile'])
      .then(() => {
        window.location.reload();
      });
      }
      else if(this.authService.tt.Role =='CompanyOwner'){
      console.log('hfhfh');
      this.authService.getUserCompany()

      this.router.navigate(['/Company/Dashboard/home'])
      .then(() => {
          window.location.reload();

        });
      }
    // this.router.navigateByUrl('/')
    //////////ErrorTest/////
    // this.router.navigate(['/'])
    // .then(() => {
    //   window.location.reload();
    // });
      // console.log(res.message)
      this.UserService.getUserByID().subscribe(
        (response) => {
          console.log(response.returnObject);

          this.UserInfo=response.returnObject
    localStorage.removeItem('from');
    localStorage.setItem('from', this.UserInfo.city);

        },
        (err) => {
          // console.log(err)
        }
      );
      }
    },
    error => {

      console.error(error);
      console.log(error);

   }
    )
  }

   tt :any
  testToken(){
  // var token =  'localStorage.getItem('token')';

  var token =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
 this.tt = jwtDecode.default('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImdvZ29AZ21haWwuY29tIiwiUm9sZSI6IkNvbXBhbnlPd25lciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMWE0NWUwMmItYmIwYy00NTQzLTg5YmUtNDQxODBmM2E5MDViIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQ29tcGFueU93bmVyIiwiZXhwIjoxNjQzMTk1NDEwLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAifQ.7X0uy56buASdaU1AMgMRUDozSibj6pliTC4EPPKLx00')
  console.log(this.tt);
  console.log(this.tt.Role);
  console.log(typeof(this.tt));
  // var givenName = decodedToken['given_name'];


  if(token)
    console.log(jwtDecode.default('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'));
  }

}

