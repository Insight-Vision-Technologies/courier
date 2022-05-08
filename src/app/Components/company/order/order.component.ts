import { Component, OnInit, ViewChild,TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { IOrderDriver } from 'src/app/Models/iorder-user';
import { UserService } from 'src/app/Services/user.service';
import { CompanyService } from 'src/app/Services/company.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { IDriver } from 'src/app/Models/idriver';
import * as moment from 'moment/moment.js';
import { ToastrService } from 'ngx-toastr';
import { IDirectionDriver } from 'src/app/Models/idirection';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit   {

  @ViewChild('dialogRefForDelivery')
  dialogRefForDelivery!: TemplateRef<any>;
  @ViewChild('dialogRefForReturn')
  dialogRefForReturn!: TemplateRef<any>;

  all_data_source:any[]=[];
  received_data_source:any[]=[];
  today_data_source:any[]=[];


   pageIndex:number = 0;
    pageSize:number =6;
    lowValue:number = 0;
    highValue:number = 6;

  pageSizeOptions: number[] = [6, 12, 24,48,99];
  pageEvent: any;
  filteredArray: any[] = [];
  filterTerm:any;

  drivers:IDriver[]=[]
  driversList:IDirectionDriver[]=[]
  cart:number=0
  orderIDDriver:number=0
  constructor(private router: Router,
    public dialog: MatDialog,
    private compService: CompanyService,
    private crudService: CRUDTestService,
    private userService: UserService,
    private toster: ToastrService

    ) { }

  ngOnInit(){

  this.getOrder();
  //  this.chooseDriver(5);

  }
  orderId:string=''
  openTempDialogForDelivery(orderNumber:string,orderID:number) {
    this.orderIDDriver=orderID
this.orderId=orderNumber
console.log(this.orderIDDriver);
    this.chooseDriver()
    const myTempDialog = this.dialog.open(this.dialogRefForDelivery);
    myTempDialog.afterClosed().subscribe((res) => {
      console.log({ res });
    });
  }
  openTempDialogForReturn() {
    const myTempDialog = this.dialog.open(this.dialogRefForReturn);
    myTempDialog.afterClosed().subscribe((res) => {
      console.log({ res });
    });
  }


  allOrders(msg:any) {
      if(msg==='all'){
        this.filteredArray = this.all_data_source;
      }
    if (msg === 'received') {
      this.filteredArray = this.received_data_source;

      }
      if(msg==='today'){
        this.filteredArray = this.today_data_source;

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


  home(){
    this.router.navigateByUrl('Company/Dashboard/home');
  }
  expectionDateTime(date:any,time:any) {
    // console.log(date,time);
    let mydate = new Date(date);
    //2d,5h,24h,4d
    if ((time=="2d" || time=="4d") && time[1] == "d") {

      // let getDays=mydate.getUTCDate()
      // let getTime = parseInt(time[0]);
      // let totalDays = getDays + getTime;
      // console.log("inside days","getDays",getDays,"getTime",getTime,"total days",getDays+getTime);
      // console.log(new Date(date).setDate(mydate.getUTCDate()+parseInt(time[0])))
      return new Date(new Date(date).setDate(mydate.getUTCDate()+parseInt(time[0])));
    }
    else if (time=="5h" && time[1] == "h") {
     // console.log("inside hours",time[1],time);
      // console.log(new Date(new Date(date).setHours(mydate.getHours() + parseInt(time[0]))))
      return new Date(new Date(date).setHours(mydate.getHours() + parseInt(time[0])));
    }
    else if(time=="24h" && time[2] == "h"){
      // console.log(new Date(new Date(date).setHours(mydate.getHours() + parseInt(time[0]+""+time[1]))))
      return new Date(new Date(date).setHours(mydate.getHours() + parseInt(time[0]+""+time[1])));
    }
    return date;
}
  getOrder(){
    console.log("order")

    this.compService.getOrderByID().subscribe(
      (response) => {
        console.log("response.asdfg"+response)

        if (response.returnObject.length != 0) {
          console.log(response.returnObject)
          //this.all_data_source = response.returnObject;
          this.all_data_source = response.returnObject.filter(function (el: any): any {
            // if (moment.utc(el.createdOn).isSame(moment(), 'date')) {
            // return el
            // }
            return el;
          });
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
        }

        else {
          this.all_data_source=response.returnObject;
          this.toster.info('No Record Found', 'info', {
            timeOut: 5000,
            closeButton: true,
            progressBar: true,
          });        }
        this.allOrders('all');
      },
      (err) => {
        console.log(err)
      }
    );
  }

  chooseDriver(){
    this.compService.GetDriverDeliver(this.orderIDDriver).subscribe(
      (response) => {
        console.log(response.returnObject);
if(response.returnObject.length>0){
this.driversList=response.returnObject
}
      },
      (err) => {
        console.log(err)
      }
    );
//     this.crudService.getAllDriver().subscribe(
//       (response) => {
//         console.log(response.returnObject);

// this.drivers=response.returnObject
//       },
//       (err) => {
//         console.log(err)
//       }
//     );
  }

  driverOrder:IOrderDriver={
    driverId :0,
    orderId :''
  }
  driver(cart:number,orid:string){
    console.log("order Id  "+orid)
    console.log("cart   "+cart+"  id   "+orid)
    this.driverOrder.driverId=cart
    this.driverOrder.orderId=orid
console.log(this.driverOrder)
    this.userService.addOrderdriver(this.driverOrder).subscribe(
      (response) => {
        console.log(response);
        this.getOrder()
        this.driversList=[]

      },
      (err) => {
        console.log(err)
      }
    );
  }
  invoice(id:number){
    console.log(id)
this.router.navigateByUrl('/Company/Dashboard/order/invoice/'+id)

  }

  details(id:number){
    console.log(id)
this.router.navigateByUrl('/Company/Dashboard/order/detail/'+id)

  }
}

