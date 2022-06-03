import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAvailableAreas } from 'src/app/Models/iavailable-areas';
import { SuperadminService } from 'src/app/Services/superadmin.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-admin-available-cities',
  templateUrl: './admin-available-cities.component.html',
  styleUrls: ['./admin-available-cities.component.css']
})
export class AdminAvailableCitiesComponent implements OnInit {

  formData: FormData = new FormData();
  areaDetails: any;
  editForm: any;
 areaAvailable!: IAvailableAreas[];
  area!: FormGroup;
  deletedAvailableArea: any;
  //public dialogRef: MatDialogRef<AdminAvailableCitiesComponent>,
  constructor(
  private SuperadminService: SuperadminService, private CRUDService: CRUDTestService,
    private toster: ToastrService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    await this.getAreaDetails();
  }
  availableArea: IAvailableAreas = {
   availableAreaId: 0,
  countryName:'',
  cityNames:''
  }

editArea(area: IAvailableAreas) {
    console.log(area,area.availableAreaId,area.countryName,area.cityNames);
    this.area = new FormGroup({
      availableAreaId: new FormControl(area.availableAreaId),
      countryName: new FormControl(area.countryName),
      cityNames: new FormControl(area.cityNames),

    });
  this.editForm = true;
  // this.area.reset();
  }
  save() {
    let index = this.areaAvailable.findIndex(areaAvailable => areaAvailable.availableAreaId === this.area.value.availableAreaId);
    this.areaAvailable[index] = this.area.value;
    // console.log(this.ratingQs[index],this.ratingQs[index].ratingQsId,this.ratingQs[index].name);
    let id:string = this.areaAvailable[index].availableAreaId as unknown as string;
    this.formData.append("availableAreaId",id);
    this.formData.append("countryName", this.areaAvailable[index].countryName);
    this.formData.append("cityNames", this.areaAvailable[index].cityNames);
    this.SuperadminService.UpdateAvailableArea(this.formData)
      .subscribe(
      res=>{
        console.log("res")
        this.toster.success('Item Updated successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
      //  window.location.reload();
          this.getAreaDetails();
          this.editForm = false;
          this.area.reset();
        console.log(res)
      },
      error => {
        console.error(error);
        console.log(error);

     }
    )
  }
   cancel() {

  this.editForm = false;
  this.area.reset();
  }
 deleteArea(id:any) {
    this.SuperadminService.deleteAvailableArea(id).subscribe(response => {
      console.log("res", response)
      console.log(response);
         if (response.returnObject.length != 0) {
           this.deletedAvailableArea = response;
           this.toster.success('Item Deleted successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
           console.log("deleted successfully");
           //window.location.reload();
           this.getAreaDetails();
           //this.router.navigate(['Admin/Dashboard/AdmineditFeatures']);
           }
         else {
          this.deletedAvailableArea = response;
 console.log("no data")
         }
      },
      error => {
        console.error(error);
        console.log(error);

     })
}



getAreaDetails() {
    this.SuperadminService.getAllAvailableArea().subscribe(response => {
      console.log("res", response)
      console.log(response);
         if (response!= null) {
           this.areaDetails = response;
           console.log(this.areaDetails);
           let areas = [];
           for (let i = 0; i < this.areaDetails.length;i++){
             areas.push({
               availableAreaId: this.areaDetails[i].availableAreaId,
               countryName: this.areaDetails[i].countryName,
               cityNames: this.areaDetails[i].cityNames
             });
           }
           this.areaAvailable = areas;
           //this.areaDetails.availableAreaId = this.areaDetails[0].availableAreaId;
           this.areaDetails.countryName = this.areaDetails[0].countryName;
           this.areaDetails.cityNames = this.areaDetails[0].cityNames;
         }
         else {
          this.areaDetails = response;
 console.log("no data")
         }
      },
      error => {
        console.error(error);
        console.log(error);

     })
  }
   addAvailableCities(form: NgForm) {
    console.log("formValue",form.value);
  //  this.formData.append("availableAreaId");
    this.formData.append("countryName", form.value.countryName);
    this.formData.append("cityNames", form.value.cityNames);
    console.log(this.formData);
    this.SuperadminService.AddAvailableArea(this.formData)
      .subscribe(
      res=>{
        console.log("res")
        this.toster.success('Item added successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
//window.location.reload();
          this.getAreaDetails();
        console.log(res)
      },
      error => {
        console.error(error);
        console.log(error);

     }
    )
  }
}
