import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { IRegister } from 'src/app/Models/iregister-response';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/company.service';
import { ICompany } from 'src/app/Models/icompany';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  changee: boolean = true;

  hide = true;
 formData: FormData = new FormData();
  nxtstep:boolean=true;
  constructor(private router: Router,private authService: AuthService,private compService: CompanyService,
    private toster:ToastrService
    ) {}

  ngOnInit(): void {}

  changedesign() {
    this.changee = !this.changee;
  }

  logForm(value: any) {
    console.log(value);
    //localStorage.setItem('name', 'my name');
  }

  //url; //Angular 8
  url: any = '../../../assets/img/fp.JPG'; //Angular 11, for stricter type
  msg = '';

  //selectFile(event) { //Angular 8
  selectFile(event: any) {
    console.log('shs');
    console.log(event);

    //Angular 11, for stricter type
    if (event.target.files) {
      const fileToUpload:File = event.target.files[0];
       this.formData.append("File", fileToUpload,fileToUpload.name);
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = event.target?.result;
      };
    }
  }

  firstfrm(){
    this.nxtstep=!this.nxtstep;
  }
compInfo:ICompany={
  companyId:0,
  companyName:'',
  phone:'',
  photo:null,
  userID:'',
  email:'',
  country:'',
  city:''
  }

  onSubmit(form:NgForm){
    console.log(form.value)
    console.log(this.authService.UserModel.UserId)

    // this.formData.append("companyId", this.compID);
    this.formData.append("companyName", form.value.CompanyName);
    this.formData.append("email", form.value.Email);
    this.formData.append("phone", form.value.Phone);
    this.formData.append("country", form.value.Country);
    this.formData.append("city", form.value.City);
    this.formData.append("password", form.value.Password);
    this.formData.append("confirmPassword", form.value.Password);
    this.formData.append('Role','CompanyOwner')

    /// no need
    this.formData.append("userID", this.authService.UserModel.UserId);
    this.formData.append("license",  form.value.license);

    // this.compInfo.city=form.value.City
    // this.compInfo.companyName=form.value.CompanyName
    // this.compInfo.country=form.value.Country
    // this.compInfo.phone=form.value.Phone
    // this.compInfo.photo=null
    // this.compInfo.email=form.value.Email
    // this.compInfo.userID=this.authService.UserModel.UserId

    console.log(this.compInfo)

    this.nxtstep=!this.nxtstep;

    // this.router.navigateByUrl('/Company/Dashboard/home')

  }

 async onSubmitSecond(form:NgForm){
    console.log(form.value)
console.log(this.compInfo)
console.log(this.formData)
   await this.compService.RegisterCompany(this.formData)
    .subscribe(
    res=>{
      // console.log("res")
      // console.log(res)
      // console.log(res.token)
        localStorage.removeItem('token');
     localStorage.setItem('token',res.message);
     this.authService.getUserCompany()

      this.toster.success('Item added successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
      this.router.navigate(['/Company/Dashboard/home'])
      .then(() => {
          window.location.reload();

        });

      console.log(res)
    //  localStorage.removeItem('compId');
    //  localStorage.setItem('compId',res.message);

    },
    error => {
      console.error(error);
      console.log(error);
      console.log("sdfghgfdsa");

   }
  )
    // this.router.navigateByUrl('/Company/Dashboard/home')
  //   this.aythService.addVehicle(this.comp)
  //   .subscribe(
  //   res=>{
  //     console.log("res")
  //     this.toster.success('Item added successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})

  //     console.log(res)
  //   },
  //   error => {
  //     console.error(error);
  //     console.log(error);

  //  }
  // )
  }
}
