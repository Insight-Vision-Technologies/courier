import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IorderUser } from 'src/app/Models/iorder-user';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.css']
})
export class ActiveOrderComponent implements OnInit {
  id: number = 0;

  orderInfo:IorderUser={
    orderId :0,
    description:'',
    orderCost:0,
    orderNumber:'',
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
  idOrder =localStorage.getItem('orderId')

  constructor(private router: Router,
    private orderService:OrderService,
    ) {
      console.log('idddd' + this.id);
    if(this.idOrder != null)
    this.id=parseInt(this.idOrder)
     }

  ngOnInit(): void {
    this.GetOrder()
  }


  GetOrder(){
    this.orderService.GetOrderByIDDetails(this.id).subscribe(
      (response) => {

        this.orderInfo=response.returnObject
        console.log("Hello",this.orderInfo);
        console.log(this.orderInfo.status);

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
        this.GetOrder()

      },
      (err) => {
        console.log(err);
      }
    );
  }

  moreDetails(){
    this.router.navigateByUrl('DriverPages/OrderDetails');

  }
}
