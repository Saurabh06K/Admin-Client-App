import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { SalaryDisburseComponent } from './salary-disburse/salary-disburse.component';
import { EmployeeManagerComponent } from './employee-manager/employee-manager.component';
import { BeneficiaryCrudeComponent } from './beneficiary-crude/beneficiary-crude.component';

const routes: Routes = [
  { path: '', component: ClientDashboardComponent },
  { path: 'salary-disburse', component: SalaryDisburseComponent },
  { path: 'employee-manager', component: EmployeeManagerComponent },
  { path: 'beneficiary-crude', component: BeneficiaryCrudeComponent },
  { path: 'payment-to-beneficiary', component: PaymentMethodChangeEvent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
