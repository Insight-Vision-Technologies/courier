import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverService } from 'src/app/Services/driver.service';

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.component.html',
  styleUrls: ['./driver-login.component.css']
})
export class DriverLoginComponent implements OnInit {

  constructor(private DriverService : DriverService,
    private router: Router,) { }

  ngOnInit(): void {
  }

  email:string=''
  password:string=''

  logForm(form:NgForm){
    console.log(form.value);

    this.email=form.value.email
    this.password=form.value.password

    this.DriverService.DriverLogin(this.email,this.password).subscribe(
      (response) => {

        // this.orderInfo=response.returnObject
        // console.log("Hello",this.orderInfo);
        console.log(response);
        localStorage.setItem('driverId',response.returnObject.driverId.toString())
    this.router.navigate(['DriverPages/DriverDashboard'])
      .then(() => {
        window.location.reload();
      });

        // this.getbYid()

      },
      (err) => {
        console.log(err);
      }
    );
  }
}
