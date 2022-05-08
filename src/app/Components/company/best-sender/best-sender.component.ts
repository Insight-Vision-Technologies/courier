import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IsenderBest } from 'src/app/Models/isender-best';
import { DialogEditSenderComponent } from '../dialog-edit-sender/dialog-edit-sender.component';
// import { DialogCarComponent } from './../dialog-car/dialog-car.component';
import {DialogBestSenderComponent} from'./../dialog-best-sender/dialog-best-sender.component';

@Component({
  selector: 'app-best-sender',
  templateUrl: './best-sender.component.html',
  styleUrls: ['./best-sender.component.css']
})
export class BestSenderComponent implements OnInit {

  Cards:IsenderBest[]=[
    {
      userName:"ahmed",
      OrderNumber:'23',
      Discount:'30',
      Orderhistory:[{
        OrderDate:"25/5",
        OrderPrice:"20",
        OrderRate:"2"},
        {
          OrderDate:"3/8",
          OrderPrice:"30",
          OrderRate:"3",}
        
      ]
    },
    {
      userName:"Yara",
      OrderNumber:'9',
      Discount:'10',
      Orderhistory:[{
        OrderDate:"2/2",
        OrderPrice:"60",
        OrderRate:"3",}]
    },
    {
      userName:"Sameh",
      OrderNumber:'3',
      Discount:'5',
      Orderhistory:[{
        OrderDate:"6/1",
        OrderPrice:"21",
        OrderRate:"4",},
        {
          OrderDate:"14/6",
          OrderPrice:"80",
          OrderRate:"5",}]
    },
  ]
  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
  EditSender(){
    const dialogRef = this.dialog.open(DialogEditSenderComponent,
      {
        // width: '700px',
        // disableClose:true,
        // margin: '0 auto'
        // disableClose: true,
        // hasBackdrop: true,
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 
  addbestsender(){
    const dialogRef = this.dialog.open(DialogBestSenderComponent,
      {
        width: '700px',
        disableClose:true,
        // margin: '0 auto'
        // disableClose: true,
        // hasBackdrop: true,
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 

  
  
  home() {
    this.router.navigateByUrl('Company/Dashboard/home');
  }
}
