import { Component, ViewChild,OnInit,Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { switchMap } from "rxjs/operators";

import { StripeService, StripeCardComponent } from "ngx-stripe";

import { PlutoService } from "src/app/pluto-angular";
import { AppDialogComponent } from "src/app/dialog.component";
import {
  StripeElementsOptions,
  PaymentIntent
} from '@stripe/stripe-js';
@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.css']
})
export class StripePaymentComponent implements OnInit {
  @ViewChild(StripeCardComponent) card!: StripeCardComponent;
  @Input() name: any;
  @Input() amount: any;

  stripeTest!: FormGroup;
  paying = false;
  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private plutoService: PlutoService,
    private stripeService: StripeService
  ) {}

  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: [this.name, [Validators.required]],
      amount: [this.amount, [Validators.required, Validators.pattern(/\d+/)]]
    });
  }

  pay(): void {
    if (this.stripeTest.valid) {
      this.paying = true;
      this.plutoService
        .createPaymentIntent({
          amount: this.stripeTest.get("amount")?.value,
          currency: "aed",
          description:this.stripeTest.get("name")?.value
        })
        .pipe(
          switchMap(pi =>
            this.stripeService.confirmCardPayment(pi.client_secret!, {
              payment_method: {
                card: this.card.element,
                billing_details: {
                  name: this.stripeTest.get("name")?.value
                }
              }
            })
          )
        )
        .subscribe(result => {
          this.paying = false;
          if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            this.openDialog({ success: false, error: result.error.message });
          } else {
            // The payment has been processed!
            if (result.paymentIntent?.status === "succeeded") {
              // Show a success message to your customer
              this.openDialog({ success: true });
            }
          }
        });
    } else {
      console.log(this.stripeTest);
    }
  }

  openDialog(data:any) {
    this.dialog.open(AppDialogComponent, { data });
  }
}
