import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { IFeatures } from 'src/app/Models/ifeatures';
import { SuperadminService } from 'src/app/Services/superadmin.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-admin-add-features',
  templateUrl: './admin-add-features.component.html',
  styleUrls: ['./admin-add-features.component.css']
})
export class AdminAddFeaturesComponent implements OnInit {
  formData: FormData = new FormData();
  imageUrl = environment.base_core;
  image = "abc.jpg";
  url_img: any = '';
  constructor(public dialogRef: MatDialogRef<AdminAddFeaturesComponent>,
    private SuperadminService: SuperadminService, private CRUDService: CRUDTestService,
    private toster:ToastrService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }
  features: IFeatures = {
    featureId:0,
    Name: '',
    Description:'',
    photo :null,

  }
   onSelectImage(event: any) {
 if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
 if (event.target.files.length > 0) {
      const fileToUpload:File = event.target.files[0];
       this.formData.append("File", fileToUpload,fileToUpload.name);
    }
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url_img = event.target!.result;
      }
    }
   }
   public deleteImg() {
      this.url_img = null;
  }

  featuresForm(form: NgForm) {
    console.log("formValue",form.value);
    this.formData.append("Name",form.value.Name);
    this.formData.append("Description", form.value.Description);
    console.log(this.formData);
    this.SuperadminService.AddFeatures(this.formData)
      .subscribe(
      res=>{
        console.log("res")
        this.toster.success('Item added successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
          console.log(res)
          this.dialogRef.close([]);
          // window.location.reload();
        //  this.router.navigate(['Admin/Dashboard/AdmineditFeatures']);
      },
      error => {
        console.error(error);
        console.log(error);
     })
  }
}
