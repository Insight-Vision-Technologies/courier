import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IAddress } from 'src/app/Models/iaddress';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';
import { AddressEditComponent } from '../address-edit/address-edit.component';
@Component({
  selector: 'app-payment-user',
  templateUrl: './payment-user.component.html',
  styleUrls: ['./payment-user.component.css']
})
export class PaymentUserComponent implements OnInit {
  setInfo: boolean = false;
  newAddress: boolean = false;
  addressUser: IAddress[] = [];
  newAddressINfo: IAddress = {
    addressID: 0,
    city: '',
    country: '',
    addressDetails: '',
    userId: '',
  };

  constructor(
    public dialog: MatDialog,
    private UserService: UserService,
    private authService: AuthService,
    private toster:ToastrService
  ) { }

  ngOnInit() {
    this.getAddress();
  }

  changeAddress(id:number) {
    this.setInfo = !this.setInfo;
    console.log(id)
    const dialogRef = this.dialog.open(AddressEditComponent, {
      width: '500px',
      disableClose: true,
      data: {
       iddd : id
    },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
      this.getAddress()
    });
  }

  addaddress() {
    this.newAddress = true;
  }

  addNew(form: NgForm) {
    console.log(form.value);
    this.newAddressINfo.city = form.value.city;
    this.newAddressINfo.country = form.value.country;
    this.newAddressINfo.addressDetails = form.value.addressDetails;
    this.newAddressINfo.userId = this.authService.UserModel.UserId;

    this.UserService.addAddress(this.newAddressINfo).subscribe(
      (response) => {
        this.newAddress = false;
        this.toster.success('Address Added successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})
        this.getAddress();

      },
      (err) => {
        console.log('catch err ' + err);
      }
    );
  }

  getAddress() {
    this.UserService.getAddressByUserID().subscribe(
      (response) => {
        console.log(response.returnObject);
        this.addressUser = response.returnObject;
      },
      (err) => {
        console.log('catch err ' + err);
      }
    );
  }

}
