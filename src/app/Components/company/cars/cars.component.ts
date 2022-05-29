import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { ICAR } from 'src/app/Models/icar';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { DialogAddPriceComponent } from '../dialog-add-price/dialog-add-price.component';
import { UpdatecarComponent } from '../updatecar/updatecar.component';
import { DialogCarComponent } from './../dialog-car/dialog-car.component';
// import { DirectionComponent } from './../direction/direction.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'No.',
    'CarPlate',
    'Classification',
    'Capacity ',
    'edit',
    'delete',
  ];
  ELEMENT_DATA: ICAR[] = [];
  ProductList: ICAR = {
    capacity:0,
    classfication:"",
    carPlate:"",
    companyId:0,
     size: 0,
    dimension: 0,
    vehicleClassficactionID:0
  };
  ProductList2: ICAR[] = [];
  dataSource = new MatTableDataSource<ICAR>(this.ELEMENT_DATA);
  dataSource2: ICAR[] = [];

  constructor(
    public dialog: MatDialog,
    private CRUDService: CRUDTestService,
    private router: Router,
    private toster: ToastrService,
    public loaderService: LoaderService
  ) {}

  async ngOnInit() {
    this.getCar();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;
  }

  deleteCar(id: number) {
    console.log(id)
    this.CRUDService.deleteCar(id).subscribe(
      (res) => {
        this.getCar();
        this.toster.success('Item Deleted successfully', 'success', {
          timeOut: 2000,
          closeButton: true,
          progressBar: true,
        });
        console.log(res)


        // console.log("res")
        // console.log(res)
      },
      (err) => {

        console.log(err)
        // this.toster.error(err.statusText,'Error',{timeOut : 2000,closeButton:true,progressBar:true})
      }
    );
    // console.log(element)
  }

   getCar() {
    // console.log('response');

     this.CRUDService.getAllVehicale().subscribe(
      (response) => {
        console.log(response);
        if(response.returnObject.length != 0){
        this.dataSource.data = response.returnObject;
        }

        else {
          this.toster.info('No Record Found', 'info', {
            timeOut: 5000,
            closeButton: true,
            progressBar: true,
          });
          this.dataSource.data = response.returnObject;
        console.log("no data")
        }

        // this.ProductList2 = response;
        // this.dataSource2 = response;
        // console.log(response);
      },
      (err) => {
        // console.log(err)
      }
    );
    this.dataSource;
  }

  updateCar(id: string) {

    this.router.navigateByUrl('Company/Dashboard/UpdateCar', {
      state: { carId: id },
    });

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addcar() {
    const dialogRef = this.dialog.open(DialogCarComponent, {
      width: '700px',
      disableClose: true,
      height : 'auto'
      // margin: '0 auto'
      // disableClose: true,
      // hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
    this.getCar();

      // console.log(`Dialog result: ${result}`);
    });
  }

  details(id:number){console.log(id)
    this.router.navigateByUrl('Company/Dashboard/details/'+id);
  }
}
