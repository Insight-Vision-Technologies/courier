import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IDriver } from 'src/app/Models/idriver';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { DialogDriverComponent } from '../dialog-driver/dialog-driver.component';


@Component({
  selector: 'app-car-direction',
  templateUrl: './car-direction.component.html',
  styleUrls: ['./car-direction.component.css'],
})
export class CarDirectionComponent implements OnInit {
  displayedColumns: string[] = [
    // 'position',
    'carPlate',
    'dname',
    // 'symbol',
    // 'to',
    'num'
  ];
  driverInfo:IDriver[]=[]
  ELEMENT_DATA: IDriver[] = [];
  dataSource = new MatTableDataSource<IDriver>(this.ELEMENT_DATA);
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private CRUDService: CRUDTestService,
    private router: Router,
  private toster: ToastrService) {}

  ngOnInit(){
    this.getDriver()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addcar() {
    const dialogRef = this.dialog.open(DialogDriverComponent, {
      width: '700px',
      disableClose: true,
      // margin: '0 auto'
      // disableClose: true,
      // hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  home() {
    this.router.navigateByUrl('Company/Dashboard/home');
  }
  navg(data: IDriver) {
    console.log(data.driverId + 'jhhhhh');
    this.router.navigateByUrl('Company/Dashboard/details');
  }

  async getDriver() {
    console.log('response');

    await this.CRUDService.getAllDriverWithOrder().subscribe(
      (response) => {
        console.log(response);
        if(response.returnObject.length != 0){
          this.driverInfo=response.returnObject;
          console.log(this.driverInfo)
          // console.log(this.driverInfo)
          this.dataSource.data = this.driverInfo;
           this.driverInfo.forEach(element => {

           console.log( element.carPlate)

          })
          }

          else
          console.log("no data")


        // console.log(response);
      },
      (err) => {
        console.log(err)
      }
    );
    this.dataSource;
  }
}
