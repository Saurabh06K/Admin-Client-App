import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientPanelComponent } from './client-panel/client-panel.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { SalaryDisburseComponent } from './salary-disburse/salary-disburse.component';
import { EmployeeManagerComponent } from './employee-manager/employee-manager.component';
import { BeneficiaryCrudeComponent } from './beneficiary-crude/beneficiary-crude.component';
import { PaymentToBeneficiaryComponent } from './payment-to-beneficiary/payment-to-beneficiary.component';


@NgModule({
  declarations: [
    ClientPanelComponent,
    ClientDashboardComponent,
    SalaryDisburseComponent,
    EmployeeManagerComponent,
    BeneficiaryCrudeComponent,
    PaymentToBeneficiaryComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
