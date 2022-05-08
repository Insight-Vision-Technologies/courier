import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module'

import { DriverRoutingModule } from './driver-routing.module';
import { TestDriverComponent } from './test-driver/test-driver.component';


@NgModule({
  declarations: [
    TestDriverComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    MaterialModule
  ]
})
export class DriverModule { }
