import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IorderUser } from 'src/app/Models/iorder-user';
import { CompanyService } from 'src/app/Services/company.service';
import { DriverService } from 'src/app/Services/driver.service';
import { OrderService } from 'src/app/Services/order.service';
// import {StepperModule } from 'cdbangular';


@Component({
  selector: 'app-driver-order',
  templateUrl: './driver-order.component.html',
  styleUrls: ['./driver-order.component.css']
})
export class DriverOrderComponent implements OnInit {

  bgColor:string='#da184f'
  driverID:number=0

  OrderInfo:IorderUser[]=[]
  constructor( private router: Router,
    private orderService:OrderService,
    private DriverService:DriverService,
    ) {
      var id= localStorage.getItem('driverId')

      if(id){
        this.driverID=parseInt(id)
      }

     }

  ngOnInit(): void {

    this.getOrder()
  }


  getOrder(){
    this.DriverService.getDriverOrder().subscribe
    (res=> {

      this.OrderInfo=res.returnObject
      console.log(this.OrderInfo)
    }


    )
  }

  Details(idOrder:number){

    localStorage.removeItem('orderId')
    localStorage.setItem('orderId',idOrder.toString())
    this.router.navigateByUrl('DriverPages/ActiveOrder')
    console.log(idOrder)
  }
}
