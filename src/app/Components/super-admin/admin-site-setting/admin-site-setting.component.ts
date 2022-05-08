import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

import { ISuperAdminSettings } from 'src/app/Models/isuper-admin-settings';
import { SuperadminService } from 'src/app/Services/superadmin.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-admin-site-setting',
  templateUrl: './admin-site-setting.component.html',
  styleUrls: ['./admin-site-setting.component.css']
})
export class AdminSiteSettingComponent implements OnInit {
  formData: FormData = new FormData();
  url_logo: any = '';
  url_logo_dark: any = '';
  url_favicon_icon: any = '';
  url_default_image: any = '';
  url_cover_image: any = '';
  url_front_image: any = '';
  imageUrl = environment.base_core;
  image = "abc.jpg";
  allSettings: any;
  constructor(
  private SuperadminService: SuperadminService, private CRUDService: CRUDTestService,
    private toster:ToastrService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getAllSettings();
  }
adminSetting: ISuperAdminSettings = {
settingsId:0,
siteName:'',
siteDescription:'',
facebookLink:'',
instagramLink:'',
 logoWhite:null,
  logoDark:null,
  defaultImage:null,
  coverImage:null,
  faviconIcon:null,
  frontImage:null,
  hostEmail:'',
  hostName:'',
  hostPassword:'',
  host:'',
  port:'',
  stripeApiKey:'',
  stripeApiSecretKey:'',
  twilioAccountId:'',
  twilioAuthToken:'',
  twilioMobileNo:'',

  }
  onSelectFileLogo(event: any) {
 if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
 if (event.target.files.length > 0) {
      const fileToUpload:File = event.target.files[0];
       this.formData.append("File1", fileToUpload,fileToUpload.name);
    }
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url_logo = event.target!.result;
      }
    }
  }
  onSelectFileLogoDark(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      if (event.target.files.length > 0) {
        const fileToUpload: File = event.target.files[0];
        this.formData.append("File2", fileToUpload, fileToUpload.name);
      }
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url_logo_dark = event.target!.result;
      }
    }
  }
   onSelectFileFaviconIcon(event: any) {
 if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
 if (event.target.files.length > 0) {
      const fileToUpload:File = event.target.files[0];
       this.formData.append("File3", fileToUpload,fileToUpload.name);
    }
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url_favicon_icon = event.target!.result;
      }
    }
  }
   onSelectFileDefaultImage(event: any) {
 if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
 if (event.target.files.length > 0) {
      const fileToUpload:File = event.target.files[0];
       this.formData.append("File4", fileToUpload,fileToUpload.name);
    }
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url_default_image = event.target!.result;
      }
    }
  }
   onSelectFileCoverImage(event: any) {
 if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
 if (event.target.files.length > 0) {
      const fileToUpload:File = event.target.files[0];
       this.formData.append("File5", fileToUpload,fileToUpload.name);
    }
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url_cover_image = event.target!.result;
      }
    }
  }
   onSelectFileFrontImage(event: any) {

 if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
 if (event.target.files.length > 0) {
      const fileToUpload:File = event.target.files[0];
       this.formData.append("File6", fileToUpload,fileToUpload.name);
    }
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url_front_image = event.target!.result;
      }
    }
    }
  public deleteLogo() {
      this.url_logo = null;
  }

  public deleteLogoDark() {
      this.url_logo_dark = null;
  }
  public deleteFaviconIcon() {
      this.url_favicon_icon = null;
    }
  public deleteDefaultImage() {
    this.url_default_image = null;
  }
  public deleteCoverImage() {
      this.url_cover_image = null;
       }
      public deleteFrontImage() {
      this.url_front_image = null;
    }
  addSiteSettingsForm(form:NgForm) {
    console.log("formValue", form.value);
    let id:string = this.allSettings[0].settingsId as unknown as string;
    this.formData.append("settingsId",id);
    this.formData.append("siteName", form.value.siteName);
    this.formData.append("siteDescription", form.value.siteDescription);
    this.formData.append("facebookLink", form.value.facebookLink);
    this.formData.append("instagramLink", form.value.instagramLink);
    this.formData.append("logoWhite", this.allSettings[0].logoWhite);
    this.formData.append("logoDark",this.allSettings[0].logoDark);
    this.formData.append("defaultImage", this.allSettings[0].defaultImage);
    this.formData.append("coverImage",this.allSettings[0].coverImage);
    this.formData.append("faviconIcon",this.allSettings[0].faviconIcon);
    this.formData.append("frontImage", this.allSettings[0].frontImage);

    this.formData.append("hostEmail", form.value.hostEmail);
    this.formData.append("hostName", form.value.hostName);
    this.formData.append("hostPassword", form.value.hostPassword);
    this.formData.append("host", form.value.host);
    this.formData.append("port", form.value.port);
    this.formData.append("stripeApiKey", form.value.stripeApiKey);
    this.formData.append("stripeApiSecretKey", form.value.stripeApiSecretKey);
    this.formData.append("twilioAccountId", form.value.twilioAccountId);
    this.formData.append("twilioAuthToken", form.value.twilioAuthToken);
    this.formData.append("twilioMobileNo", form.value.twilioMobileNo);

    console.log(this.formData);
    //console.log(this.CompanyInfo)

    this.SuperadminService.UpdateAdminSettings(this.formData)
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
getAllSettings() {
    this.SuperadminService.getAllAdminSettings().subscribe(response => {
      console.log("res", response)
      console.log(response);
         if (response!=null) {
           this.allSettings = response;
           this.adminSetting.siteName = this.allSettings[0].siteName;
           this.adminSetting.siteDescription = this.allSettings[0].siteDescription;
           this.adminSetting.facebookLink = this.allSettings[0].facebookLink;
           this.adminSetting.instagramLink = this.allSettings[0].instagramLink;
           this.adminSetting.logoWhite = this.allSettings[0].logoWhite;
           this.adminSetting.logoDark = this.allSettings[0].logoDark;
           this.adminSetting.defaultImage = this.allSettings[0].defaultImage;
           this.adminSetting.coverImage = this.allSettings[0].coverImage;
           this.adminSetting.faviconIcon = this.allSettings[0].faviconIcon;
           this.adminSetting.frontImage = this.allSettings[0].frontImage;
           this.adminSetting.hostEmail = this.allSettings[0].hostEmail;
           this.adminSetting.hostName = this.allSettings[0].hostName;
           this.adminSetting.hostPassword = this.allSettings[0].hostPassword;
           this.adminSetting.host = this.allSettings[0].host;
           this.adminSetting.port = this.allSettings[0].port;
           this.adminSetting.stripeApiKey = this.allSettings[0].stripeApiKey;
           this.adminSetting.stripeApiSecretKey = this.allSettings[0].stripeApiSecretKey;
           this.adminSetting.twilioAccountId = this.allSettings[0].twilioAccountId;
           this.adminSetting.twilioAuthToken = this.allSettings[0].twilioAuthToken;
           this.adminSetting.twilioMobileNo = this.allSettings[0].twilioMobileNo;

           console.log("all settings",this.allSettings,this.allSettings[0].siteName);
           }
         else {
          this.allSettings = response;
 console.log("no data")
         }
      },
      error => {
        console.error(error);
        console.log(error);

     })
  }

}
