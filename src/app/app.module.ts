import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './bushomepages/dashboard/dashboard.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SeatavailabilityComponent } from './seatavailability/seatavailability.component';
// import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';
import { AdminhomepageComponent } from './bushomepages/Busadminhomepage/adminhomepage.component';
import { AddbusComponent } from './bushomepages/addbus/addbus.component';
import { UpdatebusComponent } from './bushomepages/updatebus/updatebus.component';
import { DeletebusComponent } from './bushomepages/deletebus/deletebus.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { MainhomepageComponent } from './Adminhomepage/mainhomepage.component';
import { AddscheduleComponent } from './schedulepages/addschedule/addschedule.component';
import { UpdatescheduleComponent } from './schedulepages/updateschedule/updateschedule.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { BusComponent } from './bushomepages/bus/bus.component';
import { ShedulehomepageComponent } from './schedulepages/shedulehomepage/shedulehomepage.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AddpassengerdetailsforbookingComponent } from './addpassengerdetailsforbooking/addpassengerdetailsforbooking.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FootersComponent } from './footers/footers.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    SearchpageComponent,
    SeatavailabilityComponent,
    // PassengerdetailsComponent,
    AdminhomepageComponent,
    AddbusComponent,
    UpdatebusComponent,
    DeletebusComponent,
    MainhomepageComponent,
    AddscheduleComponent,
    UpdatescheduleComponent,
    ScheduleComponent,
    BusComponent,
    ShedulehomepageComponent,
    HeaderComponent,
    FooterComponent,
    AddpassengerdetailsforbookingComponent,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    FootersComponent,
    TicketComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
