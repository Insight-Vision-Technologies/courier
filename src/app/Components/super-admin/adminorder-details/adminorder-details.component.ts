import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IorderUser } from 'src/app/Models/iorder-user';
import { AdminService } from 'src/app/Services/admin.service';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-adminorder-details',
  templateUrl: './adminorder-details.component.html',
  styleUrls: ['./adminorder-details.component.css']
})
export class AdminorderDetailsComponent implements OnInit {
  orderID:number = this.datra.iddd
  orderInfo:IorderUser={
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
    country : ''
  }
}

  constructor(    public dialogRef: MatDialogRef<AdminorderDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public datra: any,
    private AdminService: AdminService,
    private orderServices: OrderService,
    ) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {
    this.orderServices.GetOrderByIDDetails(this.orderID).subscribe(
      (response) => {
        if (response.returnObject.length != 0) {
          console.log(response.returnObject);

          this.orderInfo=response.returnObject
        } else {
          console.log('no data');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
