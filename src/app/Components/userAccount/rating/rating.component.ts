import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  starRating = 0;
  // orderName:string = '55';

  constructor(
    public dialogRef: MatDialogRef<RatingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private UserService: UserService,
    private toster:ToastrService


  ) {
    console.log("data number",data.orderName)
    console.log("data",data)
  }

  ngOnInit(): void {
  }

  readRate(){
    console.log(this.starRating)
  }

  submitRate(key:number){
    console.log(this.starRating)
    console.log(this.data)

    if(key==0){
    this.UserService.SetRateOrder(this.data.orderID,this.starRating).subscribe(
      (res) => {
        // console.log(res.returnObject)
        this.toster.success('Rated successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
        this.dialogRef.close();

      },
      (err) => {
        console.log(err)
      }
    );
    }

    else{
      this.UserService.SetRateOrder(this.data.orderID,-1).subscribe(
        (res) => {
          // console.log(res.returnObject)
          this.toster.success('Rated successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
          this.dialogRef.close();

        },
        (err) => {
          console.log(err)
        }
      );
      }
    }
}

