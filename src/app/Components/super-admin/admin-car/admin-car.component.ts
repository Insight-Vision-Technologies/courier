import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { ICAR } from 'src/app/Models/icar';
import { IClassfication } from 'src/app/Models/iclassfication';
import { AdminService } from 'src/app/Services/admin.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { DialogCarComponent } from '../../company/dialog-car/dialog-car.component';


@Component({
  selector: 'app-admin-car',
  templateUrl: './admin-car.component.html',
  styleUrls: ['./admin-car.component.css']
})
export class AdminCarComponent implements OnInit {

  classfication:IClassfication[]=[]
  classficationInfo:IClassfication = {
    vehicleClassficactionID: 0,
    classficactionName: '',
    capacityMin: 0,
    capacityMax: 0,
    dimention: 0,
 }

  constructor(
    private AdminService: AdminService,
    private router: Router,
    private toster: ToastrService,
    public loaderService: LoaderService
  ) {}

  async ngOnInit() {
    this.getInfo();

  }

  getInfo(){
    this.AdminService.getClassfication().subscribe(
      (response) => {
        if (response.returnObject.length != 0) {
          console.log(response.returnObject)

          this.classfication=response.returnObject

        }

        else {
        console.log("no data")
        }      },
      (err) => {
        console.log(err)
      }
    );
  }

  addclassfication(){
    console.log(this.classficationInfo)
    this.AdminService.AddClassfication(this.classficationInfo).subscribe(
      (response) => {
        this.toster.success('Item added successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
        this.getInfo()

      },
      (err) => {
        console.log(err)
      }
    );
  }
}


