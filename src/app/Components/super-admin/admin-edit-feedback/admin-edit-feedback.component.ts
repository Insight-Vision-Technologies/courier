import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminAddFeaturesComponent } from '../admin-add-features/admin-add-features.component';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { RatingQuestions } from 'src/app/Models/irating-questions';
import { SuperadminService } from 'src/app/Services/superadmin.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-admin-edit-feedback',
  templateUrl: './admin-edit-feedback.component.html',
  styleUrls: ['./admin-edit-feedback.component.css']
})
export class AdminEditFeedbackComponent implements OnInit {
  formData: FormData = new FormData();
  ratingDetails: any;
  deletedRatingQs: any;
  constructor(public dialog: MatDialog,
  private SuperadminService: SuperadminService, private CRUDService: CRUDTestService,
    private toster:ToastrService,private route: ActivatedRoute,private router: Router) { }

  async ngOnInit() {
    await this.getRatingDetails();
  }
  ratingQuestion: RatingQuestions = {
    name: ''
  }
  ratingQs!: RatingQuestions[];
  rating!: FormGroup;

  editRating(rating: RatingQuestions) {
    console.log(rating,rating.ratingQsId,rating.name);
    this.rating = new FormGroup({
      ratingQsId: new FormControl(rating.ratingQsId),
      name: new FormControl(rating.name),

    });
  }

 deleteRating(id:any) {
    this.SuperadminService.deleteRatingQuestion(id).subscribe(response => {
      console.log("res", response)
      console.log(response);
         if (response.returnObject.length != 0) {
           this.deletedRatingQs = response;
           this.toster.success('Item Deleted successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
           console.log("deleted successfully");
          // window.location.reload();
          this.getRatingDetails();
           //this.router.navigate(['Admin/Dashboard/AdmineditFeatures']);
           }
         else {
          this.deletedRatingQs = response;
 console.log("no data")
         }
      },
      error => {
        console.error(error);
        console.log(error);

     })
}
  save() {
    let index = this.ratingQs.findIndex(rating => rating.ratingQsId === this.rating.value.id);
    this.ratingQs[index] = this.rating.value;
    // console.log(this.ratingQs[index],this.ratingQs[index].ratingQsId,this.ratingQs[index].name);
    let id:string = this.ratingQs[index].ratingQsId as unknown as string;
    this.formData.append("ratingQsId",id);
    this.formData.append("name",this.ratingQs[index].name);
    this.SuperadminService.UpdateRatingQuestion(this.formData)
      .subscribe(
      res=>{
        console.log("res")
        this.toster.success('Item Updated successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
      // window.location.reload();
      this.getRatingDetails();
        console.log(res)
      },
      error => {
        console.error(error);
        console.log(error);

     }
    )
  }

  cancel() {
  // this.rating = null;
  }
getRatingDetails() {
    this.SuperadminService.getAllRatingQuestion().subscribe(response => {
      console.log("res", response)
      console.log(response);
         if (response!= null) {
           this.ratingDetails = response;
           let rating = [];
           for (let i = 0; i < this.ratingDetails.length;i++){
             rating.push({ratingQsId:this.ratingDetails[i].ratingQsId,name:this.ratingDetails[i].name});
           }
           this.ratingQs = rating;
          //  this.ratingDetails.Name = this.ratingDetails[0].Name;
         }
         else {
          this.ratingDetails = response;
 console.log("no data")
         }
      },
      error => {
        console.error(error);
        console.log(error);

     })
}
  addRatingQuestionForm(form: NgForm) {
    console.log("formValue",form.value);
  //  this.formData.append("RatingQsId");
    this.formData.append("name", form.value.name);
    console.log(this.formData);
    this.SuperadminService.AddRatingQuestion(this.formData)
      .subscribe(
      res=>{
        console.log("res")
        this.toster.success('Item added successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
//window.location.reload();
          this.getRatingDetails();
        console.log(res)
      },
      error => {
        console.error(error);
        console.log(error);

     }
    )
  }
}
