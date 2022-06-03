import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IRegister } from 'src/app/Models/iregister-response';
import { IUser } from 'src/app/Models/iuser';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';
import { IRegisterResponse } from './../../../Models/iregister-response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
 hide = true;
 hideConfirm = true;

 comp:IRegister={
  email:'',
  password:'',
  confirmPassword:'',
  phone:'',
  addressDetails:'',
  city:'',
  country:'',
  name:'',
  role:['User']
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
  constructor(private aythService: AuthService,
    private toster:ToastrService,
    private router: Router,
    private UserService:UserService,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
    // Mohammad
    // encode
    // save
    // read the encoded value
    // decode the value
    // log the value on the consloe
    localStorage.setItem('name', 'my name');
    localStorage.getItem('name');
    localStorage.removeItem('name');
  }

  logForm(form: NgForm){
    console.log(form.value);
    console.log(this.comp);

    this.comp.addressDetails=form.value.addressDetails
    this.comp.country=form.value.country
    this.comp.name=form.value.name
    this.comp.phone=form.value.phone
    this.comp.password=form.value.password
    this.comp.confirmPassword=form.value.confirmPassword
    this.comp.email=form.value.email
    this.comp.city=form.value.city

    console.log(this.comp.role);
    console.log(this.comp);

    this.aythService.Register(this.comp)
    .subscribe(
    res=>{
      console.log(res)
      this.respon=res
      console.log(this.respon.message)
      if(res.isSuccess==false){
        console.log(res.message)

        throw res.errors
      }
      else{
      this.toster.success('Registered Successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})

      console.log(res)
    localStorage.removeItem('logg')

    localStorage.removeItem('token');

    localStorage.setItem('token', this.respon.message);
    this.authService.getUser()

    this.router.navigate(['/'])
    .then(() => {
      window.location.reload();
    });
      console.log(res.message)

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
    //localStorage.setItem('name', 'my name');
  }
}
