import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';

import { MaterialModule } from '../app/material/material.module';

import { LoginComponent } from './Components/Sign/login/login.component';
import { TesxtComponent } from './Components/tesxt/tesxt.component';
import { RegisterComponent } from './Components/Sign/register/register.component';
import { StartFreeTrialComponent } from './Components/start-free-trial/start-free-trial.component';
import { OurfeaturesComponent } from './Components/home/ourfeatures/ourfeatures.component';

import { TrackingOrderComponent } from './Components/tracking-order/tracking-order.component';

// import { OurpartnersComponent } from './Components/ourpartners/ourpartners.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { TrackOrderComponent } from './Components/track-order/track-order.component';
import { TrackingOrdrbynumComponent } from './Components/tracking-ordrbynum/tracking-ordrbynum.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { OurPartnersComponent } from './Components/home/our-partners/our-partners.component';
import { ProfileSettingComponent } from './Components/profile-setting/profile-setting.component';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { ToastrModule } from 'ngx-toastr';
import { MatInputModule } from '@angular/material/input';

import { HttpLoadingInterceptor } from './core/errors/HttpLoadingInterceptor';
import { CoreModule } from './core/core.module';
import { GlobalErrorHandler } from './core/errors/GlobalErrorHandler';
import { handleErrorGlobal } from './core/errors/handleerrorglobal';
import { FormsModule } from '@angular/forms';
import { SelectDriverComponent } from './Components/select-driver/select-driver.component';
import { SidenavComponent } from './Components/userAccount/sidenav/sidenav.component';
import { SettingprofielComponent } from './Components/userAccount/settingprofiel/settingprofiel.component';
import { PaymentUserComponent } from './Components/userAccount/payment-user/payment-user.component';
import { OrdersuserComponent } from './Components/userAccount/ordersuser/ordersuser.component';
import { UserProfileComponent } from './Components/userAccount/user-profile/user-profile.component';
import { MatDividerModule } from '@angular/material/divider';
import { BestcourireComponent } from './Components/userAccount/bestcourire/bestcourire.component';
import { AddressComponent } from './Components/userAccount/address/address.component';
import { AboutUsComponent } from './Components/home/about-us/about-us.component';
import { UserDashboardComponent } from './Components/userAccount/user-dashboard/user-dashboard.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatDialogModule } from '@angular/material/dialog';
import { HelpComponent } from './Components/userAccount/help/help.component';
import { UserorderdetailsComponent } from './Components/userAccount/userorderdetails/userorderdetails.component';
import { UserorderinvoiceComponent } from './Components/userAccount/userorderinvoice/userorderinvoice.component';
import { MainPricingComponent } from './Components/home/main-pricing/main-pricing.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ApirequestInterceptor } from './Interceptor/apirequest.interceptor';
import { ChoosePriceUpToComComponent } from './Components/choose-price-up-to-com/choose-price-up-to-com.component';
import { UserOrNOComponent } from './Components/user-or-no/user-or-no.component';
import { AddressEditComponent } from './Components/userAccount/address-edit/address-edit.component';
import { LoaderInterceptor } from './loader/loader.interceptor';

import { SharedModule } from 'src/app/shared/shared.module';
import { StripePaymentComponent } from './Components/stripe-payment/stripe-payment.component';
import { DriverOrderComponent } from './Components/driverAccount/driver-order/driver-order.component';
import { DriverTrackComponent } from './Components/driverAccount/driver-track/driver-track.component';
import { DriverLoginComponent } from './Components/driverAccount/driver-login/driver-login.component';
import { OrderdetailsComponent } from './Components/userAccount/orderdetails/orderdetails.component';
import { RatingComponent } from './Components/userAccount/rating/rating.component';
import { DriverPagesComponent } from './Components/driverAccount/driver-pages/driver-pages.component';
import { DriverProfileComponent } from './Components/driverAccount/driver-profile/driver-profile.component';
import { DriverSettingComponent } from './Components/driverAccount/driver-setting/driver-setting.component';
import { DriverDashboardComponent } from './Components/driverAccount/driver-dashboard/driver-dashboard.component';
import { DriverHelpComponent } from './Components/driverAccount/driver-help/driver-help.component';
import { DriverDetailsOrderComponent } from './Components/driverAccount/driver-details-order/driver-details-order.component';

import { OrderslistComponent } from './Components/driverAccount/orderslist/orderslist.component';
import { ActiveOrderComponent } from './Components/driverAccount/active-order/active-order.component';
import { FeatureComponent } from './Components/feature/feature.component';
// import { SecurityComponent } from './Components/securityhh/security.component';
// import { FinancialComponent } from './financial/financial.component';
// import { AlertModule } from 'ng-cdbangular';
import {WebcamModule} from 'ngx-webcam';
import { AddNewPaymentMethodComponent } from './Components/userAccount/add-new-payment-method/add-new-payment-method.component';
import { AdminDashboardComponent } from './Components/super-admin/admin-dashboard/admin-dashboard.component';
import { CommonModule } from '@angular/common';


import { NgxStripeModule } from "ngx-stripe";
import { PlutoModule } from "./pluto-angular";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TestLoginComponent } from './Components/Sign/test-login/test-login.component';
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: 'f615c158-9b26-4760-b5cd-2cbf6e46f3e7',
      redirectUri: 'http://localhost:4200'
    }
  });
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    TesxtComponent,
    RegisterComponent,
    StartFreeTrialComponent,
    OurfeaturesComponent,
    TrackingOrderComponent,

    // OurpartnersComponent,
    NotFoundComponent,
    PaymentComponent,
    TrackOrderComponent,
    TrackingOrdrbynumComponent,
    ProfileComponent,
    OurPartnersComponent,
    ProfileSettingComponent,
    SelectDriverComponent,
    SidenavComponent,
    SettingprofielComponent,
    PaymentUserComponent,
    OrdersuserComponent,
    UserProfileComponent,
    BestcourireComponent,
    AddressComponent,
    AboutUsComponent,
    UserDashboardComponent,
    HelpComponent,
    UserorderdetailsComponent,
    UserorderinvoiceComponent,
    MainPricingComponent,
    ChoosePriceUpToComComponent,
    UserOrNOComponent,
    AddressEditComponent,
    StripePaymentComponent,
    DriverOrderComponent,
    DriverTrackComponent,
    DriverLoginComponent,
    DriverDetailsOrderComponent,
    OrderdetailsComponent,
    RatingComponent,

    DriverPagesComponent,
    DriverProfileComponent,
    DriverSettingComponent,
    DriverDashboardComponent,
    DriverHelpComponent,
    OrderslistComponent,
    ActiveOrderComponent,
    FeatureComponent,
    AddNewPaymentMethodComponent,
    AdminDashboardComponent,
    TestLoginComponent,
    // SecurityComponent,
    // FinancialComponent,







  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule ,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MsalModule,
    // CoreModule,
    ToastrModule.forRoot(),
    FormsModule,
    MatInputModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    NgxSliderModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
    WebcamModule,
     NgxStripeModule.forRoot(
      "pk_live_51IzKYpBI4eYc8msNmzzAiyYn7MpSuerjaUt19tFjgUKziyThapQcrrq1qcHVh6A9Vqo496DfNvTLnrDVGZbtx3jQ00QPgyITrn"
    ),
    PlutoModule.forRoot("449f8516-791a-49ab-a09d-50f79a0678b6")


  ],
  providers: [
    {
      // processes all errors
      provide: ErrorHandler,
      useClass: handleErrorGlobal,
    },
    {
      // processes all request Token
      provide: HTTP_INTERCEPTORS,
      useClass: ApirequestInterceptor,
      multi: true,

    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS,
       useClass: LoaderInterceptor,
        multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
