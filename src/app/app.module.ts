import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SignupComponent } from './component/signup/signup.component';
import { LobbyComponent } from './component/lobby/lobby.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from'@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Form2Component } from './component/form2/form2.component';
import { Form3Component } from './component/form3/form3.component';
import { FormComponent } from './component/form/form.component';
import { TrainBookingComponent } from './component/train-booking/train-booking.component';
import { BusBookingComponent } from './component/bus-booking/bus-booking.component';
import { FlightBookingComponent } from './component/flight-booking/flight-booking.component';
import { DomesticComponent } from './component/domestic/domestic.component';
import { InternationalComponent } from './component/international/international.component';
import { HistoricalComponent } from './component/historical/historical.component';
import { DivineComponent } from './component/divine/divine.component';
import { HoneymoonComponent } from './component/honeymoon/honeymoon.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    LobbyComponent,
    FormComponent,
    NavbarComponent,
    Form2Component,
    Form3Component,
    TrainBookingComponent,
    BusBookingComponent,
    FlightBookingComponent,
    DomesticComponent,
    InternationalComponent,
    HistoricalComponent,
    DivineComponent,
    HoneymoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
