import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IorderUser } from 'src/app/Models/iorder-user';
import { AdminService } from 'src/app/Services/admin.service';
import { AdminorderDetailsComponent } from '../adminorder-details/adminorder-details.component';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {

  orderList:IorderUser[]=[]
  constructor(public dialog: MatDialog,
  private AdminService: AdminService,
  ) { }

  ngOnInit(): void {
    this.getInfo()

  }
  Viewdetails(orderID:number){
    const dialogRef = this.dialog.open(AdminorderDetailsComponent,
      {
        width: '1000px',
        disableClose:true,
        data: {
          iddd: orderID,
        },
        // margin: '0 auto'
        // disableClose: true,
        // hasBackdrop: true,
      });

      dialogRef.afterClosed().subscribe(async (result) => {
      console.log('gggggg');
    });
  }

  getInfo(){
    this.AdminService.GetAllOrders().subscribe(
      (response) => {
        if (response.returnObject.length != 0) {
          console.log(response.returnObject)

          this.orderList=response.returnObject

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
