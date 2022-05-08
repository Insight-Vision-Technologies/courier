import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

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

  settingBool:boolean=false

    constructor( private UserService: UserService,
    private toster:ToastrService
    ) { }

  ngOnInit()
  {
    this.getUser()
  }
  url:any= "../../../assets/img/fp.JPG"; //Angular 11, for stricter type
	msg = "";

	//selectFile(event) { //Angular 8
	selectFile(event: any) {

    // console.log("shs")
    // console.log(event)

    //Angular 11, for stricter type
		if(event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
    	reader.onload = (event) => {
        this.url = event.target?.result;
      }

    }






  }


  getUser(){
    this.UserService.getUserByID().subscribe(
      (response) => {
        // console.log(response.returnObject);

        this.UserInfo=response.returnObject
      },
      (err) => {
        // console.log(err)
      }
    );
  }
  setting(){
this.settingBool=true
  }

   onSubmit(form:NgForm){
// console.log('this.UserInfo')
// console.log(this.UserInfo)

    this.UserService.updateUser(this.UserInfo).subscribe(
      (response) => {
        // console.log(response.returnObject);

        this.UserInfo=response.returnObject
        this.toster.success('Item Updated successfully','succes',{timeOut : 2000,closeButton:true,progressBar:true})

        this.settingBool=false

      },
      (err) => {
        console.log(err)
      }
    );
  }
}
