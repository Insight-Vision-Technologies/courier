import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDTestService } from 'src/app/Services/crudtest.service';
import { ICAR } from 'src/app/Models/icar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatecar',
  templateUrl: './updatecar.component.html',
  styleUrls: ['./updatecar.component.css'],
})
export class UpdatecarComponent implements OnInit {
  id: number = 0;
  carInfo: ICAR = {
    capacity:0,
    classfication:"",
    carPlate:"",
    companyId:0,
     size: 0,
    dimension: 0,
    vehicleClassficactionID:0
  };

  dd: string = 'ddd';

  ProductList: ICAR[] = [];
  constructor(
    private router: Router,
    private CRUDService: CRUDTestService,
    private toster: ToastrService
  ) {
    this.id = this.router.getCurrentNavigation()?.extras.state?.carId;

    console.log('idddd' + this.id);
  }

  ngOnInit(): void {
    this.getbyID();
  }

  async getbyID() {
    await this.CRUDService.getVehiclebyID(this.id).subscribe(
      (response) => {
        this.carInfo = response.returnObject;
        console.log(this.carInfo);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSubmit(form: ICAR) {
    // console.log(form.value)
    console.log(this.carInfo);
    this.CRUDService.updatePost(this.carInfo, this.id).subscribe((data) => {
      // console.log(data);
      this.toster.success('Item added successfully', 'succes', {
        timeOut: 2000,
        closeButton: true,
        progressBar: true,
      });

      this.router.navigateByUrl('Company/Dashboard/cars');
    });
    // console.log("form")
  }
}
