import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IorderUser } from 'src/app/Models/iorder-user';
import { IUser } from 'src/app/Models/iuser';
import { OrderService } from 'src/app/Services/order.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-driver-details-order',
  templateUrl: './driver-details-order.component.html',
  styleUrls: ['./driver-details-order.component.css']
})
export class DriverDetailsOrderComponent implements OnInit {
  id: number = 0;

  idOrder =localStorage.getItem('orderId')

  orderDetails:IorderUser={
    orderId :0,
    orderNumber :'',
    reciverName :'',
    reciverPhone :'',
    reciverEmail :'',
    reciverAddress :'',
    description:'',
    orderCost:0,
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
  constructor(private route: ActivatedRoute,
    private UserService: UserService,
    private orderservices: OrderService,
    ) {
      if(this.idOrder != null)
      this.id=parseInt(this.idOrder)

    }
  ngOnInit(): void {
    this.getDetails()

  }

  getDetails(){
    this.orderservices.GetOrderByIDDetails(this.id).subscribe(
      (response) => {
        console.log(response.returnObject);
        console.log(response.returnObject.createdOn);

this.orderDetails=response.returnObject

      },
      (err) => {
        console.log(err)
      }
    );
    this.UserService.getUserByID().subscribe(
      (response) => {
        console.log(response.returnObject);

        this.UserInfo=response.returnObject
      },
      (err) => {
        // console.log(err)
      }
    );
  }
}
