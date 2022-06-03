import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminAddFeaturesComponent } from '../admin-add-features/admin-add-features.component';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { IFeatures } from 'src/app/Models/ifeatures';
import { SuperadminService } from 'src/app/Services/superadmin.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-adminedit-features',
  templateUrl: './adminedit-features.component.html',
  styleUrls: ['./adminedit-features.component.css']
})
export class AdmineditFeaturesComponent implements OnInit {
  allFeatures: any;
  deletedFeature: any;
  imageUrl = environment.base_core;
  constructor(public dialog: MatDialog,
  private SuperadminService: SuperadminService, private CRUDService: CRUDTestService,
    private toster:ToastrService,private route: ActivatedRoute,private router: Router) { }

  async ngOnInit(){
    await this.getAllFeatures();
  }
    getAllFeatures() {
    this.SuperadminService.getAllFeatures().subscribe(response => {
      console.log("res", response)
      console.log(response);
         if (response.result!=null) {
           this.allFeatures = response.result;
           }
         else {
          this.allFeatures = response;
 console.log("no data")
         }
      },
      error => {
        console.error(error);
        console.log(error);

     })
  }
  deleteFeature(id:any) {
    this.SuperadminService.DeleteFeature(id).subscribe(response => {
      console.log("res", response)
      console.log(response);
         if (response.returnObject.length != 0) {
           this.deletedFeature = response;
           this.toster.success('Item Deleted successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
           console.log("deleted successfully");
          // window.location.reload();
          this.getAllFeatures();
           //this.router.navigate(['Admin/Dashboard/AdmineditFeatures']);
           }
         else {
          this.deletedFeature = response;
 console.log("no data")
         }
      },
      error => {
        console.error(error);
        console.log(error);

     })
}
ViewArea(){
    const dialogRef = this.dialog.open(AdminAddFeaturesComponent,
      {
        width: '500px',
        disableClose:false,

        // margin: '0 auto'
        // disableClose: true,
        // hasBackdrop: true,
      });

      dialogRef.afterClosed().subscribe(async (result) => {
      console.log('gggggg');
    });
  }
}
