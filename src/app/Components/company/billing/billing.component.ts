import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPaymentMethodComponent } from '../dialog-add-payment-method/dialog-add-payment-method.component';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {


  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }


  addPayment(){
    const dialogRef = this.dialog.open(DialogAddPaymentMethodComponent,
      {
        width: '700px',
        disableClose:true,
        // margin: '0 auto'
        // disableClose: true,
        // hasBackdrop: true,
      });

      dialogRef.afterClosed().subscribe(async (result) => {
      console.log('gggggg');
    });
  }
}
