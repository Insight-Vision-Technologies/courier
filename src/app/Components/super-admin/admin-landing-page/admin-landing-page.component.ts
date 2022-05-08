import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminAvailableCitiesComponent } from '../admin-available-cities/admin-available-cities.component';
// import { AdmineditFeaturesComponent } from '../adminedit-features/adminedit-features.component';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  // ViewArea(){
  //   const dialogRef = this.dialog.open(AdminAvailableCitiesComponent,
  //     {
  //       width: '1000px',
  //       disableClose:true,

  //       // margin: '0 auto'
  //       // disableClose: true,
  //       // hasBackdrop: true,
  //     });

  //     dialogRef.afterClosed().subscribe(async (result) => {
  //     console.log('gggggg');
  //   });
  // }
  // viewFeatures(){
  //   const dialogRef = this.dialog.open(AdmineditFeaturesComponent,
  //     {
  //       width: '1000px',
  //       disableClose:true,

  //       // margin: '0 auto'
  //       // disableClose: true,
  //       // hasBackdrop: true,
  //     });

  //     dialogRef.afterClosed().subscribe(async (result) => {
  //     console.log('gggggg');
  //   });
  // }
}
