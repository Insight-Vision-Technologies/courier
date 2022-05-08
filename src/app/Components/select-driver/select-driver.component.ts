import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { IDriverSelect } from './../../Models/i-driver-select';

@Component({
  selector: 'app-select-driver',
  templateUrl: './select-driver.component.html',
  styleUrls: ['./select-driver.component.css']
})
export class SelectDriverComponent implements OnInit {

  bgColor:string='linear-gradient(to right, #ff6a5b 10%, #da184f 90%);'
  driver:IDriverSelect[]=[
    {
    companyName:"DishDash",
    companyImg:"https://bootdey.com/img/Content/avatar/avatar7.png",
    companyRate:4,
    Price:"25",
  },
  {
    companyName:"Alex",
    companyImg:"https://bootdey.com/img/Content/avatar/avatar2.png",
    companyRate:2,
    Price:"30",
  },
  {
    companyName:"Comp",
    companyImg:"../../../assets/img/gallery/sq.jpg",
    companyRate:4,
    Price:"25",
  },
  {
    companyName:"zoza",
    companyImg:"../../../assets/img/fp.JPG",
    companyRate:4,
    Price:"25",
  },
]
  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }
 
  ngOnInit(): void {
   
  this.bgColor='#ff695b5e'
  
  }
  

}
