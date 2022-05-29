import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDriver } from 'src/app/Models/idriver';
import { DriverService } from 'src/app/Services/driver.service';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.css'],
})
export class DriverProfileComponent implements OnInit {
  driverInfo: IDriver = {
    driverName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    employee: '',
    carPlate: '',
    companyId: 0,
    driverId: 0,
    vehicleId: 0,
    from: '',
    to: '',
    vehicle: {
      capacity:0,
    classfication:"",
    carPlate:"",
    companyId:0,
     size: 0,
    dimension: 0,
    vehicleClassficactionID:0
    },
  };
  settingBool:boolean=false

  constructor(private DriverService: DriverService) {}

  ngOnInit(): void {
    this.getInfo()
  }
  onSubmit(form:NgForm){
    // console.log('this.UserInfo')
    // console.log(this.UserInfo)

        // this.UserService.updateUser(this.UserInfo).subscribe(
        //   (response) => {
        //     // console.log(response.returnObject);

        //     this.UserInfo=response.returnObject
        //     this.toster.success('Item Updated successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})

        //     this.settingBool=false

        //   },
        //   (err) => {
        //     console.log(err)
        //   }
        // );
      }
  getInfo() {
    this.DriverService.getDriverInfo().subscribe(
      (response) => {
        this.driverInfo = response.returnObject;
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  setting(){
    this.settingBool=true
      }
}
