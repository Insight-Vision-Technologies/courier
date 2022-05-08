import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


import { NgForm } from '@angular/forms';
import { ICompany } from 'src/app/Models/icompany';
import { CompanyService } from 'src/app/Services/company.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/Services/user.service';
import { IUser } from 'src/app/Models/iuser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})


export class SidenavComponent implements OnInit {
  UserInfo: IUser={
    name:'',
    phone:'',
    city:'',
    country:'',
    email:'',
    addressDetails:'',
  }
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(private observer: BreakpointObserver,
    private UserService: UserService,
    private router: Router,
    ) { }
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
    this.getUser()
  }
  getUser(){
    this.UserService.getUserByID().subscribe(
      (response) => {
        // console.log(response.returnObject);

        this.UserInfo=response.returnObject
      },
      (err) => {
        // console.log(err)
      }
    );
  }

  createOrder(){
    console.log('cresa')

    this.router.navigateByUrl('CreateOrder', {
      state: {company:'false'},
    });
  }
}
