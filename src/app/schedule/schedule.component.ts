import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BusDto } from '../model/bus-dto';
import { Schedule } from '../model/schedule';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  constructor(private service:ServiceService,private router: Router) { 
    
  }
  
  schedules:Schedule[]=this.service.s1;
  busDto:BusDto[]=this.service.s2;
    // Add more objects for additional schedules
bookTicket(schedule:Schedule){
  console.log('Booking ticket for:', schedule);
}


}
