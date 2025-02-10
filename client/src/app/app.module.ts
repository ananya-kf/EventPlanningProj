import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PlannerDashboardComponent } from './components/planner-dashboard/planner-dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { StaffDashboardComponent } from './components/staff-dashboard/staff-dashboard.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RegisterComponent,
    LoginComponent,

    PlannerDashboardComponent,
    StaffDashboardComponent,
    ClientDashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


