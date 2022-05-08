import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrderPrice } from 'src/app/Models/iorder';
import { IorderUser } from 'src/app/Models/iorder-user';
import { IUser } from 'src/app/Models/iuser';
import { OrderService } from 'src/app/Services/order.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private UserService: UserService,
    private OrderService: OrderService,
) { }
id:number = this.route.snapshot.params.id;

orderDetails:IorderUser={
  orderId :0,
  orderNumber :'',
  reciverName :'',
  reciverPhone :'',
  reciverEmail :'',
  description:'',
  orderCost:0,
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
  createdOn:new Date,
  priceCost:0,
  companyName:'',
  userName:'',
  user:{
    email : '',
    addressDetails : '',
  name : '',
  phone : '',
  city : '',
  country : '',

  }

}

UserInfo: IUser={
  name:'',
  phone:'',
  city:'',
  country:'',
  email:'',
  addressDetails:'',
}

orderPriceDetails:IOrderPrice = {
  orderPriceDetailsID : 0,
  typeCost : 0,
  sizeCost : 0,
  timeCost : 0,
  orderCost : 0,
  totalCost : 0,
  orderId : 0,
  orderNumber : '',
  description:'',

  createdOn : new Date()
}

ngOnInit(): void {
  this.getDetails()
}
  printPage(){

    window.print();
  }
  getDetails(){
    this.UserService.getOrderByID(this.id).subscribe(
      (response) => {
        console.log(response.returnObject);

this.orderDetails=response.returnObject

      },
      (err) => {
        console.log(err)
      }
    );
    this.UserService.getUserByID().subscribe(
      (response) => {
        // console.log(response.returnObject);

        this.UserInfo=response.returnObject
      },
      (err) => {
        // console.log(err)
      }
    );

    this.OrderService.GetOrderPriceDetailsComp(this.id).subscribe(
      (response) => {
        console.log(response.returnObject);
this.orderPriceDetails=response.returnObject

      },
      (err) => {
        console.log(err)
      }
    );
  }

}
