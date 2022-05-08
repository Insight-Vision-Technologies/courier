import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IDirection, IDirectionDriver } from 'src/app/Models/idirection';
import { CompanyService } from 'src/app/Services/company.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { ChangeDirectionComponent } from '../change-direction/change-direction.component';
import { DialogDriverComponent } from '../dialog-driver/dialog-driver.component';
import { IDriver, IDriverCompany } from './../../../Models/idriver';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['No.', 'Name','DOB', 'Phone','Email','Employee','CarPalte', 'edit','delete'];

  ELEMENT_DATA: IDriver[] = [];
  dataSource = new MatTableDataSource<IDriverCompany>(this.ELEMENT_DATA);
  DirectionList: IDirection[] = [];
  DirectionDeleteList: IDirection[] = [];
  DriverList: IDirectionDriver[] = [];
  driverId: number = 0;
  driverIdDelete: number = 0;


    constructor(public dialog: MatDialog, private CRUDService: CRUDTestService,
      private router: Router,
    private toster: ToastrService,
    private CompanyService: CompanyService,
     ) { }

 ngOnInit() {
    this.getDriver();
  }


  deleteCar(id: number) {
    console.log(id)
    this.CRUDService.deleteDriver(id).subscribe(
      (res) => {
         this.getDriver();
        this.toster.success('Item Deleted successfully', 'succes', {
          timeOut: 2000,
          closeButton: true,
          progressBar: true,
        });


        // console.log("res")
        // console.log(res)
      },
      (err) => {
        console.log(err)
        this.toster.error(err.statusText,'Error',{timeOut : 2000,closeButton:true,progressBar:true})
      }
    );
    // console.log(element)
  }

  async getDriver() {
    console.log('response');

    await this.CRUDService.getAllDriver().subscribe(
      (response) => {
        console.log(response);
        if (response.returnObject.length != 0) {
          this.dataSource.data = response.returnObject;
        }

        else {
          this.dataSource.data = response.returnObject;
          this.toster.info('No Record Found', 'info', {
            timeOut: 5000,
            closeButton: true,
            progressBar: true,
          });
          // console.log("no data")
        }
        // console.log(response);
      },
      (err) => {
        console.log(err)
      }
    );
    this.dataSource;
  }


  updateDriver(id: number) {

    console.log("hell"+id)
    this.router.navigateByUrl('Company/Dashboard/UpdateDriver', {
      state: { driverId: id },
    });

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  addcar(){
    const dialogRef = this.dialog.open(DialogDriverComponent,
      {
        width: '700px',
        disableClose:true,
        // margin: '0 auto'
        // disableClose: true,
        // hasBackdrop: true,
      });

      dialogRef.afterClosed().subscribe(async (result) => {
       await this.getDriver();
      console.log('gggggg');
    });
  }

  displayStyle = "none";
  orderExost = "none";

  openPopup(dirID:number) {
    this.driverIdDelete=dirID
    this.CompanyService.CheckDriverOrders(dirID).subscribe(
      (response) => {
        console.log(response)


        if (response.returnObject.length>0) {
          this.DirectionDeleteList=response.returnObject
          this.DirectionDeleteList.forEach(element => {
            this.getDriverOther()
            this.ChangeDirection(this.driverIdDelete,element.from,element.to)
            // this.displayStyle = "block";
            // console.log(element)

          });

          // this.DirectionList=response.returnObject
          console.log(response.returnObject)
        }
        console.log(response.message)

        if(response.message=="There is order")
        {
          this.orderExost = "block";
          console.log('tyuytrerty')
        }

        this.getDriver()
      },
      (err) => {
        console.log(err);
      }
    );
  }
  closePopup() {
    console.log(this.driverId)

    this.CompanyService.UpdateDriverDirection(this.driverId,this.driverIdDelete).subscribe(
      (response) => {
        console.log(response)
        this.displayStyle = "none";

        if (response.returnObject != null) {

          // this.DirectionList=response.returnObject
          console.log(response.returnObject)
        }

        this.getDriver()
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ChangeDirection(driverIdDelete:number,from:string,to:string) {
    console.log("order ID is  ",driverIdDelete)
    const dialogRef = this.dialog.open(ChangeDirectionComponent, {
      width: '500px',
      disableClose: true,
      // height : 'auto',
      // margin: '0 auto'
      // disableClose: true,
      // hasBackdrop: true,
      data: { driverIdDelete: driverIdDelete ,
      from:from,
      to:to},
    });

    dialogRef.afterClosed().subscribe((result) => {

      this.getDriver()
      // console.log(`Dialog result: ${result}`);
    });
  }

  closePopupOrder() {

        this.orderExost = "none";

  }

  getDriverOther(){

    this.CompanyService.GetOtherDriver(this.driverIdDelete).subscribe(
      (response) => {
        console.log(response)

        if (response.returnObject.length>0) {
          this.DriverList=response.returnObject
          // this.displayStyle = "block";

          // this.DirectionList=response.returnObject
          console.log(response.returnObject)
        }

        this.getDriver()
      },
      (err) => {
        console.log(err);
      }
    );
  }

  noAssign(){
    this.CompanyService.NoAssignDirection(this.driverIdDelete).subscribe(
      (response) => {
        console.log(response)
        this.displayStyle = "none";


        this.getDriver()
      },
      (err) => {
        console.log(err);
      }
    );

  }
 }


