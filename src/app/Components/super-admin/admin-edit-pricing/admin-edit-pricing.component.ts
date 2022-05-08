import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { IAdminPricing } from 'src/app/Models/iadmin-pricing';
import { SuperadminService } from 'src/app/Services/superadmin.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { environment } from 'src/environments/environment';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-admin-edit-pricing',
  templateUrl: './admin-edit-pricing.component.html',
  styleUrls: ['./admin-edit-pricing.component.css']
})
export class AdminEditPricingComponent implements OnInit {
  adminPricingDetails: any;
  formData: FormData = new FormData();
  adminPricingId: any;

  constructor(private SuperadminService: SuperadminService, private CRUDService: CRUDTestService,
    private toster:ToastrService,public dialogRef: MatDialogRef<AdminEditPricingComponent>,) { }

  ngOnInit(): void {
    this.getAdminPricingDetails();
  }
  pricing:IAdminPricing={
  stepValueArray: [],
  discountArray: [],
  costPerOrderArray: [],
  orderType: '',
  include1: '',
  include1Value:0,
  include2: '',
  include2Value:0,
  include3: '',
  include3Value:0,
  include4: '',
  include4Value:0,
  include5: '',
  include5Value:0
  }

   getAdminPricingDetails() {
    this.SuperadminService.getAdminPricing().subscribe(response => {

      console.log("res", response.returnObject)

      console.log(response);
         if (response.returnObject.length != 0) {
          //  this.dataSource.data = response.returnObject;
           this.adminPricingDetails = response.returnObject;
           this.adminPricingId = this.adminPricingDetails[0].adminPriceId;
           console.log("I am company adminPricingId",this.adminPricingDetails[0].adminPriceId,this.adminPricingId);
           this.pricing.stepValueArray = this.adminPricingDetails[0].stepValueArray;
           this.pricing.discountArray = this.adminPricingDetails[0].discountArray;
           this.pricing.costPerOrderArray = this.adminPricingDetails[0].costPerOrderArray;
           this.pricing.orderType = this.adminPricingDetails[0].orderType;
           this.pricing.include1 = this.adminPricingDetails[0].includeService1;
           this.pricing.include1Value = this.adminPricingDetails[0].include1Price;
           this.pricing.include2 = this.adminPricingDetails[0].includeService2;
           this.pricing.include2Value = this.adminPricingDetails[0].include2Price;
           this.pricing.include3 = this.adminPricingDetails[0].includeService3;
           this.pricing.include3Value = this.adminPricingDetails[0].include3Price;
           this.pricing.include4 = this.adminPricingDetails[0].includeService4;
           this.pricing.include4Value = this.adminPricingDetails[0].include4Price;
           this.pricing.include5 = this.adminPricingDetails[0].includeService5;
           this.pricing.include5Value = this.adminPricingDetails[0].include5Price;

         }

         else {
          this.adminPricingDetails = response.returnObject;
 console.log("no data")
         }
      },
      error => {
        console.error(error);
        console.log(error);

     })
}

  pricingForm(form: NgForm) {

    console.log("formValue",form.value);
    //localStorage.setItem('name', 'my name');
    this.formData.append("adminPriceId", this.adminPricingId);
    this.formData.append("stepValueArray", form.value.stepValueArray);
    this.formData.append("discountArray", form.value.discountArray);
    this.formData.append("costPerOrderArray", form.value.costPerOrderArray);
    this.formData.append("orderType", form.value.orderType);
    this.formData.append("includeService1", form.value.include1);
    this.formData.append("include1Price", form.value.include1Value);
    this.formData.append("includeService2", form.value.include2);
    this.formData.append("include2Price", form.value.include2Value);
    this.formData.append("includeService3", form.value.include3);
    this.formData.append("include3Price", form.value.include3Value);
    this.formData.append("includeService4", form.value.include4);
    this.formData.append("include4Price", form.value.include4Value);
    this.formData.append("includeService5", form.value.include5);
    this.formData.append("include5Price", form.value.include5Value);
    console.log("I am form data",this.formData);
    //console.log(this.CompanyInfo)

    this.SuperadminService.UpdateAdminPricing(this.formData)
      .subscribe(
      res=>{
        console.log("res")
        this.toster.success('Item added successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
 this.dialogRef.close([]);
       //   window.location.reload();
       this.getAdminPricingDetails();
        console.log(res)
      },
      error => {
        console.error(error);
        console.log(error);

     }
    )
  }
}
