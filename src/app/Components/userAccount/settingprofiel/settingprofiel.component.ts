import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-settingprofiel',
  templateUrl: './settingprofiel.component.html',
  styleUrls: ['./settingprofiel.component.css']
})
export class SettingprofielComponent implements OnInit {

  setInfo:boolean=false;
  deleteaccounttoggle:boolean=true;
  UserInfo: IUser={
    name:'',
    phone:'',
    city:'',
    country:'',
    email:'',
    addressDetails:'',
  }

  UserUpdate: IUser={
    name:'',
    phone:'',
    city:'',
    country:'',
    email:'',
    addressDetails:'',
  }


  passwordtoggle:boolean=true;
  constructor( private UserService: UserService) { }

  ngOnInit() {
    this.getUser()
  }

  //url; //Angular 8
	url:any= "../../../assets/img/fp.JPG"; //Angular 11, for stricter type
	msg = "";

	//selectFile(event) { //Angular 8
	selectFile(event: any) {

    console.log("shs")
    console.log(event)

    //Angular 11, for stricter type
		if(event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
    	reader.onload = (event) => {
        this.url = event.target?.result;
      }

    }

  }

  changepassword(){
    this.passwordtoggle=!this.passwordtoggle;
  }

  passwordform(value: any){
    console.log(value);
  }

  deletemyaccount(){
    this.deleteaccounttoggle=!this.deleteaccounttoggle;

  }

  changeInfo(){
    this.setInfo=!this.setInfo;
  }

  getUser(){
    this.UserService.getUserByID().subscribe(
      (response) => {
        console.log(response.returnObject);

        this.UserInfo=response.returnObject
      },
      (err) => {
        // console.log(err)
      }
    );
  }

 async onSubmit(form:NgForm){
    console.log(form.value)
    this.UserUpdate.addressDetails=this.UserInfo.addressDetails
    this.UserUpdate.name=form.value.name
    this.UserUpdate.city=this.UserInfo.city
    this.UserUpdate.country=this.UserInfo.country
    this.UserUpdate.email=form.value.email
    this.UserUpdate.phone=form.value.phone
    console.log(this.UserUpdate)

   await this.UserService.updateUser(this.UserUpdate).subscribe(
      (response) => {
        console.log(response.returnObject);

        this.UserUpdate=response.returnObject
        this.getUser()
    this.setInfo=!this.setInfo;

      },
      (err) => {
        console.log(err)
      }
    );
  }
}
