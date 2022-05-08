import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ihistory } from 'src/app/Models/ihistory';
import { ICarAvailable } from './../../../Models/i-car-available';

@Component({
  selector: 'app-car-available',
  templateUrl: './car-available.component.html',
  styleUrls: ['./car-available.component.css'],
 
})



export class CarAvailableComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  statuscolor:string=''
  dataSource:ICarAvailable[]=[
{
  CarType:'fa-car-side',
    CarPlate:'gd25',
    CarDriver:'DriverID',
    CarHistory:[{
      CarFrom:'string',
      CarTo:'string',
      CarDate:'string',
    }],
},
{
  CarType:'fa-truck-pickup',
    CarPlate:'52s6',
    CarDriver:'DriverID',
    CarHistory:[{
      CarFrom:'string',
      CarTo:'string',
      CarDate:'string',
    }],
},
{
  CarType:'fa-truck-pickup',
    CarPlate:'4s4s',
    CarDriver:'DriverID',
    CarHistory:[{
      CarFrom:'string',
      CarTo:'string',
      CarDate:'string',
    }],
},
{
  CarType:'fa-truck',
    CarPlate:'5s25',
    CarDriver:'DriverID',
    CarHistory:[{
      CarFrom:'string',
      CarTo:'string',
      CarDate:'string',
    }],
},
{
  CarType:'fa-motorcycle',
    CarPlate:'ss55',
    CarDriver:'DriverID',
    CarHistory:[{
      CarFrom:'string',
      CarTo:'string',
      CarDate:'string',
    }],
},

  ]

  home() {
    this.router.navigateByUrl('Company/Dashboard/home');
  }
}
