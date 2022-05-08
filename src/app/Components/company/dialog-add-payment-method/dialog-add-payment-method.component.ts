import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-payment-method',
  templateUrl: './dialog-add-payment-method.component.html',
  styleUrls: ['./dialog-add-payment-method.component.css']
})
export class DialogAddPaymentMethodComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogAddPaymentMethodComponent>,

  ) { }

  ngOnInit(): void {
  }

}
