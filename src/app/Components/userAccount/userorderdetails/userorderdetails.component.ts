import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IOrderPrice } from 'src/app/Models/iorder';
import { IOrderDriverInfo, IorderUser } from 'src/app/Models/iorder-user';
import { IUser } from 'src/app/Models/iuser';
import { OrderService } from 'src/app/Services/order.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-userorderdetails',
  templateUrl: './userorderdetails.component.html',
  styleUrls: ['./userorderdetails.component.css']
})
export class UserorderdetailsComponent implements OnInit {

  id:number = this.route.snapshot.params.id;
  orderDetails:IorderUser={
    orderId :0,
    orderNumber :'',
    reciverName :'',
    description:'',
    orderCost:0,
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

  DriverInfo:IOrderDriverInfo={
    orderId :0,
    driverName:'',
    driverPhone:''
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
  constructor(private route: ActivatedRoute,
    private UserService: UserService,
    private OrderService: OrderService,
    private toster: ToastrService,


    ) { }

  ngOnInit(){

    this.getDetails()
    console.log(this.id);
  }
  printPage(){
    window.print();
  }

  getDetails(){
    this.UserService.getOrderByID(this.id).subscribe(
      (response) => {
        console.log(response.returnObject);
        console.log(response.returnObject.createdOn);

this.orderDetails=response.returnObject
console.log(this.orderDetails)
console.log(this.orderDetails.reciverName)

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
    this.OrderService.GetOrderPriceDetailsComp(this.id).subscribe(
      (response) => {
        console.log(response.returnObject);
this.orderPriceDetails=response.returnObject

      },
      (err) => {
        console.log(err)
      }
    );
    this.UserService.GetOrderDriverName(this.id).subscribe(
      (response) => {
        // console.log(response.returnObject);

        if(response.returnObject != null){
this.DriverInfo=response.returnObject
        }
        else{
          this.toster.info('Not Confiemed Yet', 'info', {
            timeOut: 5000,
            closeButton: true,
            progressBar: true,
          });
        }
      },
      (err) => {
        console.log(err)
      }
    );
  }
}
