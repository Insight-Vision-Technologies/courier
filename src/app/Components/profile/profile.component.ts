import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  editmode:boolean=true
  ChangeTXT:string='Change'
  constructor() { }

  ngOnInit(): void {
  }
  change(){
    console.log(this.editmode)
    this.editmode=!this.editmode
    console.log(this.editmode)

    if(this.editmode==true){
  this.ChangeTXT='Change'

    }
    else{
  this.ChangeTXT='Save'

    }

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
}
