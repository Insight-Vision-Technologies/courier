import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Services/order.service';


@Component({
  selector: 'app-tracking-order',
  templateUrl: './tracking-order.component.html',
  styleUrls: ['./tracking-order.component.css']
})
export class TrackingOrderComponent implements OnInit {
  bgColor:string='#ec4155'

  link:boolean=false;

  constructor(private router: Router,
    private orderService:OrderService) { }

  ngOnInit(): void {
  }

  linkshow(){
    this.link=true
  }

  linkhide(){
    this.link=false

  }

  home(){
    this.router.navigateByUrl('/')
    .then(() => {
      window.location.reload();
    });
  }

orderNumber:string=''
orderID:number=0
  onSubmit(form:NgForm){
    console.log(form.value)
this.orderNumber=form.value.orderNumber
console.log(this.orderNumber)
    this.orderService.getOrderByNumber(this.orderNumber).subscribe(
      (response) => {
        console.log("Hello",response);

        this.orderID=response.returnObject.orderId
        console.log(this.orderID)
        console.log(response.returnObject.orderId)
        localStorage.removeItem('orderId')
        localStorage.setItem('orderId',this.orderID.toString())
        console.log(response.returnObject.paymentBy);

        if(response.returnObject.paymentBy=='0'){
        console.log("Hsssssss");

    this.router.navigateByUrl('TrackingOrderbynum'
    // , {state: { orderId: this.orderID },}
    );
        }
        else{
        console.log("Hsssssss");

          this.router.navigateByUrl('ChoosePrice'
    );
        }


      },
      (err) => {
        console.log(err);
      }
    );
  }
}
