import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { IDuration, IEmirates } from 'src/app/Models/iemirates';
import { IListPrice, IPriceComp } from 'src/app/Models/iprice-comp';
import { ICompanysize, ISizeOrder } from 'src/app/Models/isize-order';
import { ITypeOrder } from 'src/app/Models/itype-order';
import { CompanyService } from 'src/app/Services/company.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { DialogAddPriceComponent } from '../dialog-add-price/dialog-add-price.component';
// import { TesxtComponent } from '../../ tesxt/tesxt.component';

export interface DeliveryTime {
  DeliveryTime: string;
}

export interface SizeData {
  size: string;
  // sizeID: number;
  Change: boolean;
  sizeCost: number;
}
export interface ISizeName {
  name: string;
  cost: number;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {
  dtOptions: any = {};
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  compID = localStorage.getItem('compId');
  timetest:any
  timetest2:string="sf"
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    this.timetest2='dfggfd'
  }
  hangepl() {
    console.log("dffds")
    this.timetest2=this.timetest

    console.log(this.timetest2)
    console.log(typeof(this.timetest2))
    console.log(parseInt(this.timetest2))

    console.log(typeof(this.timetest2))
  }
  ELEMENT_DATA: IPriceComp[] = [];
  delivery: DeliveryTime[] = [
    {
      DeliveryTime: '5h',
    },
    {
      DeliveryTime: '24h',
    },
    {
      DeliveryTime: '2D',
    },
  ];

  dataSource = new MatTableDataSource<IPriceComp>(this.ELEMENT_DATA);
  dataSource2: IPriceComp[] = [];
  emirates: IEmirates[] = [];
  Prices: IListPrice[] = [];
  PriceComp: IPriceComp[] = [];
  Duration: IDuration[] = [
    {
      duration: '5h',
    },
    {
      duration: '24h',
    },
    {
      duration: '2 Days',
    },
    {
      duration: '1-4 Days',
    },
  ];

  OrderTypeINfo: ITypeOrder[] = [];
  OrderTypeINfo2: ITypeOrder = {
    companyId: 0,
    typeName: '',
    typeCost: 0,
    Change: true,
    orderTypeId: 0,
  };

  SizeINfo: ISizeOrder[] = [];
  Sizedata: SizeData[] = [
    {
      size: 'First',
      Change: false,
      sizeCost: 0,
      // sizeName:1
    },
    {
      size: 'Percent',
      Change: false,
      sizeCost: 0,
      // sizeName:2
    },
    {
      size: '5-8',
      Change: false,
      sizeCost: 0,
      // sizeName:3
    },
    {
      size: '8-10',
      Change: false,
      sizeCost: 0,
      // sizeName:4
    },
  ];
  sizeorder: ISizeOrder = {
    sizeId: 0,
    sizeName: 0,
    sizeCost: 0,
    companyId: 0,
    Change: true,
  };

  sizeComp: ICompanysize = {
    percent: 0,
    companyId: 0,
    firstPrice: 0,
    dimfirstPrice: 0,
    dimpercent: 0,
    Change: false,
    dimenWeightComp:0
  };
  priceinfo: IPriceComp = {
    from: '',
    to: '',
    deliveryTime: '',
    companyId: '',
    priceCost: 0,
    priceId: 0,
    Change: true,
    DayEnd:[],
    DayName:[],
    DayStart:[],
    tableTime:[]
  };
  fromm: string = 'Dubai';
  durationTime: string = '5h';

  constructor(
    public dialog: MatDialog,
    private CRUDService: CRUDTestService,
    private CompanyService: CompanyService,
    private router: Router,
    private toster: ToastrService,
    public loaderService: LoaderService
  ) {}
  // dtOptions: any = {};

  ngOnInit(): void {
    // this.dataSource.sort = this.sort;
    this.dtOptions = {
      // Use this attribute to enable the responsive extension
      responsive: true,
    };
    this.getSize();
    this.getPrice();
    this.getType();
    this.getEmirates();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = [
    'No.',
    'Price',
    'AreaFrom',
    'AreaTo',
    'DeliveryTime',
    'edit',
    'delete',
  ];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getPrice() {
    // console.log('response');
    // console.log(this.durationTime)
    this.CRUDService.getAllPriceFrom(this.fromm).subscribe(
      (response) => {
        // console.log(response);
        if (response.returnObject.length != 0) {
          //  this.dataSource.data = response.returnObject;
          this.PriceComp = response.returnObject;
          // console.log(this.PriceComp);
        } else {
          this.PriceComp = response.returnObject;
          this.toster.info('No Record Found', 'info', {
            timeOut: 5000,
            closeButton: true,
            progressBar: true,
          });
          //  this.dataSource.data = response.returnObject;
          console.log('no data');
        }

        // this.ProductList2 = response;
        // this.dataSource2 = response;
        // console.log(response);
      },
      (err) => {
        // console.log(err)
      }
    );
    //      this.CRUDService.getAllPricefilter(this.fromm,this.durationTime).subscribe(
    //       (response) => {
    //         console.log(response);
    //          if (response.returnObject.length != 0) {
    //           //  this.dataSource.data = response.returnObject;
    //            this.Prices=response.returnObject
    //         console.log(this.Prices);

    //          }

    //          else {
    //           this.Prices=response.returnObject

    //           //  this.dataSource.data = response.returnObject;
    //  console.log("no data")
    //          }

    //         // this.ProductList2 = response;
    //         // this.dataSource2 = response;
    //         // console.log(response);
    //       },
    //       (err) => {
    //         // console.log(err)
    //       }
    //     );
    this.dataSource;
  }

  addprice() {
    const dialogRef = this.dialog.open(DialogAddPriceComponent, {
      width: '700px',
      disableClose: true,
      // margin: '0 auto'
      // disableClose: true,
      // hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.getPrice();
    });
  }

  deleteCar(id: number) {
    console.log(id);
    this.CRUDService.deleteCar(id).subscribe(
      (res) => {
        this.getPrice();

        this.toster.success('Item Deleted successfully', 'succes', {
          timeOut: 2000,
          closeButton: true,
          progressBar: true,
        });
        // console.log(res)

        // console.log("res")
        // console.log(res)
      },
      (err) => {
        console.log(err);
        // this.toster.error(err.statusText,'Error',{timeOut : 2000,closeButton:true,progressBar:true})
      }
    );
    // console.log(element)
  }

  updateCar(id: string) {
    this.router.navigateByUrl('Company/Dashboard/UpdateCar', {
      state: { carId: id },
    });
  }

  getEmirates() {
    this.CRUDService.getAllEmirates().subscribe(
      (res) => {
        // console.log(res)
        this.emirates = res.returnObject;
        this.emirates.forEach((element) => {
          // console.log(element.emirateEng)
        });
        // console.log(this.emirates)
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // changeprice(valuee:IListPrice){
  changeprice(valuee: IPriceComp) {
    // console.log(valuee)
    valuee.Change = !valuee.Change;
    // value=!value
  }
  changetype(typee: ITypeOrder) {
    typee.Change = !typee.Change;
  }

  changesize(sizee: SizeData) {
    sizee.Change = !sizee.Change;
  }

  // changepriceApi(valuee:IListPrice){
  changepriceApi(valuee: IPriceComp) {
    valuee.Change = !valuee.Change;

    // console.log(valuee.priceId)

    this.priceinfo.from = valuee.from;
    this.priceinfo.to = valuee.to;
    this.priceinfo.deliveryTime = valuee.deliveryTime;
    this.priceinfo.companyId = valuee.companyId;
    this.priceinfo.priceCost = valuee.priceCost;

    if (valuee.priceId == 0) {
      // console.log("sdfghjk"+valuee.priceId)

      this.CRUDService.addPrice(this.priceinfo).subscribe(
        (res) => {
          // console.log("res")
          this.toster.success('Item added successfully', 'succes', {
            timeOut: 2000,
            closeButton: true,
            progressBar: true,
          });

          // console.log(res)
        },
        (error) => {
          console.error(error);
          console.log(error);
        }
      );
    } else {
      this.priceinfo.priceId = valuee.priceId;
      // console.log(valuee.priceId)

      this.CRUDService.updatePrice(this.priceinfo).subscribe(
        (res) => {
          // console.log("res")
          this.toster.success('Item added successfully', 'succes', {
            timeOut: 2000,
            closeButton: true,
            progressBar: true,
          });

          // console.log(res)
        },
        (error) => {
          console.error(error);
          console.log(error);
        }
      );
    }
  }

  getType() {
    // console.log('response');
    this.CompanyService.getType().subscribe(
      (response) => {
        if (response.returnObject.length != 0) {
          // console.log(response);

          this.OrderTypeINfo = response.returnObject;
          //  this.dataSource.data = response.returnObject;
          //  this.Prices=response.returnObject
          // console.log(this.OrderTypeINfo);
        } else {
          // this.Prices=response.returnObject

          console.log('no data');
        }
      },
      (err) => {
        console.log(err);
      }
    );
    this.dataSource;
  }
  addType() {
    if (this.compID != null) {
      this.OrderTypeINfo2.companyId = parseInt(this.compID);
    }
    console.log(this.OrderTypeINfo2);
    this.CompanyService.addType(this.OrderTypeINfo2).subscribe(
      (res) => {
        console.log('res');
        this.getType();
        this.OrderTypeINfo2.typeCost = 0;
        this.OrderTypeINfo2.typeName = '';

        this.toster.success('Item added successfully', 'succes', {
          timeOut: 2000,
          closeButton: true,
          progressBar: true,
        });

        console.log(res);
      },
      (error) => {
        console.error(error);
        console.log(error);
      }
    );
  }

  getSize() {
    this.CompanyService.getPriceSize().subscribe(
      (response) => {
        if (response.returnObject != null) {
          console.log(response.returnObject);

          this.sizeComp = response.returnObject;
        } else {
          console.log('no data');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
  addSize() {
    if (this.compID != null) {
      this.sizeorder.companyId = parseInt(this.compID);
    }
    console.log(this.sizeorder);
    this.CompanyService.addSize(this.sizeorder).subscribe(
      (res) => {
        console.log('res');
        this.getSize();
        this.sizeorder.sizeCost = 0;
        this.sizeorder.sizeName = 0;

        this.toster.success('Item added successfully', 'succes', {
          timeOut: 2000,
          closeButton: true,
          progressBar: true,
        });

        console.log(res);
      },
      (error) => {
        console.error(error);
        console.log(error);
      }
    );
  }

  sizeCompFun() {
    // console.log(this.sizeComp)
  }

  first: boolean = false;
  firstPercent: boolean = false;
  dimfirst: boolean = false;
  dimpercentt: boolean = false;
  dimenWeightComp: boolean = false;
changeSize(id: number) {
    // console.log(this.first,this.firstPercent,this.dimfirst,this.dimpercentt)
    if (id == 1) {
      // console.log('first')
      this.first = !this.first;
    } else if (id == 2) {
      // console.log('percent')
      // console.log(this.firstPercent)
      this.firstPercent = !this.firstPercent;
      // console.log(this.firstPercent)
    } else if (id == 3) {
      // console.log('dimfirst')
      this.dimfirst = !this.dimfirst;
    } else if (id == 4) {
      // console.log('dimpercentt')
      this.dimpercentt = !this.dimpercentt;
    }
     else if (id == 5) {
      // console.log('dimpercentt')
      this.dimenWeightComp = !this.dimenWeightComp;
    }

    this.CompanyService.addPriceSize(this.sizeComp).subscribe(
      (response) => {
        this.toster.success('Item Updated successfully', 'succes', {
          timeOut: 2000,
          closeButton: true,
          progressBar: true,
        });
      },
      (err) => {
        console.log(err);
      }
    );
    // console.log(this.sizeComp)
  }
}
