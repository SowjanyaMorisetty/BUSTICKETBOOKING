import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbusComponent } from './bushomepages/addbus/addbus.component';
import { AddscheduleComponent } from './schedulepages/addschedule/addschedule.component';
import { AdminhomepageComponent } from './bushomepages/Busadminhomepage/adminhomepage.component';
import { DashboardComponent } from './bushomepages/dashboard/dashboard.component';
import { DeletebusComponent } from './bushomepages/deletebus/deletebus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainhomepageComponent } from './Adminhomepage/mainhomepage.component';
// import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SeatavailabilityComponent } from './seatavailability/seatavailability.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatebusComponent } from './bushomepages/updatebus/updatebus.component';
import { ShedulehomepageComponent } from './schedulepages/shedulehomepage/shedulehomepage.component';
import { UpdatescheduleComponent } from './schedulepages/updateschedule/updateschedule.component';
import { AddpassengerdetailsforbookingComponent } from './addpassengerdetailsforbooking/addpassengerdetailsforbooking.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"seatavailability",
    component:SeatavailabilityComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"deletebus",
    component:DeletebusComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"addbus",
    component:AddbusComponent
  },
  {
    path:"buspage",
    component:AdminhomepageComponent
  },
  // {
  //   path:"passengerdetails",
  //   component:PassengerdetailsComponent
  // },
  {
    path:"updatebus",
    component:UpdatebusComponent
  },
  {
    path:"searchpage",
    component:SearchpageComponent
  },
  {
    path:"mainhomepage",
    component:MainhomepageComponent
  },
  {
    path:"schedulepage",
    component:ScheduleComponent
  },
  {
    path:"addschedule",
    component:AddscheduleComponent
  },
  {
    path:"schedulehomepage",
    component:ShedulehomepageComponent
  },
  {
    path:"homebuspages",
    component:UpdatescheduleComponent
  },
  {
    path:"bookingdetails",
    component:AddpassengerdetailsforbookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
