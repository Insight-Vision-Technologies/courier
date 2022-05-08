import { Component, OnInit } from '@angular/core';
import { Ihistory } from './../../../Models/ihistory';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { CompanyService } from 'src/app/Services/company.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { UserService } from 'src/app/Services/user.service';
import { OrderService } from 'src/app/Services/order.service';
import { IorderUser } from 'src/app/Models/iorder-user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  statuscolor:string=''
  dataSource:IorderUser[]=[

  ]


  constructor(private router: Router,
    public dialog: MatDialog,
    private OrderService: OrderService,
    private crudService: CRUDTestService,
    private userService: UserService,
    private toster: ToastrService,
    ) { }

  ngOnInit(): void {

    this.getOrder()
  }

  getColor(country:number) {
   if(country==5){
   return '#D7EFFC'
   }
   else if (country==6){
   return '#DAF5C9'
  }
  else if (country==7){
    return '#FFE8AC'
   }

   else if (country==8){
    return '#FFD8CF'
   }

   else
   return ''
  }


   home(){
    this.router.navigateByUrl('Company/Dashboard/home');

  }

  getOrder(){
    console.log("order")

    this.OrderService.GetFinishOrderCompany().subscribe(
      (response) => {
        console.log("response.asdfg"+response.returnObject)

        if (response.returnObject.length != 0) {
          console.log(response.returnObject)
          this.dataSource = response.returnObject

        }

        else {
          this.dataSource = response.returnObject
        console.log("no data")
        this.toster.info('No Record Found', 'info', {
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
