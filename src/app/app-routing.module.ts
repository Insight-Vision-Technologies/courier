import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyModule } from './Components/company/company.module';
import { DriverModule } from './Components/driverAccount/driver/driver.module';
import { SuperAdminModule } from './Components/super-admin/super-admin.module';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/Sign/login/login.component';
import { RegisterComponent } from './Components/Sign/register/register.component';
import { StartFreeTrialComponent } from './Components/start-free-trial/start-free-trial.component';

import { OurfeaturesComponent } from './Components/home/ourfeatures/ourfeatures.component';
import { TrackingOrderComponent } from './Components/tracking-order/tracking-order.component';
//import { OurpartnersComponent } from './Components/ourpartners/ourpartners.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { TrackOrderComponent } from './Components/track-order/track-order.component';
import { TrackingOrdrbynumComponent } from './Components/tracking-ordrbynum/tracking-ordrbynum.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { OurPartnersComponent } from './Components/home/our-partners/our-partners.component';
import { MrslGuard } from './Services/mrsl.guard';
import { SelectDriverComponent } from './Components/select-driver/select-driver.component';
import { SidenavComponent } from './Components/userAccount/sidenav/sidenav.component';
import { UserProfileComponent } from './Components/userAccount/user-profile/user-profile.component';
import { HelpComponent } from './Components/userAccount/help/help.component';
import { SettingprofielComponent } from './Components/userAccount/settingprofiel/settingprofiel.component';
import { OrdersuserComponent } from './Components/userAccount/ordersuser/ordersuser.component';
import { UserorderdetailsComponent } from './Components/userAccount/userorderdetails/userorderdetails.component';
import { UserorderinvoiceComponent } from './Components/userAccount/userorderinvoice/userorderinvoice.component';
import { PaymentUserComponent } from './Components/userAccount/payment-user/payment-user.component';
import { BestcourireComponent } from './Components/userAccount/bestcourire/bestcourire.component';
import { AddressComponent } from './Components/userAccount/address/address.component';
import { AboutUsComponent } from './Components/home/about-us/about-us.component';
import { UserDashboardComponent } from './Components/userAccount/user-dashboard/user-dashboard.component';
import { ContactUserComponent } from './Components/userAccount/contact-user/contact-user.component';
import { MainPricingComponent } from './Components/home/main-pricing/main-pricing.component';
import { RoleGuard } from './Services/role.guard';
import { LoggedGuard } from './Services/logged.guard';
import { CompanyGuard } from './Services/company.guard';
import { ChoosePriceUpToComComponent } from './Components/choose-price-up-to-com/choose-price-up-to-com.component';
import { UserOrNOComponent } from './Components/user-or-no/user-or-no.component';
import { OrderGuard } from './Services/order.guard';
import { TesxtComponent } from './Components/tesxt/tesxt.component';

import { StripePaymentComponent } from 'src/app/Components/stripe-payment/stripe-payment.component';

import { DriverOrderComponent } from './Components/driverAccount/driver-order/driver-order.component';
import { DriverTrackComponent } from './Components/driverAccount/driver-track/driver-track.component';
import { DriverLoginComponent } from './Components/driverAccount/driver-login/driver-login.component';
import { RatingComponent } from './Components/userAccount/rating/rating.component';

import { DriverPagesComponent } from './Components/driverAccount/driver-pages/driver-pages.component';
import { DriverProfileComponent } from './Components/driverAccount/driver-profile/driver-profile.component';
import { DriverSettingComponent } from './Components/driverAccount/driver-setting/driver-setting.component';

import { DriverDashboardComponent } from './Components/driverAccount/driver-dashboard/driver-dashboard.component';
import { DriverHelpComponent } from './Components/driverAccount/driver-help/driver-help.component';

import { OrderslistComponent } from './Components/driverAccount/orderslist/orderslist.component';

import { ActiveOrderComponent } from './Components/driverAccount/active-order/active-order.component';

import { FeatureComponent } from './Components/feature/feature.component';
import { DriverDetailsOrderComponent } from './Components/driverAccount/driver-details-order/driver-details-order.component';
import { TestLoginComponent } from './Components/Sign/test-login/test-login.component';

const routes: Routes = [
  // { path: 'dash', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  //  { path: 'partners', component: OurpartnersComponent },
  {
    path: 'Company',
    loadChildren: () =>
      import('./Components/company/company.module').then(
        (m) => m.CompanyModule
      ),
    // canActivate: [LoggedGuard],
  },

  {
    path: 'Dri',
    loadChildren: () =>
      import('./Components/driverAccount/driver/driver.module').then(
        (m) => m.DriverModule
      ),
    // canActivate: [LoggedGuard],
  },
  {
    path: 'Admin',
    loadChildren: () =>
      import('./Components/super-admin/super-admin.module').then(
        (m) => m.SuperAdminModule
      ),
      canActivate: [RoleGuard],
    data: {
      role: 'Admin',
    },
    // canActivate: [LoggedGuard],
  },
  // { path: 'dash', component: LoginComponent ,

  // },
  {
    path: 'payment', // child route path
    component: StripePaymentComponent,
  },
  { path: 'login', component: TestLoginComponent },
  { path: 'sign', component: LoginComponent },
  { path: 'signin', component: RegisterComponent },

  // { path: 'sign', component: RegisterComponent },
  { path: 'Feature', component: FeatureComponent },
  { path: 'foot', component: FooterComponent },
  { path: 'featur', component: OurfeaturesComponent },
  { path: 'freetrial', component: StartFreeTrialComponent },
  { path: 'trackingorder', component: TrackingOrderComponent },
  { path: 'paymentbtn/:orderNumber', component: PaymentComponent },
  { path: 'test', component: TesxtComponent },
  { path: 'UserLog', component: UserOrNOComponent },
  {
    path: 'CreateOrder',
    component: TrackOrderComponent,
    // canActivate: [OrderGuard],
  },
  { path: 'TrackingOrderbynum', component: TrackingOrdrbynumComponent },
  { path: 'ssss', component: ProfileComponent },
  { path: 'profiless', component: UserProfileComponent },
  { path: 'Aboutus', component: AboutUsComponent },
  { path: 'MainPricing', component: MainPricingComponent },
  { path: 'ChoosePrice/:orderNumber', component: ChoosePriceUpToComComponent },
  { path: 'Rating', component: RatingComponent },

  { path: 'DriverLogin', component: DriverLoginComponent },

  {
    path: 'DriverPages',
    redirectTo: 'DriverPages/DriverDashboard',
    pathMatch: 'full',
  },

  {
    path: 'DriverPages',
    component: DriverPagesComponent,
    children: [
      { path: 'DriverProfile', component: DriverProfileComponent },

      { path: 'ActiveOrder', component: ActiveOrderComponent },

      { path: 'DriverSetting', component: DriverSettingComponent },

      { path: 'DriverDashboard', component: DriverDashboardComponent },

      { path: 'DriverHelp', component: DriverHelpComponent },

      { path: 'DriverOrder', component: DriverOrderComponent },

      { path: 'DriverTrack', component: DriverTrackComponent },
      { path: 'OrderDetails', component: DriverDetailsOrderComponent },

      {
        path: 'Orderslist',

        component: OrderslistComponent,
      },
    ],
  },

  { path: 'Profile', redirectTo: 'Profile/DashUser', pathMatch: 'full' },

  {
    path: 'Profile',
    component: SidenavComponent,
    children: [
      {
        path: 'acc', // child route path
        component: UserProfileComponent,
      },
      {
        path: 'DashUser', // child route path
        component: UserDashboardComponent,
      },
      {
        path: 'setting', // child route path
        component: SettingprofielComponent,
      },
      {
        path: 'order', // child route path
        component: OrdersuserComponent,
      },
      {
        path: 'order/invoice/:id', // child route path
        component: UserorderinvoiceComponent,
      },
      {
        path: 'order/details/:id', // child route path
        component: UserorderdetailsComponent,
      },
      {
        path: 'payment', // child route path
        component: PaymentUserComponent,
      },
      {
        path: 'help', // child route path
        component: HelpComponent,
      },
      {
        path: 'contact', // child route path
        component: ContactUserComponent,
      },

      { path: 'bCourire', component: BestcourireComponent },
      { path: 'Addresses', component: AddressComponent },
    ],
    canActivate: [RoleGuard],
    data: {
      role: 'User',
    },
  },

  // { path: 'DriverPages', component: DriverPagesComponent },

  { path: 'Partners', component: OurPartnersComponent },
  { path: 'selectdriver', component: SelectDriverComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, //Default Path

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
