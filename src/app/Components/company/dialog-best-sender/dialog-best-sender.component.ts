import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-best-sender',
  templateUrl: './dialog-best-sender.component.html',
  styleUrls: ['./dialog-best-sender.component.css']
})
export class DialogBestSenderComponent implements OnInit {
 
  addbestsender = new FormGroup({
    area: new FormControl(''),
    price: new FormControl(''),
    car: new FormControl(''),
    time: new FormControl(''),
  });

  
  

  constructor() { }

  ngOnInit(): void {
  }

}
