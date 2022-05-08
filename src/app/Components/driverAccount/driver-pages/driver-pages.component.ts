import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { IDriver } from 'src/app/Models/idriver';
import { DriverService } from 'src/app/Services/driver.service';

@Component({
  selector: 'app-driver-pages',
  templateUrl: './driver-pages.component.html',
  styleUrls: ['./driver-pages.component.css']
})
export class DriverPagesComponent implements OnInit {
  driverInfo: IDriver = {
    driverName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    employee: '',
    carPlate: '',
    companyId: 0,
    driverId: 0,
    vehicleId: 0,
    from: '',
    to: '',
    vehicle: {
      classfication: '',
      carPlate: '',
      capacity: '',
      vehicleId: 0,
      CompanyId: 0,
      size: '',
      Dimension: 0,
    },
  };
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(private observer: BreakpointObserver,private DriverService: DriverService) { }


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

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {
    this.DriverService.getDriverInfo().subscribe(
      (response) => {
        this.driverInfo = response.returnObject;
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
