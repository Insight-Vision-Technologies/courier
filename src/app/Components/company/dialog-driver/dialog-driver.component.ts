import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IDriver, IDriverRegister } from 'src/app/Models/idriver';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { ICAR } from 'src/app/Models/icar';
import { IAvailableAreas } from 'src/app/Models/iavailable-areas';
import { SuperadminService } from 'src/app/Services/superadmin.service';

@Component({
  selector: 'app-dialog-driver',
  templateUrl: './dialog-driver.component.html',
  styleUrls: ['./dialog-driver.component.css']
})
export class DialogDriverComponent implements OnInit {

  dataSource:ICAR[]=[]
  compID =  localStorage.getItem('compId');
  allEmirate: any = [];
   newDriver:IDriver={
    driverName : '',
    email : '',
    phone : '',
    dateOfBirth :'',
    employee : '',
    carPlate : '',
    vehicleId : 1,
    companyId:1,
    driverId:0,
    from:'',
    to:'',
    reverse:false,
    vehicle:{
      capacity:0,
    classfication:"",
    carPlate:"",
    companyId:0,
     size: 0,
    dimension: 0,
    vehicleClassficactionID:0
    }
  }

  newDriverRegister:IDriverRegister={
    password: '',
    confirmPassword: '',
    country: '',
    city: '',
    addressDetails: '',
    addressDefult: 0,
    userID: '',
    role: '',
    driverName : '',
    email : '',
    phone : '',
    dateOfBirth :'',
    employee : '',
    carPlate : '',
    vehicleId : 1,
    companyId:1,
    driverId:0,
    from:'',
    to:'',
    reverse:false,
    vehicle:{
      capacity:0,
    classfication:"",
    carPlate:"",
    companyId:0,
     size: 0,
    dimension: 0,
    vehicleClassficactionID:0
    }
  }

  areaDetails: IAvailableAreas []=[]
  constructor(public dialogRef: MatDialogRef<DialogDriverComponent>,
    private CRUDService: CRUDTestService,
    private SuperadminService: SuperadminService,
    private toster: ToastrService) {
    // this.dropdownData();
   this.getAreaDetails();
    }

  ngOnInit(): void {
    this.getVehicle()


  }
  filterData(arr: any) {
    const grouped = arr.reduce((grouping: any, item: any) => {
      grouping[item.emirateEng] =
        (grouping[item.emirateEng] || '') + item.emirateEng;
      return grouping;
    }, {});
    return Object.keys(grouped).map((key) => {
      return grouped[key];
    });
  }
  // dropdownData() {
  //   this.CRUDService.getAllEmirates().subscribe(
  //     (response) => {
  //       console.log('i am all drivers', response);
  //       if (response.returnObject.length != null) {
  //         this.allEmirate = this.filterData(response.returnObject);
  //         console.log(
  //           'I am all driver ',
  //           this.allEmirate,

  //         );
  //       } else {
  //         console.log('no data');
  //       }
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  async onSubmit(form:NgForm){

    if(this.compID) this.newDriver.companyId=parseInt(this.compID)
    this.newDriver.carPlate=form.value.CarPlate
    this.newDriver.dateOfBirth=form.value.DateOfBirth
    this.newDriver.email=form.value.Email
    this.newDriver.phone=form.value.phone
    this.newDriver.driverName=form.value.DriverName
    this.newDriver.from=form.value.from
    this.newDriver.to=form.value.to
    this.newDriver.vehicleId=form.value.CarPlate
    this.newDriver.employee=form.value.employee

    if(this.compID) this.newDriverRegister.companyId=parseInt(this.compID)
    this.newDriverRegister.role='Driver'
    this.newDriverRegister.confirmPassword=this.newDriverRegister.password
    this.newDriverRegister.userID='52'
    this.newDriverRegister.vehicleId=form.value.CarPlate


    console.log(this.newDriverRegister)

     await this.CRUDService.RegisterDriver(this.newDriverRegister)
      .subscribe(
      res=>{
        console.log("res")
        this.toster.success('Item added successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})

        console.log(res)
    this.dialogRef.close();

      },
      error => {
        console.error(error);
        console.log(error);

     }
    )

  }

   getVehicle() {
    // console.log('response');

     this.CRUDService.getVehicaleDriver().subscribe(
      (response) => {
        console.log(response);
        this.dataSource = response.returnObject;

        console.log(response);
      },
      (err) => {
        console.log(err)
      }
    );
    this.dataSource;
  }

  onCheckboxChange(e:any) {

    console.log(e)
    console.log(e.target)

    if (e.target.checked) {
console.log('cjc')
this.newDriver.reverse=true
  }
  else {

    this.newDriver.reverse=false
    console.log('sert')


    }
  }

  
getAreaDetails() {
  this.SuperadminService.GetAllAvailableCities().subscribe(response => {
    console.log("res", response)
    console.log(response.returnObject);
       if (response!= null) {
         this.areaDetails = response.returnObject;
         console.log(this.areaDetails);
       
       }
       else {
        this.areaDetails = response;
console.log("no data")
       }
    },
    error => {
      console.error(error);
      console.log(error);

   })
}
}
