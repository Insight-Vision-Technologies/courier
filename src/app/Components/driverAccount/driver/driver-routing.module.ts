import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestDriverComponent } from './test-driver/test-driver.component';

const routes: Routes = [
  { path: 'testdri', component: TestDriverComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
