import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { ICompanyTodayOrder } from 'src/app/Models/icompany';
import { IOrderAdmin } from 'src/app/Models/iorder-admin';
import { AdminService } from 'src/app/Services/admin.service';
import { CompanyService } from 'src/app/Services/company.service';

export interface ICardsDash {
  title: string;
  NoDocument: number;
  Icon: string;
  ColorBck: string;
  clickFun: string;
}

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  orderCount:number=0
  couriersCount:number=0
  userCount:number=0
  countTotalRate:number=0
  vehicalesCount:number=0
  orderList:IOrderAdmin[]=[]

constructor(private router: Router,
  private AdminService: AdminService,
  public loaderService: LoaderService,
  ) {}

  ngOnInit(): void {
    this.getInfoCard()

  }


  getInfoCard(){

    this.AdminService.CountOrders().subscribe(
      (res) => {
        this.orderCount=res.returnObject
      },
      (err) => {
        console.log(err)
      }
    );

  this.AdminService.CountCouriers().subscribe(
      (res) => {
        this.couriersCount=res.returnObject
      },
      (err) => {
        console.log(err)
      }
    );

    this.AdminService.CountUser().subscribe(
      (res) => {
        this.userCount=res.returnObject
      },
      (err) => {
        console.log(err)
      }
    );

    this.AdminService.CountVehicales().subscribe(
      (res) => {
        this.vehicalesCount=res.returnObject
      },
      (err) => {
        console.log(err)
      }
    );

    this.AdminService.GetActiveOrders().subscribe(
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
   
    this.AdminService.CountTotalRate().subscribe(
      (response) => {
          console.log(response.returnObject)

          this.countTotalRate=response.returnObject
          
       },
      (err) => {
        console.log(err)
      }
    );



}
}
