import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import jwtDecode from 'jwt-decode';
import { IUserModel } from 'src/app/Models/IUserModel';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/Services/company.service';
import { ICompany } from 'src/app/Models/icompany';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = true;
  @Input() tableData: string = 'transparent';
  name?: string | null = '';
  constructor(
    private authServicee: AuthService,
    private compService: CompanyService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn();
    this.authServicee.getUser()
    // this.testToken();
  }
  header_variable = false;
  @HostListener('document:scroll')
  scrollfunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_variable = true;
    } else {
      this.header_variable = false;
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImhhZ2FyLmVsZ2FyaDk4QGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiZmI0MDQ0MTItYzVkNC00NmE3LTg3ODQtMWVhZTMzMmIxMWRmIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQ29tcGFueU93bmVyIiwiZXhwIjoxNjQzMDA1NjcwLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAifQ.h__lHCc7vtIfq_cue_PHidQWw2ZGH8Fo1WQqgtRSDRo
    }
  }
  isLoggedIn() {
    if (localStorage.getItem('token') != null) {
      // console.log(localStorage.getItem('token'));
      // console.log(this.isLogged);
      this.isLogged = true;
    } else {
      // console.log(this.isLogged);

      this.isLogged = false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('from')
    localStorage.removeItem('orderId')
    localStorage.removeItem('compId')
    localStorage.removeItem('deliveryTime')
    localStorage.removeItem('to')
    localStorage.removeItem('type')
    localStorage.removeItem('amount')
    localStorage.removeItem('logg')
    window.location.reload();

    this.isLogged = false;
  }

  UserModel: IUserModel = {
    Email: '',
    UserId:'',
    Role: [],
  };

  compInfo:ICompany[]=[]

  tt:any
  testToken() {
    var token = localStorage.getItem('token');

    // var givenName = decodedToken['given_name'];

    if (token) this.tt = jwtDecode(token);
    this.UserModel= this.tt
    // console.log(this.tt);
    // console.log(this.tt.Role[1]);
    // console.log(this.UserModel.Role);
    // console.log(jwtDecode.default('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'));
  }


  Company(){
    this.compService.checkCompany().subscribe(
      (res) => {
        // console.log("res")
        // console.log(res)

        if(res.returnObject.length == 0){
    this.router.navigateByUrl('/Company/Register');

        }
        else{
        this.compInfo=res.returnObject
//  console.log(this.compInfo)
        // console.log(this.compInfo[0].companyId)
          this.router.navigateByUrl('/Company/Dashboard/home');
          localStorage.removeItem('compId');
          localStorage.setItem('compId',this.compInfo[0].companyId.toString());

        }
      },
      (err) => {
        console.log(err)
      }
    );
  }
}
