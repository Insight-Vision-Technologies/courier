import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IDirection } from 'src/app/Models/idirection';
import { IPriceComp } from 'src/app/Models/iprice-comp';
import { ITimeTable } from 'src/app/Models/itime-table';
import { CompanyService } from 'src/app/Services/company.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { DeliveryTime } from '../pricing/pricing.component';

export interface DeliveryTimePrice {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface DeliveryTimeCost {
  time: string;
  Cost: number;
}

@Component({
  selector: 'app-dialog-add-price',
  templateUrl: './dialog-add-price.component.html',
  styleUrls: ['./dialog-add-price.component.css'],
})
export class DialogAddPriceComponent implements OnInit {
  fromEmirate: any = [];
  fromAllEmirate: any = [];
  toAllEmirate: any = [];
  allEmirate: any = [];
  toEmirate: any = [];
  toStoredEmirate: any = [];
  fromStoredEmirate: any = [];
  duration: any = [];
  allPricesData: any = [];
  fromTo: any = [];
  changeTo: any = [];
  DirectionList: IDirection[] = [];
  fromList: string[] = [];
  toList: string[] = [];
  timeTableDays: ITimeTable[] = [];
  message: string = 'loading :(';
  constructor(
    public dialogRef: MatDialogRef<DialogAddPriceComponent>,
    private CRUDService: CRUDTestService,
    private CompanyService: CompanyService,
    private toster: ToastrService,
    private cdr: ChangeDetectorRef
  ) {
    this.dropdownData();
    this.getDirection()
  }
  ngAfterViewChecked() {
    this.message = 'all done loading :)';
    this.cdr.detectChanges();
  }
  selectedCompanies:number[]=[];

  ngOnInit() {}

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
    // priceCost5h:0
  };

  delTime: DeliveryTimePrice = {
    fourth: '',
    first: '',
    second: '',
    third: '',
  };
  filterDropdown(event: any) {
    this.CRUDService.getAllPrices().subscribe((response: any) => {
      if (Object.keys(response).length != 0) {
        this.allPricesData = response;
        this.toStoredEmirate = [];
        console.log('i am all prices', this.allPricesData);

        let toLocalArray = this.allPricesData.reduce(function (
          sums: any,
          entry: any
        ) {
          if (entry.from == event) {
            console.log("I am inside occurrence if");
            sums[entry.to] = (sums[entry.to] || 0) + 1;
            return sums;
          }
          else {
            console.log("I am inside occurrence else");
            sums['null']= 0;
            return sums;
          }
        },
        {});
        console.log('Hello i am after reduce', toLocalArray);
        if (toLocalArray != null) {
          let j = 0;
          for (const [key, value] of Object.entries(toLocalArray)) {
            if (Number.parseInt(`${value}`) >= 4 && `${key}` !== 'null') {
              this.toStoredEmirate[j] = `${key}`;
              console.log(`${key}: ${value}`);
              j++;
            }
          }
        }
        console.log(
          'I am final to Stored occurrence',
          this.toStoredEmirate,
          this.toAllEmirate
        );
        for (var i = 0; i < this.fromTo.length; i++) {
          console.log("I am outside if ",event,this.changeTo);
          if (this.fromTo[i].from == event) {

            if (this.toStoredEmirate.length > 0) {
              this.changeTo = this.toAllEmirate.filter((x: any) => {
                return this.toStoredEmirate.indexOf(x) < 0;
              });
            }
            console.log("I am equal ",event,this.changeTo);
           break;
          }
          else {
            this.changeTo = this.fromTo[i].to;
            console.log("I am not equal ", event, this.changeTo);
           // break;
            }
        }

        console.log(
          'i am final All To',
          this.toAllEmirate,
          'Stored',
          this.toStoredEmirate,
          'FInal',
          this.toEmirate
        );
      }
      else {
          //this.allEmirate = response;
        for (var i = 0; i < this.fromTo.length; i++) {
          this.changeTo = this.fromTo[i].to;
        }
          console.log('no data');
        }
    });
  }
  filterDataFrom(arr: any) {
    const grouped = arr.reduce((grouping: any, item: any) => {
      grouping[item.from] =
        (grouping[item.from] || '') + item.from;
      return grouping;
    }, {});
    return Object.keys(grouped).map((key) => {
      return grouped[key];
    });
  }
  filterDataTo(arr: any) {
    const grouped = arr.reduce((grouping: any, item: any) => {
      grouping[item.to] =
        (grouping[item.to] || '') + item.to;
      return grouping;
    }, {});
    return Object.keys(grouped).map((key) => {
      return grouped[key];
    });
  }

  dropdownData() {
    this.CRUDService.getAllDriverCompany().subscribe(
      (response) => {
        console.log('i am all drivers', response.returnObject);
        if (Object.keys(response.returnObject).length != 0) {
          // this.allEmirate = this.filterDataFrom(response.returnObject);
          this.fromAllEmirate=this.filterDataFrom(response.returnObject);
          this.toAllEmirate=this.filterDataTo(response.returnObject);
          this.fromEmirate= this.fromAllEmirate;
          this.toEmirate = this.toAllEmirate;
          console.log("I am from all and to all",this.fromAllEmirate,this.toAllEmirate);
          for (var i = 0; i < this.fromAllEmirate.length; i++) {
            this.fromTo.push({ from: this.fromAllEmirate[i], to: this.toAllEmirate });
          }
          console.log('I am from to array object', this.fromTo);
          console.log(
            'I am all driver ',
            ' from ',
            this.fromAllEmirate,
            ' to ',
            this.toAllEmirate
          );
        } else {
          //this.allEmirate = response;
          console.log('no data');
        }
      },
      (err) => {
        console.log(err);
      }
    );
    this.CRUDService.getAllPrice().subscribe(
      (response: any) => {
        if (Object.keys(response).length != 0) {
        }
        // console.log("i am all prices before",response,Object.keys(response).length);
        //  if (Object.keys(response).length!=0) {
        //    this.allPricesData = response;

        // console.log("i am all prices",this.allPricesData);
        // let fromLocalArray = this.allPricesData.reduce(function (sums: any, entry: any) {
        //   sums[entry.from] = (sums[entry.from] || 0) + 1;
        //   return sums;
        // }, {});
        // let toLocalArray = this.allPricesData.reduce(function (sums: any, entry: any) {
        //   sums[entry.to] = (sums[entry.to] || 0) + 1;
        //   return sums;
        // }, {});
        // console.log("I am occurrence",fromLocalArray,toLocalArray);
        // let i = 0;
        // for (const [key, value] of Object.entries(fromLocalArray)) {
        //   if (Number.parseInt(`${value}`) >= 4 && `${key}`!=='null') {
        //     this.fromStoredEmirate[i] = `${key}`;
        //     console.log(`${key}: ${value}`);
        //     i++;
        //   }
        //    }
        //     console.log("I am final from Stored occurrence",this.fromStoredEmirate);
        //    if (this.fromStoredEmirate.length > 0) {
        //     this.fromEmirate=this.fromAllEmirate.filter((x:any) => {
        //     return this.fromStoredEmirate.indexOf(x) < 0;
        //     });
        //    }
        //  console.log("i am final All From", this.fromAllEmirate,"Stored",this.fromStoredEmirate,"FInal",this.fromEmirate);
        //   let j = 0;
        // for (const [key, value] of Object.entries(toLocalArray)) {
        //   if (Number.parseInt(`${value}`) >= 4 && `${key}`!=='null') {
        //     this.toStoredEmirate[j] = `${key}`;
        //     console.log(`${key}: ${value}`);
        //     j++;
        //   }
        //    }
        //    console.log("I am final to Stored occurrence",this.toStoredEmirate);
        //    if (this.toStoredEmirate.length > 0) {
        //      this.toEmirate=this.toAllEmirate.filter((x:any) => {
        //     return this.toStoredEmirate.indexOf(x) < 0;
        //     });

        //    }

        //   console.log("i am final All To", this.toAllEmirate,"Stored",this.toStoredEmirate,"FInal",this.toEmirate);
        //  }
        else {
          this.allPricesData = response;
          console.log('no data');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  del: DeliveryTime = {
    DeliveryTime: '',
  };
  delList: string[] = [];
  delCost: DeliveryTimeCost[] = [
    {
      time: '5h',
      Cost: 0,
    },
    {
      time: '24h',
      Cost: 0,
    },
    {
      time: '2d',
      Cost: 0,
    },
    {
      time: '4d',
      Cost: 0,
    },
  ];
  idd = localStorage.getItem('compId');

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (this.idd) this.priceinfo.companyId = this.idd;
    this.priceinfo.to = form.value.to;
    this.priceinfo.from = form.value.from;
    this.priceinfo.priceCost = form.value.priceCost;
    this.priceinfo.deliveryTime = form.value.deliveryTime;

    this.delTime.first = form.value.first;
    this.delTime.second = form.value.second;
    this.delTime.third = form.value.third;
    this.delTime.fourth = form.value.fourth;
    console.log(this.delList);

    this.delCost[0].Cost = parseInt(this.delTime.first);
    this.delCost[1].Cost = parseInt(this.delTime.second);
    this.delCost[2].Cost = parseInt(this.delTime.third);
    this.delCost[3].Cost = parseInt(this.delTime.fourth);

    this.priceinfo.DayName[0]="Monday"
    this.priceinfo.DayStart[0]=parseInt( form.value.monbeg)
    this.priceinfo.DayEnd[0]=parseInt( form.value.monend)

    this.priceinfo.DayName[1]="Tuesday"
    this.priceinfo.DayStart[1]=parseInt( form.value.tuebeg)
    this.priceinfo.DayEnd[1]=parseInt( form.value.tueend)

    this.priceinfo.DayName[2]="Wednesday"
    this.priceinfo.DayStart[2]=parseInt( form.value.wenbeg)
    this.priceinfo.DayEnd[2]=parseInt( form.value.wenend)

    this.priceinfo.DayName[3]="Thursday"
    this.priceinfo.DayStart[3]=parseInt( form.value.thurebeg)
    this.priceinfo.DayEnd[3]=parseInt( form.value.thurend)

    this.priceinfo.DayName[4]="Friday"
    this.priceinfo.DayStart[4]=parseInt( form.value.fribeg)
    this.priceinfo.DayEnd[4]=parseInt( form.value.friend)

    this.priceinfo.DayName[5]="Saturday"
    this.priceinfo.DayStart[5]=parseInt( form.value.sarbeg)
    this.priceinfo.DayEnd[5]=parseInt( form.value.sarend)

    this.priceinfo.DayName[6]="Sunday"
    this.priceinfo.DayStart[6]=parseInt( form.value.sunbeg)
    this.priceinfo.DayEnd[6]=parseInt( form.value.sunend)

console.log("ddddddd  "+this.priceinfo.DayEnd)
console.log("ddddddd  "+this.priceinfo.DayName)
console.log("ddddddd  "+this.priceinfo.DayStart)

    this.delList.push(this.delTime.first);

    this.delList.push(this.delTime.second);

    this.delList.push(this.delTime.third);

    this.delList.push(this.delTime.fourth);
    console.log(this.delList);
    console.log(this.priceinfo);

    this.delCost.forEach((element) => {
      this.priceinfo.deliveryTime = element.time;
      this.priceinfo.priceCost = element.Cost;

      this.priceinfo.tableTime=this.selectedCompanies
      this.CRUDService.addPrice(this.priceinfo).subscribe(
        (res) => {
          console.log('res');
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
    });
    setTimeout(() => {
      this.dialogRef.close();
    }, 0);
  }

  testt(ss:any){
    console.log(ss.value)
  }

  getDirection(){

    this.CompanyService.GetDirection().subscribe(
      (response) => {

        if(response.returnObject!=null){
          this.DirectionList=response.returnObject
        console.log(this.DirectionList)

          this.DirectionList.forEach(element => {

            if(!this.fromList.includes(element.from))
            this.fromList.push(element.from)

          });
          console.log(this.fromList)
        }

  });


  this.CompanyService.GetTimeCompanyForPrice().subscribe(
      (response) => {

        if(response.returnObject!=null){

          this.timeTableDays=response.returnObject
        console.log('getTime  ',response.returnObject)

        }

  });
}

  fromData(event:any){

    this.toList=[]
    this.DirectionList.forEach(element => {

      if(element.from==event){
      this.toList.push(element.to)
      console.log('sdff  '+this.toList)
      }
    });

  }

  onValueChange(ff:any){
    console.log(ff.value)
    this.selectedCompanies=ff.value
    console.log(this.selectedCompanies)

  }
}
