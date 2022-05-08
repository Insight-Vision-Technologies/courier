import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IAddress } from 'src/app/Models/iaddress';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css'],
})
export class AddressEditComponent implements OnInit {
  newAddressINfo: IAddress = {
    addressID: this.datra.iddd,
    city: '',
    country: '',
    addressDetails: '',
    userId: '',
  };
  constructor(
    private dialogRef: MatDialogRef<AddressEditComponent>,
    @Inject(MAT_DIALOG_DATA) public datra: any,
    private UserService: UserService,
    private toster: ToastrService
  ) {}

  ngOnInit() {
    this.getAddress()
    // console.log('sss' + this.datra.iddd);
  }

  updateAddress(form: NgForm) {
    console.log(form.value);
    this.newAddressINfo.city = form.value.city;
    this.newAddressINfo.country = form.value.country;
    this.newAddressINfo.addressDetails = form.value.addressDetails;

    this.UserService.updateAddress(this.newAddressINfo).subscribe(
      (response) => {
        this.toster.success('Address Updated successfully', 'succes', {
          timeOut: 2000,
          closeButton: true,
          progressBar: true,
        });
      },
      (err) => {
        console.log('catch err ' + err);
      }
    );
  }

  deleteAddress() {
    this.UserService.deleteAddress(this.datra.iddd).subscribe(
      (response) => {
        this.toster.success('Address deleted successfully', 'succes', {
          timeOut: 2000,
          closeButton: true,
          progressBar: true,
        });
      },
      (err) => {
        console.log('catch err ' + err);
      }
    );
  }

  getAddress() {
    this.UserService.getAddressbyID(this.datra.iddd).subscribe(
      (response) => {
        console.log(response.addressID)
        this.newAddressINfo = response;
        console.log(this.newAddressINfo);
      },
      (err) => {
        console.log('catch err ' + err);
      }
    );
  }
}
