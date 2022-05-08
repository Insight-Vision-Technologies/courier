import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICompany } from 'src/app/Models/icompany';
import { CompanyService } from 'src/app/Services/company.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  encapsulation: ViewEncapsulation.None | undefined
  userId: string = this.CompanyService.userId
  compID:any=this.CompanyService.compID
  formData: FormData = new FormData();
  companyDetails: any;
  imageUrl = environment.base_core;
  CompanyInfo: ICompany = {
    companyId:0,
    companyName : '',
    photo :null,
    email : '',
    phone : '',
    country : '',
    city : '',
    userID:''
  }


  constructor(private CompanyService: CompanyService, private CRUDService: CRUDTestService,
    private toster:ToastrService) { }
  ngOnInit() {
    this.getCompanyDetails();
  }
   url:any = '';
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
 if (event.target.files.length > 0) {
      const fileToUpload:File = event.target.files[0];
       this.formData.append("File", fileToUpload,fileToUpload.name);

    }
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target!.result;
      }
    }
  }
  public delete(){
    this.url = null;
  }
 uploadImage(event:any) {
    if (event.target.files.length > 0) {
      const fileToUpload:File = event.target.files[0];
       this.formData.append("File", fileToUpload,fileToUpload.name);

    }
  }
  getCompanyDetails() {
    this.CompanyService.getCompany().subscribe(response => {

      console.log("res", response.returnObject)

      console.log(response);
         if (response.returnObject.length != 0) {
          //  this.dataSource.data = response.returnObject;
           this.companyDetails = response.returnObject;
           //console.log("I am company details",this.companyDetails[0].companyName);
           this.CompanyInfo.companyName = this.companyDetails[0].companyName;
           this.CompanyInfo.email = this.companyDetails[0].email;
           this.CompanyInfo.phone = this.companyDetails[0].phone;
           this.CompanyInfo.country = this.companyDetails[0].country;
           this.CompanyInfo.city = this.companyDetails[0].city;
           this.CompanyInfo.photo = this.companyDetails[0].photo;
         }

         else {
          this.companyDetails = response.returnObject;
 console.log("no data")
         }



      },
      error => {
        console.error(error);
        console.log(error);

     })
}
  logForm(form: NgForm) {

    console.log("formValue",form.value);
    //localStorage.setItem('name', 'my name');
    this.formData.append("companyId", this.compID);
    this.formData.append("companyName", form.value.companyName);
    this.formData.append("email", form.value.email);
    this.formData.append("phone", form.value.phone);
    this.formData.append("country", form.value.country);
    this.formData.append("city", form.value.city);
    this.formData.append("userID", this.userId);
    console.log(this.formData);
    //console.log(this.CompanyInfo)

    this.CompanyService.UpdateCompany(this.formData)
      .subscribe(
      res=>{
        console.log("res")
        this.toster.success('Item added successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})

        console.log(res)
      },
      error => {
        console.error(error);
        console.log(error);

     }
    )
  }
}

