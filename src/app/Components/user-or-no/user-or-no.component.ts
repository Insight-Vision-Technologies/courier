import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-or-no',
  templateUrl: './user-or-no.component.html',
  styleUrls: ['./user-or-no.component.css']
})
export class UserOrNOComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserOrNOComponent>,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  key:boolean=true
  create(){
    console.log('cresa')
    localStorage.removeItem('logg')

    if(this.key)
    localStorage.setItem('logg',"true")
    this.router.navigateByUrl('CreateOrder', {
      state: { key: this.key ,
      company:'false'},
    });
  }
}
