import { Component, OnInit } from '@angular/core';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { OrderService } from 'src/app/Services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrderPrice } from 'src/app/Models/iorder';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  name:string
  bgColor:string='#ec4155'
  cardpay:boolean=true
  pay:number=0
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

  codec = new HttpUrlEncodingCodec;
  orderNumber:string = this.route.snapshot.params.orderNumber;

  constructor( private orderService: OrderService,
     private router: Router,
     private route: ActivatedRoute
     ) {

   this.name = (localStorage.getItem("ReciverName") || '{}')
  //  this.nameco=this.name
  this.name = this.codec.decodeValue(this.name)
   }

  ngOnInit(): void {
    this.getInfoOrder()
  }

getInfoOrder(){
   this.orderService.GetOrderPriceDetails(this.orderNumber).subscribe(
    (response) => {
      console.log("Hello",response.returnObject);
this.orderPriceDetails=response.returnObject
    },
    (err) => {
      console.log(err);
    }
  );
}



onItemChange(valu:Event){
  const filterValue = (valu.target as HTMLInputElement).value
  console.log(" Value is : ", filterValue );


  if(filterValue=='0')
  this.cardpay=true

  else
  this.cardpay=false

}
method(){

  console.log(this.pay)
  this.orderService.UpdateOrderMethod(this.orderNumber,this.pay).subscribe(
    (response) => {
      this.router.navigateByUrl('/');

    },
    (err) => {
      console.log(err);
    }
  );
}
}
