import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module'
// import {SharedModule} from '../../shared/shared.module'
// import { SharedModule } from '../../shared/shared.module';

// import {CoreModule} from '../../core/core.module'

import { CompanyRoutingModule } from './company-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './order/order.component';
import { DriverComponent } from './driver/driver.component';
import { CarsComponent } from './cars/cars.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { HelpComponent } from './help/help.component';
import { FooterComponent } from './footer/footer.component';
import { DialogAddPriceComponent } from './dialog-add-price/dialog-add-price.component';
import { DialogCarComponent } from './dialog-car/dialog-car.component';
import { DialogDriverComponent } from './dialog-driver/dialog-driver.component';
import { HistoryComponent } from './history/history.component';
import { CarAvailableComponent } from './car-available/car-available.component';
import { SpecialComponent } from './special/special.component';
// import { DirectionComponent } from './direction/direction.component';
import { BestSenderComponent } from './best-sender/best-sender.component';
import { DialogAvailableComponent } from './dialog-available/dialog-available.component';
import { DialogEditSenderComponent } from './dialog-edit-sender/dialog-edit-sender.component';
import { DialogBestSenderComponent } from './dialog-best-sender/dialog-best-sender.component';
import { UpdatecarComponent } from './updatecar/updatecar.component';
import { RegisterComponent } from './register/register.component';
import { CarDirectionComponent } from './car-direction/car-direction.component';
import { CardeatailsComponent } from './cardeatails/cardeatails.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { DetailsComponent } from './details/details.component';
import { LabelComponent } from './label/label.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NewOrderComponent } from './new-order/new-order.component';
import { ClientHistoryComponent } from './client-history/client-history.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { AppModule } from 'src/app/app.module';
import { AppComponent } from 'src/app/app.component';
// import { TesxtComponent } from '../tesxt/tesxt.component';
import { SharedTableComponent } from 'src/app/Components/shared-table/shared-table.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FinancialComponent } from './financial/financial.component';
import { BillingComponent } from './billing/billing.component';
import { DialogReportComponent } from './dialog-report/dialog-report.component';
import { DialogAddPaymentMethodComponent } from './dialog-add-payment-method/dialog-add-payment-method.component';
import { ChangeDirectionComponent } from './change-direction/change-direction.component';
import { TimeTableCompanyComponent } from './time-table-company/time-table-company.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    OrderComponent,
    DriverComponent,
    CarsComponent,
    PricingComponent,
    HomeComponent,
    SettingComponent,
    HelpComponent,
    FooterComponent,
    DialogAddPriceComponent,
    DialogCarComponent,
    DialogDriverComponent,
    HistoryComponent,
    CarAvailableComponent,
    SpecialComponent,
    //  DirectionComponent,
    BestSenderComponent,
    DialogAvailableComponent,
    DialogEditSenderComponent,
    DialogBestSenderComponent,
    UpdatecarComponent,
    RegisterComponent,
    CarDirectionComponent,
    CardeatailsComponent,
    InvoiceComponent,
    DetailsComponent,
    LabelComponent,
    NewOrderComponent,
    ClientHistoryComponent,
    UpdateDriverComponent,
    SharedTableComponent,
    FinancialComponent,
    BillingComponent,
    DialogReportComponent,
    DialogAddPaymentMethodComponent,
    ChangeDirectionComponent,
    TimeTableCompanyComponent,

  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MaterialModule,
    Ng2SearchPipeModule,
    FlexLayoutModule

    // AppModule
    // SharedModule,
    // SharedModule,
    // CoreModule,
  ],
  bootstrap: [AppComponent]

})
export class CompanyModule { }
