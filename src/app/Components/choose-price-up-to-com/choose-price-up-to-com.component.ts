import { Component, OnInit } from '@angular/core';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { UserService } from 'src/app/Services/user.service';
import { IPriceComp } from 'src/app/Models/iprice-comp';
import { ICompOver, ICompOverInfo } from 'src/app/Models/icomp-over';
import { IOrderInfo } from 'src/app/Models/iorder-user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-choose-price-up-to-com',
  templateUrl: './choose-price-up-to-com.component.html',
  styleUrls: ['./choose-price-up-to-com.component.css'],
})
export class ChoosePriceUpToComComponent implements OnInit {
  prices: ICompOver[] = [];
  titleTime:string=''
  orderNumber:string = this.route.snapshot.params.orderNumber;

  constructor(private orderServices: UserService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.getOvers('5h');
    // getOvers();
  }

  info: ICompOverInfo = {
    from: '',
    to: '',
    orderId: '',
    deliveryTime: '',
    type:'' ,
    size:0,
    height:0,
    width:0,
    length:0,
    orderCost:0
  };


  getOvers(keyword: string) {
    var to = localStorage.getItem('to');
    var from = localStorage.getItem('from');
    var orderID = localStorage.getItem('orderId');
    var type = localStorage.getItem('type');
    var amount = localStorage.getItem('amount');
    var width = localStorage.getItem('width');
    var length = localStorage.getItem('length');
    var height = localStorage.getItem('height');
    console.log(localStorage.getItem('to'));
    console.log(from);

    if (to) this.info.to = to;
    if (amount) this.info.size =parseInt(amount);
    if (width) this.info.width =parseInt(width);
    if (length) this.info.length =parseInt(length);
    if (height) this.info.height =parseInt(height);
    if (type) this.info.type = type;

    if (from) this.info.from = from;
    if (orderID) this.info.orderId = orderID;

    this.info.deliveryTime = keyword;
    if(keyword=='5h')
    this.titleTime='5 Hours'

    else if(keyword=='24h')
    this.titleTime='24 Hours'

    else if(keyword=='2d')
    this.titleTime='2 Days'

    else if(keyword=='4d')
    this.titleTime='4 Days'


    console.log(this.info);
    // this.orderServices.getOrderOver(this.info).subscribe((res) => {
    //   if (res.returnObject != null) {

    //   console.log(res.returnObject);
    //   this.prices = res.returnObject;
    //   console.log(this.prices);

    //   this.prices.forEach((element) => {
    //     console.log(element.orderCost);
    //   });
    // }
    // else
    // {
    //   this.prices = res.returnObject;

    //   console.log("No Data")
    // }
    // });

    this.orderServices.GetOverCompany(this.orderNumber,keyword).subscribe((res) => {
      if (res.returnObject != null) {

      console.log(res.returnObject);
      this.prices = res.returnObject;
      console.log(this.prices);

      this.prices.forEach((element) => {
        console.log(element.orderCost);
      });
    }
    else
    {
      this.prices = res.returnObject;

      console.log("No Data")
    }
    });
  }

  mm(keyword: string) {
    console.log(keyword);
    this.getOvers(keyword);
  }

  OrderInfo:IOrderInfo={
    orderNumber:'',
    companyId:0,
    deliveryTime:'',
    priceId:0,
    priceCost:0,
    sizeCost : 0,
    typeCost : 0,
    totalCost : 0,
    orderCost : 0,


  }
  chooseComp(cost:number,priceID:number,companyId:number,sizecos:number,type:number,total:number){
    var orderCost = localStorage.getItem('orderCost');

console.log('ffffffff')
    var id =  localStorage.getItem('compId');
console.log('ffffffff')
// SizeCost : number
// TypeCost : number
// TotalCost : number
// OrderCost : number
    // if(id){
      this.OrderInfo.companyId = companyId

    this.OrderInfo.orderNumber=this.orderNumber
    this.OrderInfo.deliveryTime=this.info.deliveryTime
this.OrderInfo.priceId=priceID
this.OrderInfo.priceCost=cost
this.OrderInfo.sizeCost=sizecos
this.OrderInfo.typeCost=type
this.OrderInfo.totalCost=total

console.log(this.OrderInfo)
if (orderCost) this.OrderInfo.orderCost =parseInt(orderCost);


    console.log(this.OrderInfo)
    this.orderServices.addOrderInfo(this.OrderInfo).subscribe((res) => {

     this.router.navigate(['/paymentbtn/'+this.orderNumber])
    .then(() => {
      window.location.reload();
    });

      });
    };
  // }
}
