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
  selector: 'app-admin-editfeature',
  templateUrl: './admin-editfeature.component.html',
  styleUrls: ['./admin-editfeature.component.css']
})
export class AdminEditfeatureComponent implements OnInit {

  featureDetail: any;
  formData: FormData = new FormData();
  imageUrl = environment.base_core;
  image = "abc.jpg";
  url_img: any = '';
  feature_id: any;
  features: IFeatures = {
    featureId:0,
    Name: '',
    Description:'',
    photo :null,

  }
//public dialogRef: MatDialogRef<AdminAddFeaturesComponent>,
  constructor(
    private SuperadminService: SuperadminService, private CRUDService: CRUDTestService,
    private toster:ToastrService,private route: ActivatedRoute,private router: Router) { }

  async ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.feature_id = id;
     console.log('I am id',id);
    await this.getFeaturesById(id);
  }
    getFeaturesById(id:any) {
    this.SuperadminService.getFeaturesById(id).subscribe(response => {
      console.log("res", response.returnObject)
      console.log(response);
      if (response.returnObject.length != 0) {

        this.featureDetail = response.returnObject;
        console.log("I am feature detail", this.featureDetail, this.featureDetail[0].image);
        this.features.featureId = this.featureDetail[0].featureId;
           this.features.Name = this.featureDetail[0].name;
           this.features.Description = this.featureDetail[0].description;
        this.features.photo = this.featureDetail[0].image;

           }
         else {
          this.featureDetail = response.returnObject;
 console.log("no data")
         }
      },
      error => {
        console.error(error);
        console.log(error);

     })
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
    console.log("formValue", form.value);
    let photo:string = this.features.photo as unknown as string;
    this.formData.append("featureId",this.feature_id);
    this.formData.append("Name",form.value.Name);
    this.formData.append("Description", form.value.Description);
    this.formData.append("Image", photo);

    console.log(this.formData);
    this.SuperadminService.UpdateFeatures(this.formData)
      .subscribe(
      res=>{
        console.log("res")
        this.toster.success('Item added successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
          console.log(res)
          this.router.navigate(['Admin/Dashboard/AdmineditFeatures']);
      },
      error => {
        console.error(error);
        console.log(error);
     })
  }

}
