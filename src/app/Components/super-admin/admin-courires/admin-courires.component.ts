import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICompany } from 'src/app/Models/icompany';
import { AdminService } from 'src/app/Services/admin.service';
import { AdminCourireDerailsComponent } from '../admin-courire-derails/admin-courire-derails.component';
import { AdminCourirefinanceComponent } from '../admin-courirefinance/admin-courirefinance.component';
// import { AdminCourirefinanceComponent } from './admin-courirefinance/admin-courirefinance.component';

@Component({
  selector: 'app-admin-courires',
  templateUrl: './admin-courires.component.html',
  styleUrls: ['./admin-courires.component.css']
})
export class AdminCouriresComponent implements OnInit {

  companyList:ICompany[]=[]
  constructor(public dialog: MatDialog,
  private AdminService: AdminService,
  ) { }

  ngOnInit(): void {
    this.getInfo()
  }

  Viewdetails(compID:number){
    const dialogRef = this.dialog.open(AdminCourireDerailsComponent,
      {
        width: '1000px',
        disableClose:true,
        data: {
          iddd : compID
       },
      });

      dialogRef.afterClosed().subscribe(async (result) => {
      console.log('gggggg');
    });
  }

  ViewFinace(compID:number){
    const dialogRef = this.dialog.open(AdminCourirefinanceComponent,
      {
        width: '1000px',
        disableClose:true,
        data: {
          iddd : compID
       },
      });

      dialogRef.afterClosed().subscribe(async (result) => {
      console.log('gggggg');
    });
  }


  getInfo(){
    this.AdminService.GetAllCompany().subscribe(
      (response) => {
        if (response.returnObject.length != 0) {
          console.log(response.returnObject)

          this.companyList=response.returnObject

        }

        else {
        console.log("no data")
        }      },
      (err) => {
        console.log(err)
      }
    );
  }
}
