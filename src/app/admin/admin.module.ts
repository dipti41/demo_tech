import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule,MatAutocompleteModule,MatSelectModule,MatIconModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule,MatCheckboxModule,MatProgressBarModule,MatTooltipModule,MatSnackBarModule,MatRadioModule  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import { CustomerComponent } from './customer/customer.component';
import { CustomerFormComponent } from './forms/customer-form/customer-form.component';




@NgModule({
  declarations: [AdminDashboardComponent, AdminComponent,CustomerComponent, CustomerFormComponent,],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule ,
    MatButtonModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatRadioModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
