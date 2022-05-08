import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-main-pricing',
  templateUrl: './main-pricing.component.html',
  styleUrls: ['./main-pricing.component.css']
})
export class MainPricingComponent implements OnInit {
  minValue: number = 0;
  maxValue: number = 100000;
  stepValue: any= [0,150,800,1600,4000,6000,9000,12000,20000,40000,100000];
  monthlyTotal: number = 0;
  costPerOrder: number = 0;
  totalOrders:number=this.minValue;
  saveValue: number = 0;
  discountValue: number = 0;
  discountPercent:number=0;
  total: number = 0;
  discountArray: number[] = [0,0,9,18,27,26,45,54,63,72,72];
  costPerOrderArray: number[] = [0.0, 0.11, 0.1, 0.1, 0.09, 0.08, 0.07, 0.06, 0.05, 0.04, 0.03];

  options: Options = {
    floor: 0,
    ceil: 100000,
    step: 1,
    stepsArray:[
      {value: 0, legend: 'Orders/Month'},
      {value: 150, legend: 'Orders/Month'},
      {value: 1600, legend: 'Orders/Month'},
      {value: 4000, legend: 'Orders/Month'},
      {value: 6000, legend: 'Orders/Month'},
      {value: 9000, legend: 'Orders/Month'},
      {value: 12000, legend: 'Orders/Month'},
      {value: 20000, legend: 'Orders/Month'},
      {value: 40000, legend: 'Orders/Month'},
      {value: 100000, legend: 'Orders/Month'},
    
    ],
    showSelectionBar: true,
    showTicks: true,
    showTicksValues: true,
    selectionBarGradient: {
      from: '#ee4d47',
      to: '#fd665a'
    },
    getPointerColor:(value: number): string => {return '#ee4d47';},
    getLegend: (value: number): string => {
      //return '<b>Ord./Month</b>' + value;
      return 'Orders/Month'+value;
    }
  };

  changValue(event: any) {
    if (event >= this.stepValue[1]) {
      this.totalOrders=this.minValue;
      this.discountPercent=this.discountArray[0];
      this.costPerOrder=this.costPerOrderArray[0];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[1]);
      this.discountValue =Math.round((this.total*this.discountArray[0])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[1] && event <= this.stepValue[2]) {
      this.totalOrders=this.minValue;
      this.discountPercent=this.discountArray[1];
      this.costPerOrder=this.costPerOrderArray[1];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[1]);
      this.discountValue =Math.round((this.total*this.discountArray[1])/100);
      this.monthlyTotal = Math.round(this.total-this.discountValue);
      this.saveValue = this.discountValue;
     

    }
    if (event > this.stepValue[2] && event <= this.stepValue[3]) {
      this.totalOrders=this.minValue;
      this.discountPercent=this.discountArray[2];
      this.costPerOrder=this.costPerOrderArray[2];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[2]);
      this.discountValue = Math.round((this.total*this.discountArray[2])/100);
      this.monthlyTotal = Math.round(this.total-this.discountValue);
      this.saveValue = this.discountValue;
      console.log("Helo",this.costPerOrder, this.total, this.discountValue, this.monthlyTotal, this.saveValue);
    }
    if (event > this.stepValue[3] && event <= this.stepValue[4]) {
      this.totalOrders=this.minValue;
      this.discountPercent=this.discountArray[3];
      this.costPerOrder=this.costPerOrderArray[3];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[3]);
      this.discountValue = Math.round((this.total*this.discountArray[3])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[4] && event <= this.stepValue[5]) {
      this.totalOrders=this.minValue;
      this.discountPercent=this.discountArray[4];
      this.costPerOrder=this.costPerOrderArray[4]; 
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[4]);
      this.discountValue = Math.round((this.total*this.discountArray[4])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[5] && event <= this.stepValue[6]) {
      this.totalOrders=this.minValue;
      this.discountPercent=this.discountArray[5];
      this.costPerOrder=this.costPerOrderArray[5];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[5]);
      this.discountValue = Math.round((this.total*this.discountArray[5])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[6] && event <= this.stepValue[7]) {
      this.totalOrders=this.minValue;
      this.discountPercent=this.discountArray[6];
      this.costPerOrder=this.costPerOrderArray[6];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[6]);
      this.discountValue = Math.round((this.total*this.discountArray[6])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[7] && event <= this.stepValue[8]) {
      this.totalOrders=this.minValue;
      this.discountPercent=this.discountArray[7];
      this.costPerOrder=this.costPerOrderArray[7];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[7]);
      this.discountValue = Math.round((this.total*this.discountArray[7])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[8] && event <= this.stepValue[9]) {
      this.totalOrders=this.minValue;
      this.discountPercent=this.discountArray[8];
      this.costPerOrder=this.costPerOrderArray[8];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[8]);
      this.discountValue = Math.round((this.total*this.discountArray[8])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[9] && event <= this.stepValue[10]) {
      this.totalOrders=this.minValue;
      this.discountPercent=this.discountArray[8];
      this.costPerOrder=this.costPerOrderArray[9];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[9]);
      this.discountValue = Math.round((this.total*this.discountArray[9])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[10]) {
      this.totalOrders=this.minValue;
      this.discountPercent=this.discountArray[10];
      this.costPerOrder=this.costPerOrderArray[10];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[10]);
      this.discountValue = Math.round((this.total*this.discountArray[10])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
  }

  bgColor: string = 'linear-gradient(to right, #ff6a5b 10%, #da184f 90%);'
  // dateRange: Date[] = this.customDateRange();
  // value: number = this.dateRange[0].getTime();
  constructor() { }

  ngOnInit(): void {
    this.bgColor = '#ff695b5e'

  }

  clickIncrement(event:any){
    this.totalOrders++;
    if (event >= this.stepValue[1]) {
      this.discountPercent=this.discountArray[0];
      this.costPerOrder=this.costPerOrderArray[0];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[1]);
      this.discountValue =Math.round((this.total*this.discountArray[0])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[1] && event <= this.stepValue[2]) {
      this.discountPercent=this.discountArray[1];
      this.costPerOrder=this.costPerOrderArray[1];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[1]);
      this.discountValue =Math.round((this.total*this.discountArray[1])/100);
      this.monthlyTotal = Math.round(this.total-this.discountValue);
      this.saveValue = this.discountValue;
     

    }
    if (event > this.stepValue[2] && event <= this.stepValue[3]) {
      this.discountPercent=this.discountArray[2];
      this.costPerOrder=this.costPerOrderArray[2];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[2]);
      this.discountValue = Math.round((this.total*this.discountArray[2])/100);
      this.monthlyTotal = Math.round(this.total-this.discountValue);
      this.saveValue = this.discountValue;
      console.log("Helo",this.costPerOrder, this.total, this.discountValue, this.monthlyTotal, this.saveValue);
    }
    if (event > this.stepValue[3] && event <= this.stepValue[4]) {
      this.discountPercent=this.discountArray[3];
      this.costPerOrder=this.costPerOrderArray[3];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[3]);
      this.discountValue = Math.round((this.total*this.discountArray[3])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[4] && event <= this.stepValue[5]) {
      this.discountPercent=this.discountArray[4];
      this.costPerOrder=this.costPerOrderArray[4]; 
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[4]);
      this.discountValue = Math.round((this.total*this.discountArray[4])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[5] && event <= this.stepValue[6]) {
      this.discountPercent=this.discountArray[5];
      this.costPerOrder=this.costPerOrderArray[5];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[5]);
      this.discountValue = Math.round((this.total*this.discountArray[5])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[6] && event <= this.stepValue[7]) {
      this.discountPercent=this.discountArray[6]; 
      this.costPerOrder=this.costPerOrderArray[6];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[6]);
      this.discountValue = Math.round((this.total*this.discountArray[6])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[7] && event <= this.stepValue[8]) {
      this.discountPercent=this.discountArray[7];
      this.costPerOrder=this.costPerOrderArray[7];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[7]);
      this.discountValue = Math.round((this.total*this.discountArray[7])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[8] && event <= this.stepValue[9]) {
      this.discountPercent=this.discountArray[8];
      this.costPerOrder=this.costPerOrderArray[8];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[8]);
      this.discountValue = Math.round((this.total*this.discountArray[8])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[9] && event <= this.stepValue[10]) {
      this.discountPercent=this.discountArray[9];
      this.costPerOrder=this.costPerOrderArray[9];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[9]);
      this.discountValue = Math.round((this.total*this.discountArray[9])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[10]) {
      this.discountPercent=this.discountArray[10];
      this.costPerOrder=this.costPerOrderArray[10];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[10]);
      this.discountValue = Math.round((this.total*this.discountArray[10])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
  }
  clickDicrement(event:any){
    this.totalOrders--
    if (event >= this.stepValue[1]) {
      this.discountPercent=this.discountArray[0];
      this.costPerOrder=this.costPerOrderArray[0];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[1]);
      this.discountValue =Math.round((this.total*this.discountArray[0])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[1] && event <= this.stepValue[2]) {
      this.discountPercent=this.discountArray[1];
      this.costPerOrder=this.costPerOrderArray[1];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[1]);
      this.discountValue =Math.round((this.total*this.discountArray[1])/100);
      this.monthlyTotal = Math.round(this.total-this.discountValue);
      this.saveValue = this.discountValue;
     

    }
    if (event > this.stepValue[2] && event <= this.stepValue[3]) {
      this.discountPercent=this.discountArray[2];
      this.costPerOrder=this.costPerOrderArray[2];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[2]);
      this.discountValue = Math.round((this.total*this.discountArray[2])/100);
      this.monthlyTotal = Math.round(this.total-this.discountValue);
      this.saveValue = this.discountValue;
      console.log("Helo",this.costPerOrder, this.total, this.discountValue, this.monthlyTotal, this.saveValue);
    }
    if (event > this.stepValue[3] && event <= this.stepValue[4]) {
      this.discountPercent=this.discountArray[3];
      this.costPerOrder=this.costPerOrderArray[3];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[3]);
      this.discountValue = Math.round((this.total*this.discountArray[3])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[4] && event <= this.stepValue[5]) {
      this.discountPercent=this.discountArray[4];
      this.costPerOrder=this.costPerOrderArray[4]; 
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[4]);
      this.discountValue = Math.round((this.total*this.discountArray[4])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[5] && event <= this.stepValue[6]) {
      this.discountPercent=this.discountArray[5];
      this.costPerOrder=this.costPerOrderArray[5];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[5]);
      this.discountValue = Math.round((this.total*this.discountArray[5])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[6] && event <= this.stepValue[7]) {
      this.discountPercent=this.discountArray[6];
      this.costPerOrder=this.costPerOrderArray[6];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[6]);
      this.discountValue = Math.round((this.total*this.discountArray[6])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[7] && event <= this.stepValue[8]) {
      this.discountPercent=this.discountArray[7];
      this.costPerOrder=this.costPerOrderArray[7];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[7]);
      this.discountValue = Math.round((this.total*this.discountArray[7])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[8] && event <= this.stepValue[9]) {
      this.discountPercent=this.discountArray[8];
      this.costPerOrder=this.costPerOrderArray[8];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[8]);
      this.discountValue = Math.round((this.total*this.discountArray[8])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[9] && event <= this.stepValue[10]) {
      this.discountPercent=this.discountArray[9];
      this.costPerOrder=this.costPerOrderArray[9];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[9]);
      this.discountValue = Math.round((this.total*this.discountArray[9])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
    if (event > this.stepValue[10]) {
      this.discountPercent=this.discountArray[10];
      this.costPerOrder=this.costPerOrderArray[10];
      this.total = Math.round(this.totalOrders * this.costPerOrderArray[10]);
      this.discountValue = Math.round((this.total*this.discountArray[10])/100);
      this.monthlyTotal = Math.round(this.total - this.discountValue);
      this.saveValue = this.discountValue;
     
    }
  }


}

