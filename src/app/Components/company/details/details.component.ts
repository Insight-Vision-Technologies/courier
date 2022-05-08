import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IorderUser } from 'src/app/Models/iorder-user';
import { IUser } from 'src/app/Models/iuser';
import { CompanyService } from 'src/app/Services/company.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:number = this.route.snapshot.params.id;
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
    private compService: CompanyService,

    ) { }
  ngOnInit(): void {
    this.getDetails()

  }

  getDetails(){
    this.compService.GetOrderByIDDetails(this.id).subscribe(
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
