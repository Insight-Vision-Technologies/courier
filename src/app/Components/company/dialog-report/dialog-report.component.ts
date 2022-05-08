import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IName, IReport } from 'src/app/Models/ireport';
import { CompanyService } from 'src/app/Services/company.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';

@Component({
  selector: 'app-dialog-report',
  templateUrl: './dialog-report.component.html',
  styleUrls: ['./dialog-report.component.css']
})
export class DialogReportComponent implements OnInit {

 formData: FormData = new FormData();

 ReportInfo:IReport={
  vehicleReportId: 0,
  date: new Date(),
  time: '',
  cost: 0,
  reportNumber: '',
  driverId: 0,
  driverName: '',
  vehicleId: 0,
  vehicleName: '',
 }

 driverName:IName[]=[]
 vehName:IName[]=[]
  constructor(public dialogRef: MatDialogRef<DialogReportComponent>,
    private CompService: CompanyService,
    private toster:ToastrService) { }

  ngOnInit(): void {

    this.getDriName()
    this.getvehName()
  }

  getDriName(){
    this.CompService.getDriName().subscribe(
      (response) => {
        console.log(response);
        if(response.returnObject.length != 0){
          this.driverName=response.returnObject
          console.log(this.driverName)
        }

        else {
        console.log("no data")
        }

        // this.ProductList2 = response;
        // this.dataSource2 = response;
        // console.log(response);
      },
      (err) => {
        // console.log(err)
      }
    );
  }
  getvehName(){
    this.CompService.getVehName().subscribe(
      (response) => {
        console.log(response);
        if(response.returnObject.length != 0){
          this.vehName=response.returnObject
          console.log(this.driverName)
        }

        else {
        console.log("no data")
        }

        // this.ProductList2 = response;
        // this.dataSource2 = response;
        // console.log(response);
      },
      (err) => {
        // console.log(err)
      }
    );
  }

   onSubmit(form:NgForm){

    this.ReportInfo.driverId=form.value.DriNum
    this.ReportInfo.vehicleId=form.value.VehNum
    this.ReportInfo.cost=form.value.Cost
    this.ReportInfo.date=form.value.Date
    this.ReportInfo.reportNumber=form.value.ReportNo
    this.ReportInfo.time=form.value.Time

    this.CompService.addReport(this.ReportInfo).subscribe(
      (response) => {
        // console.log(response);
        this.toster.success('Item added successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
        this.dialogRef.close();

      },
      (err) => {
        console.log(err)
      }
    );
    console.log(this.ReportInfo)

  }

}
