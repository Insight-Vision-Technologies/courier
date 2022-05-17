import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ICAR } from 'src/app/Models/icar';
import { IClassfication } from 'src/app/Models/iclassfication';
import { AdminService } from 'src/app/Services/admin.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';

@Component({
  selector: 'app-dialog-car',
  templateUrl: './dialog-car.component.html',
  styleUrls: ['./dialog-car.component.css']
})
export class DialogCarComponent implements OnInit {
  compID =  localStorage.getItem('compId');

  newCar:ICAR={
    capacity:0,
    classfication:"",
    carPlate:"",
    companyId:0,
     size: 0,
    dimension: 0,
    vehicleClassficactionID:0
  }
  car:ICAR={
    capacity:0,
    classfication:"",
    carPlate:"",
    companyId:0,
     size: 0,
    dimension: 0,
    vehicleClassficactionID:0
  }
  classfication:IClassfication[]=[]

  maxcap:number=0;
  mincap:number=0;
  dimension:number=0;
  vehicleClassfiID:number=0;


  tsts:string='test';
  constructor(public dialogRef: MatDialogRef<DialogCarComponent>,
    private CRUDService: CRUDTestService,
    private AdminService: AdminService,
    private toster:ToastrService
    ) {
      this.getInfo();

    }

     ngOnInit() {
      // this.getInfo();

    }

    ngAfterViewInit() {

    }

    getInfo(){
      this.AdminService.getClassfication().subscribe(
        (response) => {
          if (response.returnObject.length != 0) {
            console.log(response.returnObject)

            this.classfication=response.returnObject

          }

          else {
          console.log("no data")
          }      },
        (err) => {
          console.log(err)
        }
      );
    }

  async onSubmit(form:NgForm){

    this.newCar.size=0
    // this.newCar.size=form.value.size
    this.newCar.dimension=0
    this.newCar.vehicleClassficactionID=this.vehicleClassfiID
    this.newCar.carPlate=form.value.carPlate
    this.newCar.companyId=1
    console.log(this.newCar)
    if(this.compID) this.newCar.companyId=parseInt(this.compID)

     await this.CRUDService.AddVehicale(this.newCar)
      .subscribe(
      res=>{
        console.log("res")
        this.toster.success('Item added successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
        this.dialogRef.close();

        console.log(res)
      },
      error => {
        console.error(error);
        console.log(error);

     }
    )

  }

  fromData(event:any){

    console.log(event)
    console.log(event.value)
    this.vehicleClassfiID=event
    this.classfication.forEach(element => {

      if(element.vehicleClassficactionID==event){
    this.maxcap=element.capacityMax
    this.mincap=element.capacityMin
    this.dimension=element.dimention

      }
    });

  }
}
