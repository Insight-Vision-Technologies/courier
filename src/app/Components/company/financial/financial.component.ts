import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {

  // constructor() { }
  constructor(private router: Router) {}

  
  ngOnInit(): void {
  }


  // onClick(card: string) {
  //   if (card == 'billing') {
  //     this.router.navigateByUrl('Company/Dashboard/billing');
  //   } 
  // }
}
