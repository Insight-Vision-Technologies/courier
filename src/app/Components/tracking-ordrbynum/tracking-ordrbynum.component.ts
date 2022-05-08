import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IorderUser } from 'src/app/Models/iorder-user';
import { OrderService } from 'src/app/Services/order.service';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-tracking-ordrbynum',
  templateUrl: './tracking-ordrbynum.component.html',
  styleUrls: ['./tracking-ordrbynum.component.css']

})



export class TrackingOrdrbynumComponent implements OnInit {
  bgColor:string='linear-gradient(to right, #ff6a5b 10%, #da184f 90%);'
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
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  idOrder =localStorage.getItem('orderId')
  constructor( private router: Router,
    private orderService:OrderService,
    private UserService:UserService,
    ) {
    // this.id = this.router.getCurrentNavigation()?.extras.state?.orderId;

    console.log('idddd' + this.id);
    if(this.idOrder != null)
    this.id=parseInt(this.idOrder)
   }

  ngOnInit(): void {
    this.GetOrder()
  this.bgColor='#ec4155'

  }

  GetOrder(){
    this.orderService.getOrderByID(this.id).subscribe(
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

  returnOrder(){
    this.UserService.returnOrder().subscribe(
      (response) => {

        console.log(response.returnObject);

      },
      (err) => {
        console.log(err);
      }
    );
  }


  cancleOrder(){
    this.UserService.cancleOrder().subscribe(
      (response) => {

        console.log(response.returnObject);

      },
      (err) => {
        console.log(err);
      }
    );
  }
}
