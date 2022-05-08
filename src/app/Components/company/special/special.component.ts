import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iorder } from './../../../Models/iorder';

export interface ICardsDash {
  title: string;
  NoDocument: string;
  Icon: string;
  ColorBck: string;
  clickFun: string;
}
@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css'],
})
export class SpecialComponent implements OnInit {
  panelOpenState = false;

  cardsBool: boolean = true;
editMode:boolean=true;
price:string='';
  Cards: Iorder[] = [
    {
      UserName: 'Ahmed',
      OrderFrom: 'Dubai',
      OrderTo: 'Ajman',
      OrderDate: '22/10',
     Change:true,
      OrderPrice: '25',
      Item: {
        itemType: 'glass',
        itemSize: '2',
        itemNumber: '3',
      },
    },
    {
      UserName: 'Azhar',
      OrderFrom: 'Dubai',
      OrderTo: 'Shj',
      OrderDate: '20/12',
     Change:true,
      OrderPrice: '30',
      Item: {
        itemType: 'glass',
        itemSize: '2',
        itemNumber: '3',
      },
    },
    {
      UserName: 'Youssef',
      OrderFrom: 'Ajman',
      OrderTo: 'Shj',
      OrderDate: '5/12',
     Change:true,
      OrderPrice: '30',
      Item: {
        itemType: 'ss',
        itemSize: '2',
        itemNumber: '3',
      },
    },
    {
      UserName: 'Endy',
      OrderFrom: 'shj',
      OrderTo: 'Dubai',
      OrderDate: '3/12',
     Change:true,
      OrderPrice: '50',
      Item: {
        itemType: 'sdfss',
        itemSize: '2',
        itemNumber: '3',
      },
    },
    {
      UserName: 'Adam',
      OrderFrom: 'Dubai',
      OrderTo: 'Shj',
      OrderDate: '10/5',
     Change:true,
      OrderPrice: '36',
      Item: {
        itemType: 'paper',
        itemSize: '2',
        itemNumber: '3',
      },
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(card: string) {
    if (card == 'history') {
      this.router.navigateByUrl('Company/Dashboard/history');
    } else if (card == 'best') console.log('best');
    else if (card == 'specail')
      this.router.navigateByUrl('Company/Dashboard/special');
    else if (card == 'car') console.log('car');
    else if (card == 'available') console.log('available');
  }

  home() {
    this.router.navigateByUrl('Company/Dashboard/home');
  }

  changeprice(value:Iorder){
    console.log(value)
value.Change=!value.Change
    // value=!value
    console.log(value)

    console.log(this.editMode)
    this.editMode=value.Change

    // this.editMode=!this.editMode
    console.log(this.editMode)

  }
}
