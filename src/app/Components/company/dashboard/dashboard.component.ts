import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { ICompany } from 'src/app/Models/icompany';
import { CompanyService } from 'src/app/Services/company.service';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
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

  profile() {
    this.router.navigateByUrl('Company/Dashboard/profile');
  }

  order() {
    this.router.navigateByUrl('Company/Dashboard/order');
  }

  Car() {
    this.router.navigateByUrl('Company/Dashboard/cars');
  }

  driver() {
    this.router.navigateByUrl('Company/Dashboard/driver');
  }

  pricing() {
    this.router.navigateByUrl('Company/Dashboard/pricing');
  }

  home() {
    this.router.navigateByUrl('Company/Dashboard/home');
  }

  settings() {
    this.router.navigateByUrl('Company/Dashboard/setting');
  }

  help() {
    this.router.navigateByUrl('Company/Dashboard/help');
  }

  financial(){
    this.router.navigateByUrl('Company/Dashboard/financial');

  }
  Billing(){
    this.router.navigateByUrl('Company/Dashboard/Billing');

  }

  pagehome(){
    this.router.navigateByUrl('/')
    .then(() => {
      window.location.reload();
    });

  }

  compInfo(){

    this.CompanyService.CompanyInfo().subscribe(
      (response) => {
        console.log(response.returnObject)
        this.companyInfo=response.returnObject

      },
      (err) => {
        console.log(err)
      }
    );
  }
}
