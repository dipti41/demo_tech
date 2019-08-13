
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AuthGuard } from '../auth/auth.guard';

import { CustomerComponent } from './customer/customer.component';
import { CustomerFormComponent } from './forms/customer-form/customer-form.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          
          { path: 'customer',component: CustomerComponent },
          { path: 'customer/create',component: CustomerFormComponent },
          { path: 'customer/edit/:id',component: CustomerFormComponent },
          { path: '', component: AdminDashboardComponent },                   
          { path: '**',component: AdminDashboardComponent }
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
