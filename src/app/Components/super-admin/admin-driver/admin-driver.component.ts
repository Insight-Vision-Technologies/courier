import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { ICompanyAdmin } from 'src/app/Models/icompany';
import { IDriver } from 'src/app/Models/idriver';
import { IRoleMajor } from 'src/app/Models/irole-major';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-driver',
  templateUrl: './admin-driver.component.html',
  styleUrls: ['./admin-driver.component.css']
})
export class AdminDriverComponent implements OnInit {

  employee:IDriver[]=[]
  roleList:IRoleMajor[]=[]
  compAdmin:ICompanyAdmin[]=[]
  tabs:boolean=true
  constructor( private AdminService: AdminService,
    private router: Router,
    private toster: ToastrService,
    public loaderService: LoaderService
  ) {}

  async ngOnInit() {
    this.getInfo();

    this.getDriver()
  }

  getInfo(){
    this.AdminService.GetAllRoleMajor().subscribe(
      (response) => {
        if (response.returnObject.length != 0) {
          console.log(response.returnObject)

          this.roleList=response.returnObject

        }

        else {
        console.log("no data")
        }      },
      (err) => {
        console.log(err)
      }
    );
  }
  getDriver(){
    this.AdminService.GetAllEmployee().subscribe(
      (response) => {
        if (response.returnObject.length != 0) {
          console.log(response.returnObject)

          this.employee=response.returnObject

        }

        else {
        console.log("no data")
        }      },
      (err) => {
        console.log(err)
      }
    );
  }

  GetAllCompanyAdmin(){
    this.AdminService.GetAllCompanyAdmin().subscribe(
      (response) => {
        if (response.returnObject.length != 0) {
          console.log(response.returnObject)

          this.compAdmin=response.returnObject

        }

        else {
        console.log("no data")
        }      },
      (err) => {
        console.log(err)
      }
    );
  }

  onValueChange(ff:any){
    console.log(ff.value)

    if(ff.value==1){
      this.getDriver()
      this.tabs=true
    }
    else if(ff.value ==2){
      this.GetAllCompanyAdmin()
      this.tabs=false

    }
    // this.selectedCompanies=ff.value
    // console.log(this.selectedCompanies)

  }

}
