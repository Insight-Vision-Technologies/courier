import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IDriVehRecord } from 'src/app/Models/idri-veh-record';
import { IReport } from 'src/app/Models/ireport';
import { CompanyService } from 'src/app/Services/company.service';
import { DialogReportComponent } from '../dialog-report/dialog-report.component';

@Component({
  selector: 'app-cardeatails',
  templateUrl: './cardeatails.component.html',
  styleUrls: ['./cardeatails.component.css']
})
export class CardeatailsComponent implements OnInit {
  driver:boolean=true
  report:boolean=true
  reportInfo:IReport[]=[]

 Reportitem:IReport={
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

  id:number = this.route.snapshot.params.id;

  constructor(private router: Router,
    public dialog: MatDialog,
    private CompService:CompanyService,
    private route: ActivatedRoute,

    ) { }

  ngOnInit(): void {
    this.getDriVehRecord()
    // this.getreport()
  }

  home() {
    this.router.navigateByUrl('Company/Dashboard/cars');
  }

  name:string=''
  showreport(item:IReport){
    this.Reportitem=item
    this.report=false
    console.log(this.Reportitem)
  }
  // VehID = localStorage.getItem('compId');

  addReport(){
    // localStorage.setItem('vehId',this.id.toString())
    const dialogRef = this.dialog.open(DialogReportComponent, {
      width: '700px',
      disableClose: false,
      // margin: '0 auto'
      // disableClose: true,
      // hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
    this.getreport();

      // console.log(`Dialog result: ${result}`);
    });
  }

  DriverVehRecordInfi:IDriVehRecord[]=[]
 async getDriVehRecord(){
   await this.CompService.getDriVehRecord(this.id).subscribe(
      (response) => {
        console.log(response);
        if(response.returnObject.length != 0){
          this.DriverVehRecordInfi=response.returnObject
          console.log(this.DriverVehRecordInfi)
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
    this.CompService.getReport(this.id).subscribe(
      (response) => {
        console.log(response);
        if(response.returnObject.length != 0){
          this.reportInfo=response.returnObject
          console.log(this.reportInfo)
        }

        else {
        console.log("no data")
        }
      },
      (err) => {
        console.log(err)
      }
    );
  }

  getreport(){
    this.CompService.getReport(this.id).subscribe(
      (response) => {
        console.log(response);
        if(response.returnObject.length != 0){
          this.reportInfo=response.returnObject
          console.log(this.reportInfo)
        }

        else {
        console.log("no data")
        }
      },
      (err) => {
        console.log(err)
      }
    );
  }
}
