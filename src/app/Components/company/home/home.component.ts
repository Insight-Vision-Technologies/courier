import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { ICompanyTodayOrder } from 'src/app/Models/icompany';
import { CompanyService } from 'src/app/Services/company.service';

export interface ICardsDash {
  title: string;
  NoDocument?: number;
  Icon: string;
  ColorBck: string;
  clickFun: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cardsBool: boolean = true;
  orderCount:number=0
  orderHistoryCount:number=0
  CountDirection:number=0
  CountRate:number=0
  CountPayment:number=0
orderList:ICompanyTodayOrder[]=[]
  Cards: ICardsDash[] = [
    // {
    //   title: 'Car Reports',
    //   NoDocument: '152',
    //   Icon: 'fas fa-car',
    //   ColorBck: 'card-header-warning',
    //   clickFun: 'available',
    // },
    {
      title: 'Car Direction',
      NoDocument: 0,
      Icon: 'fas fa-route',
      ColorBck: 'card-header-success',
      clickFun: 'car',
    },
    {
      title: 'History',
      NoDocument: 0,
      Icon: 'fas fa-history',
      ColorBck: 'card-header-danger',
      clickFun: 'history',
    },
    {
      title: 'TimeTable',
      // NoDocument: 0,
      Icon: 'fas fa-heart',
      ColorBck: 'card-header-info',
      clickFun: 'timeTable',
    },
    // {
    //   title: 'Special Order',
    //   NoDocument: '25',
    //   Icon: 'fas fa-star',
    //   ColorBck: 'card-header-info',
    //   clickFun: 'specail',
    // },
    // {
    //   title: 'Best Sender',
    //   NoDocument: '2',
    //   Icon: 'fas fa-c',
    //   ColorBck: 'card-header-primary',
    //   clickFun: 'best',
    // },
  ];
  constructor(private router: Router,
    private CompanyService: CompanyService,
    public loaderService: LoaderService,
    private compService: CompanyService,
    ) {}

  ngOnInit(): void {
    this.getInfoCard()

  }

  onClick(card: string) {
    if (card == 'history') {
      this.router.navigateByUrl('Company/Dashboard/history');
    } else if (card == 'best')
      this.router.navigateByUrl('Company/Dashboard/best');
    else if (card == 'specail')
      this.router.navigateByUrl('Company/Dashboard/special');
    else if (card == 'car')
      this.router.navigateByUrl('Company/Dashboard/direction');
    else if (card == 'available')
      this.router.navigateByUrl('Company/Dashboard/details');
    else if (card == 'timeTable')
      this.router.navigateByUrl('Company/Dashboard/timeTable');
  }

  getInfoCard(){

    this.CompanyService.getOrderCount().subscribe(
      (res) => {

        // console.log(res.returnObject)

        this.orderCount=res.returnObject
      },
      (err) => {
        console.log(err)
      }
    );
    this.CompanyService.getOrderHistoryCount().subscribe(
      (res) => {

        // console.log(res.returnObject)

        this.orderHistoryCount=res.returnObject
        // console.log(this.orderHistoryCount)
        this.Cards[1].NoDocument=this.orderHistoryCount
      },
      (err) => {
        console.log(err)
      }
    );
    this.compService.GetTodayOrders().subscribe(
      (response) => {
        console.log("response.asdfg"+response)

        if (response.returnObject.length != 0) {
          console.log(response.returnObject)

          this.orderList=response.returnObject
        }

        else {
        console.log("no data")
        }
      },
      (err) => {
        console.log(err)
      }
    );

    this.compService.CountDirection().subscribe(
      (response) => {

        if (response.returnObject != 0) {
          console.log(response.returnObject)

          this.CountDirection=response.returnObject

          this.Cards[0].NoDocument=this.CountDirection
        }

        else {
        console.log("no data")
        }
      },
      (err) => {
        console.log(err)
      }
    );
    this.compService.CountRate().subscribe(
      (response) => {

        if (response.returnObject != 0) {
          console.log(response.returnObject)

          this.CountRate=response.returnObject

        }

        else {
        console.log("no data")
        }
      },
      (err) => {
        console.log(err)
      }
    );
      this.compService.CountPayment().subscribe(
      (response) => {

        if (response.returnObject != 0) {
          console.log(response.returnObject)

          this.CountPayment=response.returnObject

        }

        else {
        console.log("no data")
        }
      },
      (err) => {
        console.log(err)
      }
    );
  }

  createOrder(){
    this.router.navigateByUrl('CreateOrder', {
      state: {company:'true'},
    });
  }
}
