import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminCarComponent } from './admin-car/admin-car.component';
import { AdminDriverComponent } from './admin-driver/admin-driver.component';
import { AdminFinancialComponent } from './admin-financial/admin-financial.component';
import { AdminPricingComponent } from './admin-pricing/admin-pricing.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminCouriresComponent } from './admin-courires/admin-courires.component';
import { AdminBillingComponent } from './admin-billing/admin-billing.component';
import { AdminCourireDerailsComponent } from './admin-courire-derails/admin-courire-derails.component';
import { AdminCourirefinanceComponent } from './admin-courirefinance/admin-courirefinance.component';
import { AdminorderDetailsComponent } from './adminorder-details/adminorder-details.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AdminAvailableCitiesComponent } from './admin-available-cities/admin-available-cities.component';
import { AdminSiteSettingComponent } from './admin-site-setting/admin-site-setting.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { AdminuserorderinfoComponent } from './adminuserorderinfo/adminuserorderinfo.component';
import { AdmineditFeaturesComponent } from './adminedit-features/adminedit-features.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { AdminEditPricingComponent } from './admin-edit-pricing/admin-edit-pricing.component';
import { AdminEditfeatureComponent } from './admin-editfeature/admin-editfeature.component';
import { AdminAddMajorComponent } from './admin-add-major/admin-add-major.component';
import { AdminEditFeedbackComponent } from './admin-edit-feedback/admin-edit-feedback.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AdminAddFeaturesComponent } from './admin-add-features/admin-add-features.component';
import { AdminEditCustomersComponent } from './admin-edit-customers/admin-edit-customers.component';
import { AdminEditCouriresComponent } from './admin-edit-courires/admin-edit-courires.component';
@NgModule({
  declarations: [


    AdminHomeComponent,
          AdminOrderComponent,
          AdminCarComponent,
          AdminDriverComponent,
          AdminFinancialComponent,
          AdminPricingComponent,
          AdminUsersComponent,
          AdminCouriresComponent,
          AdminBillingComponent,
          AdminCourireDerailsComponent,
          AdminCourirefinanceComponent,
          AdminorderDetailsComponent,
          AdminAvailableCitiesComponent,
          AdminSiteSettingComponent,
          AdminLandingPageComponent,
          AdminuserorderinfoComponent,
          AdmineditFeaturesComponent,
          AdminEditPricingComponent,
          AdminEditfeatureComponent,
          AdminAddMajorComponent,
          AdminEditFeedbackComponent,
          AdminAddFeaturesComponent,
          AdminEditCustomersComponent,
          AdminEditCouriresComponent,
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    MaterialModule,
    NgxSliderModule,
    NgMultiSelectDropDownModule.forRoot()

  ],
bootstrap: [AppComponent]

})

export class SuperAdminModule { }
