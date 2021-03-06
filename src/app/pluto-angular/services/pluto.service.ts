import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { PaymentIntent } from "@stripe/stripe-js";
import Stripe from "stripe";

import { PLUTO_ID } from "../providers/client-id.provider";

@Injectable({ providedIn: "root" })
export class PlutoService {
  private static readonly BASE_URL = "https://localhost:44346/api";

  constructor(
    @Inject(PLUTO_ID) private readonly clientId: string,
    private readonly http: HttpClient
  ) {}

  createPaymentIntent(
    params: Stripe.PaymentIntentCreateParams
  ): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(
      `${PlutoService.BASE_URL}/Payment/PaymentPost`,
      params,
      { headers: { merchant: this.clientId } }
    );
  }
}
