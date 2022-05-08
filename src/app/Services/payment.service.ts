import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPayment } from '../Models/ipayment';

import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";
@Injectable({
  providedIn: 'root'
})
export class PaymentService{
 takePaymentResult!: any;
  paymentHandler:any = null;
  constructor(private http: HttpClient) { }
    

//  invokeStripe() {
//     if(!window.document.getElementById('stripe-script')) {
//       const script = window.document.createElement("script");
//       script.id = "stripe-script";
//       script.type = "text/javascript";
//       script.src = "https://checkout.stripe.com/checkout.js";
//       script.onload = () => {
//         this.paymentHandler = (<any>window).StripeCheckout.configure({
//           key: 'pk_live_51IzKYpBI4eYc8msNmzzAiyYn7MpSuerjaUt19tFjgUKziyThapQcrrq1qcHVh6A9Vqo496DfNvTLnrDVGZbtx3jQ00QPgyITrn',
//           locale: 'auto',
//           token: function (stripeToken: any) {
//             console.log(stripeToken)
//             alert('Payment has been successfull!');
//           }
//         });
//       }
        
//       window.document.body.appendChild(script);
//     }
//   }

   payMoney(productName: string, amount: number, token: any) {
    let body = {
      tokenId: token.id,
      productName: productName,
      amount: amount
    };
    let bodyString = JSON.stringify(body);
  let headers = new HttpHeaders();  
        headers.append('Content-Type', 'application/json');  
        const httpOptions = {  
            headers: headers  
        };  
    this.http
      .post( `${environment.Api_core}/Payment/PaymentPost`, bodyString, httpOptions)
      .toPromise()
      .then(response => {
        if (JSON.parse(JSON.stringify(response)).status="succeeded") {
         this.takePaymentResult = JSON.parse(JSON.stringify(response)).status;
        }
        else {
        this.takePaymentResult = "Payment Failed";
          console.log("payment failed",this.takePaymentResult);
        }
      })
      .catch(error => {
       this.takePaymentResult ="Payment Failed: "+error.message;
        
      });
}
  
  openCheckout(productName: string, amount: number, tokenCallback:any) {
    let handler = (<any>window).StripeCheckout.configure({
      key: "pk_live_51IzKYpBI4eYc8msNmzzAiyYn7MpSuerjaUt19tFjgUKziyThapQcrrq1qcHVh6A9Vqo496DfNvTLnrDVGZbtx3jQ00QPgyITrn",
      locale: "auto",
      token: tokenCallback
    });

    handler.open({
      name: "Courier Software",
      description: productName,
      zipCode: false,
      currency: "aed",
      amount: amount,
      panelLabel: "Pay {{amount}}",
      allowRememberMe: false
    });
  }
  payNow(pay: IPayment) {
    //this.invokeStripe();
    this.openCheckout(pay.productName,pay.amount, (token: any) =>
      this.payMoney(pay.productName, pay.amount, token)
    );
    return this.takePaymentResult;
  }

}
