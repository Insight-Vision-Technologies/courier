import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/Services/user.service';
import * as moment from 'moment/moment.js';

@Component({
  selector: 'app-ordersuser',
  templateUrl: './ordersuser.component.html',
  styleUrls: ['./ordersuser.component.css']
})
export class OrdersuserComponent implements OnInit {

  today_data_source:any[]=[];
  in_process_data_source:any[]=[];
  received_data_source:any[]=[];
  filteredArray: any[] = [];

 pageIndex:number = 0;
    pageSize:number =6;
    lowValue:number = 0;
    highValue:number = 6;

  pageSizeOptions: number[] = [6, 12, 24,48,99];
  pageEvent: any;
  filterTerm:any;

  constructor(config: NgbRatingConfig,
    private UserService: UserService,
    private router: Router
    ) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

 async ngOnInit(){
   await this.getOrder()
  }
  expectionDateTime(date:any,time:any) {
    // console.log(date,time);
    let mydate = new Date(date);
    if (time[1] == "d") {
      // let getDays=mydate.getUTCDate()
      // let getTime = parseInt(time[0]);
      // let totalDays = getDays + getTime;
      //console.log("inside days","getDays",getDays,"getTime",getTime,"total days",getDays+getTime);
      // console.log(new Date(date).setDate(mydate.getUTCDate()+parseInt(time[0])))
      return new Date(new Date(date).setDate(mydate.getUTCDate()+parseInt(time[0])));
    }
    else if (time[1] == "h") {
     // console.log("inside hours",time[1],time);
      console.log(new Date(new Date(date).setHours(mydate.getHours() + parseInt(time[0]))))
      return new Date(new Date(date).setHours(mydate.getHours() + parseInt(time[0])));
    }
    return date;
}
  allOrders(msg:any) {
    if(msg==='today'){
          this.filteredArray = this.today_data_source;
    }
    if(msg==='inprocess'){
     this.filteredArray = this.in_process_data_source;
    }
    if(msg==='received'){
     this.filteredArray = this.received_data_source;
    }
      }
      onPaginateChangeAll(event:any) {
         if(event.pageIndex === this.pageIndex + 1){
        this.lowValue = this.lowValue + this.pageSize;
        this.highValue =  this.highValue + this.pageSize;
       }
    else if(event.pageIndex === this.pageIndex - 1){
       this.lowValue = this.lowValue - this.pageSize;
       this.highValue =  this.highValue - this.pageSize;
      }
       this.pageIndex = event.pageIndex;
      }

      getOrder(){
        this.UserService.getOrder().subscribe(
          (response) => {
            console.log(response.returnObject)
            if (response.returnObject.length != 0) {
          this.today_data_source = response.returnObject.filter(function (el: any): any {
            if (moment.utc(el.createdOn).isSame(moment(), 'date')) {
            return el
            }
          });
          this.received_data_source = response.returnObject.filter(function (el: any): any {
            if (el.status==5) {
            return el
            }
          });
          this.in_process_data_source = response.returnObject.filter(function (el: any): any {
            if (el.status>=0 && el.status<5) {
            return el
            }
          });

        }

        else {
          this.today_data_source=response.returnObject;
        console.log("no data")
        }
        this.allOrders('today');

          },
          (err) => {
            console.log(err)
          }
        );
      }

      invoice(id:number){
        console.log(id)
    this.router.navigateByUrl('/Profile/order/invoice/'+id)

      }

      details(id:number){
        console.log(id)
    this.router.navigateByUrl('/Profile/order/details/'+id)

      }

}

