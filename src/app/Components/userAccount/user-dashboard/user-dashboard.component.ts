import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { Iorder } from 'src/app/Models/iorder';
import { IorderUser } from 'src/app/Models/iorder-user';
import { CompanyService } from 'src/app/Services/company.service';
import { OrderService } from 'src/app/Services/order.service';
import { UserService } from 'src/app/Services/user.service';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  orderCount:number=0
  TrackorderCount:number=0
  PaymentCount:number=0
  orderList:IorderUser[]=[]
  constructor(private router: Router,
    private UserService: UserService,
    private OrderService: OrderService,
    public loaderService: LoaderService,
    public dialog: MatDialog,

    ) {}

  ngOnInit(): void {
    this.getInfoCard()

  }
  getInfoCard(){

    this.UserService.getCountUser().subscribe(
      (res) => {
        this.orderCount=res.returnObject
      },
      (err) => {
        console.log(err)
      }
    );
    this.OrderService.GetOrderUser().subscribe(
      (res) => {
        this.orderList=res.returnObject
        console.log(this.orderList)
      },
      (err) => {
        console.log(err)
      }
    );
    this.UserService.CountTrackOrder().subscribe(
      (res) => {
        console.log(res.returnObject)
        this.TrackorderCount=res.returnObject
      },
      (err) => {
        console.log(err)
      }
    );
    this.UserService.CountPayment().subscribe(
      (res) => {
        console.log(res.returnObject)
        this.PaymentCount=res.returnObject
      },
      (err) => {
        console.log(err)
      }
    );

    this.UserService.RateOrder().subscribe(
      (res) => {
        console.log(res.returnObject)

        res.returnObject.forEach(element => {

          this.Rating(element.orderId,element.orderNumber)
        });

      },
      (err) => {
        console.log(err)
      }
    );
  }



  Rating(id:number,numberOrder:string) {
    console.log("order ID is  ",id)
    const dialogRef = this.dialog.open(RatingComponent, {
      width: '500px',
      disableClose: true,
      height : 'auto',
      // margin: '0 auto'
      // disableClose: true,
      // hasBackdrop: true,
      data: { orderID: id ,
      orderName:numberOrder},
    });

    dialogRef.afterClosed().subscribe((result) => {

      // console.log(`Dialog result: ${result}`);
    });
  }

}
