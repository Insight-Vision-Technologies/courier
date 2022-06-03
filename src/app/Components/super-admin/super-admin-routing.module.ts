import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
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
import { AdminAvailableCitiesComponent } from './admin-available-cities/admin-available-cities.component';
import { AdminSiteSettingComponent } from './admin-site-setting/admin-site-setting.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { AdminuserorderinfoComponent } from './adminuserorderinfo/adminuserorderinfo.component';
import { AdmineditFeaturesComponent } from './adminedit-features/adminedit-features.component';
import { AdminEditPricingComponent } from './admin-edit-pricing/admin-edit-pricing.component';
import { AdminEditfeatureComponent } from './admin-editfeature/admin-editfeature.component';
import { AdminAddMajorComponent } from './admin-add-major/admin-add-major.component';
import { AdminEditFeedbackComponent } from './admin-edit-feedback/admin-edit-feedback.component';
import { AdminEditCustomersComponent } from './admin-edit-customers/admin-edit-customers.component';
import { AdminEditCouriresComponent } from './admin-edit-courires/admin-edit-courires.component';


const routes: Routes = [
  { path: 'Dashboard', redirectTo: 'Dashboard/AdminHome', pathMatch: 'full' }, //Default Path

  { path: '/', component: AdminDashboardComponent },
  { path: 'AdminCourireDerails ', component: AdminCourireDerailsComponent },
  { path: 'AdminCourirefinance', component: AdminCourirefinanceComponent },
  { path: 'AdminorderDetails', component: AdminorderDetailsComponent },
  { path: 'Adminuserorderinfo', component: AdminuserorderinfoComponent },
  { path: 'AdminEditPricing', component: AdminEditPricingComponent },



  {
    path: 'Dashboard', // child route path
    component: AdminDashboardComponent,
    children: [
      {
        path: 'AdminOrder', // child route path
        component: AdminOrderComponent,
      },
      { path: 'AdminAvailableCities',
       component: AdminAvailableCitiesComponent },
      { path: 'AdmineditFeatures',
        component: AdmineditFeaturesComponent
      },
      {
        path: 'availableCities',
        component: AdminAvailableCitiesComponent
      },

      { path: 'AdminAddMajor',
       component: AdminAddMajorComponent },

       { path: 'AdminEditFeedback',
        component: AdminEditFeedbackComponent },

      { path: 'AdminEditfeature/:id',
       component: AdminEditfeatureComponent },

      {
        path: 'AdminHome', // child route path
        component: AdminHomeComponent,
      },
      {
        path: 'AdminCar', // child route path
        component: AdminCarComponent,
      },
      {
        path: 'AdminDriver', // child route path
        component: AdminDriverComponent,
      },
      {
        path: 'AdminSiteSetting', // child route path
        component: AdminSiteSettingComponent,

      },
      {
        path: 'AdminLandingPage', // child route path
        component: AdminLandingPageComponent,

      },
      {
        path: 'AdminFinancial', // child route path
        component: AdminFinancialComponent,
      },
      {
        path: 'AdminBilling', // child route path
        component: AdminBillingComponent,
      },
      {
        path: 'AdminPricing', // child route path
        component: AdminPricingComponent,
      },
      {
        path: 'AdminCourires', // child route path
        component: AdminCouriresComponent,
      },

      {
         path: 'AdminEditCustomer',
          component: AdminEditCustomersComponent
         },

       {
         path: 'AdminEditCourires',
          component: AdminEditCouriresComponent

        },



      {
        path: 'AdminUsers', // child route path
        component: AdminUsersComponent,
      },
    ]

  },







  // ],
  // canActivate: [CompanyGuard],
  // data:{
  //   role: 'CompanyOwner'
  // }

// },

  // { path: 'Dashboard', redirectTo: 'Dashboard/profile', pathMatch: 'full' }, //Default Path


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SuperAdminRoutingModule { }
