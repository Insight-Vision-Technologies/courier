import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BestSenderComponent } from './best-sender/best-sender.component';
import { CarAvailableComponent } from './car-available/car-available.component';
import { CarsComponent } from './cars/cars.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { HelpComponent } from './help/help.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SettingComponent } from './setting/setting.component';
import { SpecialComponent } from './special/special.component';
import { UpdatecarComponent } from './updatecar/updatecar.component';
import { CarDirectionComponent } from './car-direction/car-direction.component';
import { CardeatailsComponent } from './cardeatails/cardeatails.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { DetailsComponent } from './details/details.component';
import { LabelComponent } from './label/label.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { ClientHistoryComponent } from './client-history/client-history.component';
import { CompanyGuard } from 'src/app/Services/company.guard';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { TesxtComponent } from '../tesxt/tesxt.component';
import { FinancialComponent } from './financial/financial.component';
// import { FinancialComponent } from '';
import { BillingComponent } from './billing/billing.component';
import { DialogAddPaymentMethodComponent } from './dialog-add-payment-method/dialog-add-payment-method.component';
import { TimeTableCompanyComponent } from './time-table-company/time-table-company.component';

const routes: Routes = [
  { path: 'Dashboard', redirectTo: 'Dashboard/home', pathMatch: 'full' }, //Default Path
  // {
  //   path: 'Billing', // child route path
  //   component: BillingComponent,

  // },

  { path: '/', component: DashboardComponent },
  {
    path: 'Register', // child route path
    component: RegisterComponent,
  },
  {
    path: ' DialogAddPaymentMethod',
    component: DialogAddPaymentMethodComponent,
  },

  {
    path: 'ttt', // child route path
    component: TesxtComponent,
  },

  {
    path: 'Dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'profile', // child route path
        component: ProfileComponent,
      },
      {
        path: 'order', // child route path
        component: OrderComponent,
      },
      {
        path: 'order/invoice/:id', // child route path
        component: InvoiceComponent,
      },
      {
        path: 'order/label/:id', // child route path
        component: LabelComponent,
      },
      {
        path: 'order/detail/:id', // child route path
        component: DetailsComponent,
      },

      {
        path: 'cars', // child route path
        component: CarsComponent,
      },
      {
        path: 'driver', // child route path
        component: DriverComponent,
      },
      {
        path: 'pricing', // child route path
        component: PricingComponent,
      },
      {
        path: 'home', // child route path
        component: HomeComponent,
      },
      {
        path: 'setting', // child route path
        component: SettingComponent,
      },
      {
        path: 'help', // child route path
        component: HelpComponent,
      },
      {
        path: 'history', // child route path
        component: HistoryComponent,
      },
      {
        path: 'special', // child route path
        component: SpecialComponent,
      },
      {
        path: 'timeTable', // child route path
        component: TimeTableCompanyComponent,
      },
      {
        path: 'Available', // child route path
        component: CarAvailableComponent,
      },
      {
        path: 'best', // child route path
        component: BestSenderComponent,
      },
      {
        path: 'UpdateCar', // child route path
        component: UpdatecarComponent,
      },
      {
        path: 'UpdateDriver', // child route path
        component: UpdateDriverComponent,
      },

      {
        path: 'direction', // child route path
        component: CarDirectionComponent,
      },
      {
        path: 'details/:id', // child route path
        component: CardeatailsComponent,
      },
      {
        path: 'oderNew', // child route path
        component: NewOrderComponent,
      },
      {
        path: 'histo', // child route path
        component: ClientHistoryComponent,
      },
      {
        path: 'financial', // child route path
        component: FinancialComponent,
      },
      {
        path: 'Billing', // child route path
        component: BillingComponent,
      },
    ],
    // canActivate: [CompanyGuard],
    // data:{
    //   role: 'CompanyOwner'
    // }
  },

  { path: 'Dashboard', redirectTo: 'Dashboard/profile', pathMatch: 'full' }, //Default Path
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
