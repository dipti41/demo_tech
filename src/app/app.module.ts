import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { httpInterceptorProviders } from './http-interceptors/index';
import { RegisterComponent } from './register/register.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule,MatAutocompleteModule,MatSelectModule,MatIconModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule,MatCheckboxModule,MatProgressBarModule,MatTooltipModule,MatSnackBarModule,MatRadioModule  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,               
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    AuthModule, 
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
    AppRoutingModule
  ],
  entryComponents: [],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
