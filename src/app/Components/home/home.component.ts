import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { UserOrNOComponent } from '../user-or-no/user-or-no.component';
import { Faq } from './../../Models/faq';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faqList:Faq[]=[]


  constructor(private CRUDService: CRUDTestService,
    private authService: AuthService, private router: Router,
    public dialog: MatDialog,  )
   {

   }


  async getFaq() {
    await this.CRUDService.getfaq().subscribe(
      (response) => {
        // console.log("Hello",response);
        this.faqList=response
        this.faqList.forEach(element => {
          // console.log(element.answerSentence)
        });
        // console.log(this.faqList)
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.getFaq();

  }


  checkOrder(){
    const isAuthorized = this.authService.token
    // console.log(isAuthorized);
    if (isAuthorized == null) {
      // console.log(isAuthorized);

      const dialogRef = this.dialog.open(UserOrNOComponent, {
      width: '500px',
        disableClose: true,
        // margin: '0 auto'
        // disableClose: true,
        // hasBackdrop: true,
      });

      dialogRef.afterClosed().subscribe((result) => {

        // console.log(`Dialog result: ${result}`);
      });

  }

  else{
    // this.router.navigateByUrl('CreateOrder');

      console.log('cresa')


      this.router.navigateByUrl('CreateOrder', {
        state: {
        company:'false'},
      });
    
  }
}
}


