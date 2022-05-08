import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ICAR } from 'src/app/Models/icar';
import { CRUDTestService } from 'src/app/Services/crudtest.service';

@Component({
  selector: 'app-dialog-car',
  templateUrl: './dialog-car.component.html',
  styleUrls: ['./dialog-car.component.css']
})
export class DialogCarComponent implements OnInit {
  compID =  localStorage.getItem('compId');

  newCar:ICAR={
    capacity:"",
    classfication:"",
    carPlate:"",
    CompanyId:1,
    size: '',
    Dimension: 0,
  }
  car:ICAR={
    capacity:"",
    classfication:"",
    carPlate:"",
    CompanyId:0,
     size: '',
    Dimension: 0,
  }

  tsts:string='test';
  constructor(public dialogRef: MatDialogRef<DialogCarComponent>,
    private CRUDService: CRUDTestService,
    private toster:ToastrService
    ) { }

  ngOnInit(): void { }



  async onSubmit(form:NgForm){

    this.newCar.size=form.value.capacity
    // this.newCar.size=form.value.size
    this.newCar.Dimension=form.value.Dimension
    this.newCar.classfication=form.value.classfication
    this.newCar.carPlate=form.value.carPlate
    this.newCar.CompanyId=1
    console.log(this.newCar)
    if(this.compID) this.newCar.CompanyId=parseInt(this.compID)

     await this.CRUDService.addVehicle(this.newCar)
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
}
