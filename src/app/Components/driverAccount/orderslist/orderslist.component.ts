import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IorderUser } from 'src/app/Models/iorder-user';
import { DriverService } from 'src/app/Services/driver.service';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-orderslist',
  templateUrl: './orderslist.component.html',
  styleUrls: ['./orderslist.component.css']
})
export class OrderslistComponent implements OnInit {
  @ViewChild('dialogRefForReturn')
  dialogRefForReturn!: TemplateRef<any>;

  bgColor:string='#da184f'
  driverID:number=0

  OrderInfo:IorderUser[]=[]
  constructor( private router: Router,
    private orderService:OrderService,
    public dialog: MatDialog,
    private DriverService:DriverService,
    ) {
      var id= localStorage.getItem('driverId')

      if(id){
        this.driverID=parseInt(id)
      }

     }

  ngOnInit(): void {

    this.getOrder()
  }


  getOrder(){
    this.DriverService.getDriverOrder().subscribe
    (res=> {

      this.OrderInfo=res.returnObject
      console.log(res.returnObject)
      console.log(this.OrderInfo)
    }


    )
  }

  openTempDialogForReturn() {
    const myTempDialog = this.dialog.open(this.dialogRefForReturn);
    myTempDialog.afterClosed().subscribe((res) => {
      console.log({ res });
    });
  }

  OrderTrackDetails(idOrder:number){

    localStorage.removeItem('orderId')
    localStorage.setItem('orderId',idOrder.toString())
    this.router.navigateByUrl('DriverPages/DriverTrack')
    console.log(idOrder)
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
