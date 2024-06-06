import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentsDashboardComponent } from './apartments-dashboard/apartments-dashboard.component';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';

const routes: Routes = [
  {
    path: "",
    component: ApartmentsDashboardComponent
  },
  {
    path: ":id",
    component: ApartmentDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartmentsRoutingModule { }
