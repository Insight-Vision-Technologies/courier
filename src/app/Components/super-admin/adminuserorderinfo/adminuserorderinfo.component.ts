import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IorderUser } from 'src/app/Models/iorder-user';
import { IUserInfo } from 'src/app/Models/iuser-info';
import { AdminService } from 'src/app/Services/admin.service';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-adminuserorderinfo',
  templateUrl: './adminuserorderinfo.component.html',
  styleUrls: ['./adminuserorderinfo.component.css']
})
export class AdminuserorderinfoComponent implements OnInit {
  userID:string = this.datra.iddd
  userList:IUserInfo={
    id : '',
    name : '',
    email : '',
    city : '',
    country : '',
    addressDetails : '',
    phone : '',
   noOrder : 0,
   isActive:true,
   createOn : new Date
  }
  orderList:IorderUser[]=[]

  constructor(public dialogRef: MatDialogRef<AdminuserorderinfoComponent>,
    @Inject(MAT_DIALOG_DATA) public datra: any,
  private AdminService: AdminService,
  private OrderService: OrderService,

    ) { }

  ngOnInit(): void {
    this.getInfo()
  }


  getInfo(){
    this.AdminService.GetUsersInfoByID(this.userID).subscribe(
      (response) => {
        if (response.returnObject != null) {
          console.log(response.returnObject)

          this.userList=response.returnObject

        }

        else {
        console.log("no data")
        }
        },
      (err) => {
        console.log(err)
      }
    );

    this.AdminService.GetOrderUser(this.userID).subscribe(
      (res) => {
        this.orderList=res.returnObject
        console.log(this.orderList)
      },
      (err) => {
        console.log(err)
      }
    );
  }

}
