import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICAR } from 'src/app/Models/icar';
import { IDirection, IDirectionDriver } from 'src/app/Models/idirection';
import { IDriver } from 'src/app/Models/idriver';
import { CompanyService } from 'src/app/Services/company.service';
import { CRUDTestService } from 'src/app/Services/crudtest.service';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css'],
})
export class UpdateDriverComponent implements OnInit {
  id: number = 0;
  driverId: number = 0;
  driverInfo: IDriver = {
    driverName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    employee: '',
    carPlate: '',
    companyId: 0,
    driverId: 0,
    vehicleId: 0,
    from: '',
    to: '',
    vehicle: {
      capacity: '',
      size: '',
      Dimension: 0,
      classfication: '',
      carPlate: '',
      CompanyId: 1,
    },
  };
  newDirection: boolean = false;
  DirectionList: IDirection[] = [];
  DriverList: IDirectionDriver[] = [];
  newDirectionForm: boolean = false;
  dataSource: ICAR[] = [];

  dd: string = 'ddd';

  ProductList: IDriver[] = [];
  constructor(
    private router: Router,
    private CRUDService: CRUDTestService,
    private CompanyService: CompanyService,
    private toster: ToastrService
  ) {
    this.id = this.router.getCurrentNavigation()?.extras.state?.driverId;

    console.log('idddd' + this.id);
  }

  ngOnInit(): void {
    this.getVehicle();

    this.getbyID();
    this.GetDriverDirection()
  }

  async getbyID() {
    await this.CRUDService.getDriverbyID(this.id).subscribe(
      (response) => {
        console.log(this.id);
        this.driverInfo = response.returnObject;
        console.log(this.driverInfo);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSubmit(form: IDriver) {
    // console.log(form.value)
    console.log(this.driverInfo);
    // this.driverInfo.vehicleId=this.dataSource.
    this.CRUDService.updateDriver(this.driverInfo, this.id).subscribe(
      (data) => {
        // console.log(data);
        this.toster.success('Item added successfully', 'succes', {
          timeOut: 2000,
          closeButton: true,
          progressBar: true,
        });

        this.router.navigateByUrl('Company/Dashboard/driver');
      }
    );
    // console.log("form")
  }

  getVehicle() {
    // console.log('response');

    this.CRUDService.GetAllForUpdate(this.id).subscribe(
      (response) => {
        console.log(response);
        this.dataSource = response.returnObject;

        // console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onCheckboxChange(e: any) {
    console.log(e);
    console.log(e.target);

    if (e.target.checked) {
      console.log('cjc');
      this.newDirection = true;
    } else {
      this.newDirection = false;
      console.log('sert');
    }
  }

  addnewDirection() {
    console.log(this.newDirectionForm)
    this.newDirectionForm = true
  }

  addDirection(form: NgForm) {
    this.CompanyService.AddDriverDirection(
      this.id,
      form.value.from,
      form.value.to,
      this.newDirection
    ).subscribe(
      (response) => {
        console.log(this.id);
        this.GetDriverDirection()
    this.newDirectionForm = false

      },
      (err) => {
        console.log(err);
      }
    );
  }

  GetDriverDirection() {
    this.CompanyService.GetDriverDirection(this.id).subscribe(
      (response) => {
        console.log(response)

        if (response.returnObject != null) {

          this.DirectionList=response.returnObject
          console.log(response)
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  displayStyle = "none";

  openPopup(dirID:number) {
    this.CompanyService.CheckDriverDirection(this.id,dirID).subscribe(
      (response) => {
        console.log(response)

        if (response.returnObject.length>0) {
          this.DriverList=response.returnObject
          this.displayStyle = "block";

          // this.DirectionList=response.returnObject
          console.log(response.returnObject)
        }

        this.GetDriverDirection()
      },
      (err) => {
        console.log(err);
      }
    );
  }
  closePopup() {
    console.log(this.driverId)

    this.CompanyService.UpdateDriverDirection(this.driverId,this.id).subscribe(
      (response) => {
        console.log(response)
        this.displayStyle = "none";

        if (response.returnObject != null) {

          // this.DirectionList=response.returnObject
          console.log(response.returnObject)
        }

        this.GetDriverDirection()
      },
      (err) => {
        console.log(err);
      }
    );
  }

  carplateData(event:any){

    console.log(event)
    this.driverInfo.vehicleId=event
  }
}
