import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentsDashboardComponent } from './apartments-dashboard/apartments-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: ApartmentsDashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartmentsRoutingModule { }
