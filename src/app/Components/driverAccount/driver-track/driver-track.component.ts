import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IorderUser } from 'src/app/Models/iorder-user';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-driver-track',
  templateUrl: './driver-track.component.html',
  styleUrls: ['./driver-track.component.css']
})
export class DriverTrackComponent implements OnInit {
  bgColor:string='#da184f'
  idOrder =localStorage.getItem('orderId')
  id: number = 0;
  orderInfo:IorderUser={
    orderId :0,
    orderNumber:'',
    description:'',
    orderCost:0,
    reciverName :'',
    senderName :'',
    reciverPhone :'',
    reciverEmail :'',
    reciverAddress :'',
    reciverCity:'',
    time :'',
    type :'',
    from :'',
    to :'',
    amount :0,
    status :0,
    paymentStatus :0,
    paymentBy :'',
    userID :'',
    createdOn:new Date(),
    companyName :'',
    priceCost :0,
    userName : '',
    user:{
      email : '',
    addressDetails : '',
    name : '',
    phone : '',
    city : '',
    country : '',
    }
  }
  constructor(private router: Router,
    private orderService:OrderService) {

      if(this.idOrder != null)
      this.id=parseInt(this.idOrder)
      }

  ngOnInit(): void {

    this.getbYid()
  }

  getbYid(){
    this.orderService.getOrderByID(this.id).subscribe(
      (response) => {

        this.orderInfo=response.returnObject
        console.log("Hello",this.orderInfo.status);
        console.log(response);

      },
      (err) => {
        console.log(err);
      }
    );
  }

  next(){

    this.orderService.UpdateOrderStatus(this.id).subscribe(
      (response) => {

        // this.orderInfo=response.returnObject
        // console.log("Hello",this.orderInfo);
        console.log(response);
        this.getbYid()

      },
      (err) => {
        console.log(err);
      }
    );
  }
}
