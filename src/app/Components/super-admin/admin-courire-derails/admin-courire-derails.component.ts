import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICompany } from 'src/app/Models/icompany';
import { ITimeTable } from 'src/app/Models/itime-table';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-courire-derails',
  templateUrl: './admin-courire-derails.component.html',
  styleUrls: ['./admin-courire-derails.component.css']
})
export class AdminCourireDerailsComponent implements OnInit {
  compID:number = this.datra.iddd
  OrderCount:number=0
  CountPayment:number=0
  CountRate:number=0
  CountCompanyOrderHistory:number=0
  OrderOnProcessCount:number=0
  OrderCancleCount:number=0
  CompanyVehicalesCount:number=0
  employeeCount:number=0
  companyInfo:ICompany={
    companyId:0,
    companyName : '',
    email : '',
    phone : '',
    country : '',
    city : '',
    userID:'',
  }
  timeTableList: ITimeTable []=[]

  constructor(
    public dialogRef: MatDialogRef<AdminCourireDerailsComponent>,
    @Inject(MAT_DIALOG_DATA) public datra: any,
  private AdminService: AdminService,

  ) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){
    this.AdminService.GetCompanyByID(this.compID).subscribe(
      (response) => {
        if (response.returnObject != null) {
          console.log(response.returnObject)

          this.companyInfo=response.returnObject

        }

        else {
        console.log("no data")
        }      },
      (err) => {
        console.log(err)
      }
    );

    this.AdminService.CountCompanyEmployee(this.compID).subscribe(
      (response) => {
        if (response.returnObject != null) {
          console.log(response.returnObject)

          this.employeeCount=response.returnObject

        }

        else {
        console.log("no data")
        }      },
      (err) => {
        console.log(err)
      }
    );

    this.AdminService.CountCompanyOrderCancle(this.compID).subscribe(
      (response) => {
        if (response.returnObject != null) {
          console.log(response.returnObject)

          this.OrderCancleCount=response.returnObject

        }

        else {
        console.log("no data")
        }      },
      (err) => {
        console.log(err)
      }
    );

    this.AdminService.CountCompanyVehicales(this.compID).subscribe(
      (response) => {
        if (response.returnObject != null) {
          console.log(response.returnObject)

          this.CompanyVehicalesCount=response.returnObject

        }

        else {
        console.log("no data")
        }      },
      (err) => {
        console.log(err)
      }
    );

    this.AdminService.CountCompanyOrderOnProcess(this.compID).subscribe(
      (response) => {
        if (response.returnObject != null) {
          console.log(response.returnObject)

          this.OrderOnProcessCount=response.returnObject

        }

        else {
        console.log("no data")
        }      },
      (err) => {
        console.log(err)
      }
    );

    this.AdminService.CountCompanyOrderHistory(this.compID).subscribe(
      (response) => {
        if (response.returnObject != null) {
          console.log(response.returnObject)

          this.CountCompanyOrderHistory=response.returnObject

        }

        else {
        console.log("no data")
        }      },
      (err) => {
        console.log(err)
      }
    );

    this.AdminService.CountRate(this.compID).subscribe(
      (response) => {
        if (response.returnObject != null) {
          console.log(response.returnObject)

          this.CountRate=response.returnObject

        }

        else {
        console.log("no data")
        }      },
      (err) => {
        console.log(err)
      }
    );

    this.AdminService.getOrderCount(this.compID).subscribe(
      (response) => {
        if (response.returnObject != null) {
          console.log(response.returnObject)

          this.OrderCount=response.returnObject

        }

        else {
        console.log("no data")
        }      },
      (err) => {
        console.log(err)
      }
    );

    this.AdminService.GetTimeCompany(this.compID).subscribe(
      (response) => {
        if(response.returnObject.length>0){
          console.log(response.returnObject)

          this.timeTableList=response.returnObject

        }

        else {
        console.log("no data")
        }      },
      (err) => {
        console.log(err)
      }
    );
  }
}
