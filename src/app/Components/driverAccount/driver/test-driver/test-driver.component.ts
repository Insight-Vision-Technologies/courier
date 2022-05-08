import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IDriver } from 'src/app/Models/idriver';
import { IorderUser } from 'src/app/Models/iorder-user';
import { DriverService } from 'src/app/Services/driver.service';

@Component({
  selector: 'app-test-driver',
  templateUrl: './test-driver.component.html',
  styleUrls: ['./test-driver.component.css']
})
export class TestDriverComponent implements OnInit {

  orderNumber:number=0
  orderHistoryNumber:number=0
  PaymentCountNumber:number=0
  OrderInfo:IorderUser[]=[]
  activestatus:string='Active'
  activestatuss:boolean=false
  driverInfo: IDriver = {
    driverName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    employee: '',
    carPlate: '',
    companyId: 0,
    driverId: 0,
    vehicleId: 0,
    from: '',
    to: '',
    vehicle: {
      classfication: '',
      carPlate: '',
      capacity: '',
      vehicleId: 0,
      CompanyId: 0,
      size: '',
      Dimension: 0,
    },
  };
  constructor(
    private DriverService:DriverService,
    private toster: ToastrService,


  ) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){
    this.DriverService.CountDriverOrder().subscribe(
      (response) => {

        this.orderNumber=response.returnObject
        console.log(response);

      },
      (err) => {
        console.log(err);
      }
    );
    this.DriverService.CountDriverTodayOrders().subscribe(
      (response) => {

        this.orderHistoryNumber=response.returnObject
        console.log(response);

      },
      (err) => {
        console.log(err);
      }
    );

    this.DriverService.getDriverOrder().subscribe
    (res=> {

      if(res.returnObject.length>0){
      this.OrderInfo=res.returnObject
      console.log(this.OrderInfo)
      }
      else{
        this.toster.info('No Record Found', 'info', {
          timeOut: 5000,
          closeButton: true,
          progressBar: true,
        });
      }
    },
    (err) => {
      console.log(err);
    }


    );

    this.DriverService.getDriverInfo().subscribe(
      (response) => {
        this.driverInfo = response.returnObject;
        console.log(response);

        if(response.returnObject){
          this.activestatus='Active'

              }
              else{
          this.activestatus='Not Active'

              }
      },
      (err) => {
        console.log(err);
      }
    );

    this.DriverService.CountPayment().subscribe(
      (response) => {
        this.PaymentCountNumber = response.returnObject;
        console.log("PaymentCountNumber",this.PaymentCountNumber);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  activeChange(){

    this.DriverService.ChangeDriverAvailble().subscribe(
      (response) => {

        if(response.returnObject){
    this.activestatus='Active'

        }
        else{
    this.activestatus='Not Active'

        }
        console.log(response);

      },
      (err) => {
        console.log(err);
      }
    );
  }
}
