import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDirection, IDirectionDriver } from 'src/app/Models/idirection';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-change-direction',
  templateUrl: './change-direction.component.html',
  styleUrls: ['./change-direction.component.css']
})
export class ChangeDirectionComponent implements OnInit {

  DirectionDeleteList: IDirection[] = [];
  DriverList: IDirectionDriver[] = [];
  driverId: number = 0;
  driverIdDelete: number = 0;
  from:string=''
  to:string=''
  constructor(
    public dialogRef: MatDialogRef<ChangeDirectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private CompanyService: CompanyService,

  ) {
    this.driverIdDelete=this.data.driverIdDelete
    this.from=this.data.from
    this.to=this.data.to
    console.log(this.driverIdDelete)
    console.log(this.to)
    console.log(this.data.from)
   }

  ngOnInit(): void {
    this.getDriverOther()
  }


  getDriverOther(){

    this.CompanyService.GetOtherDriver(this.driverIdDelete).subscribe(
      (response) => {
        console.log(response)

        if (response.returnObject.length>0) {
          this.DriverList=response.returnObject
          // this.displayStyle = "block";

          // this.DirectionList=response.returnObject
          console.log(response.returnObject)
        }

      },
      (err) => {
        console.log(err);
      }
    );
  }

  closePopup() {
    console.log(this.driverId)

    this.CompanyService.UpdateDriverDirection(this.driverId,this.driverIdDelete).subscribe(
      (response) => {
        console.log(response)
        this.dialogRef.close();

        if (response.returnObject != null) {

          // this.DirectionList=response.returnObject
          console.log(response.returnObject)
        }

      },
      (err) => {
        console.log(err);
      }
    );
  }


  noAssign(){
    this.CompanyService.NoAssignDirection(this.driverIdDelete).subscribe(
      (response) => {
        console.log(response)
        this.dialogRef.close();

      },
      (err) => {
        console.log(err);
      }
    );

  }
}
