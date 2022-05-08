import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { ICompany } from 'src/app/Models/icompany';
import { CompanyService } from 'src/app/Services/company.service';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  companyInfo:ICompany={
    companyId:0,
    companyName : '',
    email : '',
    phone : '',
    country : '',
    city : '',
    userID:'',
    addressDetails:''
  }

  constructor(private observer: BreakpointObserver,
    private router: Router,
   public loaderService: LoaderService,
   private CompanyService: CompanyService,

   ) {
     this.compInfo()
   }

   ngAfterViewInit() {

    setTimeout(() => {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
    }, 0);


  }



  AdminOrder() {
    this.router.navigateByUrl('Admin/Dashboard/AdminOrder');
  }

  AdminCar() {
    this.router.navigateByUrl('Admin/Dashboard/AdminCar');
  }

  AdminDriver() {
    this.router.navigateByUrl('Admin/Dashboard/AdminDriver');
  }

  AdminPricing() {
    this.router.navigateByUrl('Admin/Dashboard/AdminPricing');
  }

  AdminHome() {
    this.router.navigateByUrl('Admin/Dashboard/AdminHome');
  }
  AdminSiteSetting() {
    this.router.navigateByUrl('Admin/Dashboard/AdminSiteSetting');
  }

  AdminHelp() {
    this.router.navigateByUrl('Admin/Dashboard/AdminHelp');
  }
  AdminLandingPage() {
    this.router.navigateByUrl('Admin/Dashboard/AdminLandingPage');
  }

  AdminFinancial(){
    this.router.navigateByUrl('Admin/Dashboard/AdminFinancial');


  }
  AdminBilling(){
    this.router.navigateByUrl('Admin/Dashboard/AdminBilling');

  }

  AdminSetting() {
    this.router.navigateByUrl('Admin/Dashboard/AdminSetting');
  }
  AdminUsers() {
    this.router.navigateByUrl('Admin/Dashboard/AdminUsers');
  }
  AdminCourires() {
    this.router.navigateByUrl('Admin/Dashboard/AdminCourires');
  }



  // help() {
  //   this.router.navigateByUrl('Company/Dashboard/help');
  // }


  pagehome(){
    this.router.navigateByUrl('/')
    .then(() => {
      window.location.reload();
    });

  }

  compInfo(){

    // this.CompanyService.CompanyInfo().subscribe(
    //   (response) => {
    //     console.log(response.returnObject)
    //     this.companyInfo=response.returnObject

    //   },
    //   (err) => {
    //     console.log(err)
    //   }
    // );
  }
}
