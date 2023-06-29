import { Component } from '@angular/core';
import { Schedule } from '../model/schedule';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent {



    scheduleId!: number
    date!: Date
    departureTime!: Date
    arrivalTime!: Date
    routeId!: number
    busId!: number
    errormessage:string='';
    // schedule:Schedule; 

  constructor(private service:ServiceService,private router:Router){}
    addschedule(){
      const schedule = new Schedule(this.scheduleId,this.date,this.departureTime,this.arrivalTime,this.routeId,this.busId)
      // this.schedule.scheduleId=this.scheduleId;
      // this.schedule.date=this.date;
      // this.schedule.departureTime=this.departureTime;
      // this.schedule.arrivalTime=this.arrivalTime;
      // this.schedule.routeId=this.routeId;
      // this.schedule.busId=this.busId;

      this.service.addschedule(schedule).subscribe(

        response => {
  
          console.log(response);
          alert("Schedule Added");
          this.router.navigate(['/mainhomepage']);
        },
        (error) => {
  
          console.error(error);
    
          this.errormessage = "SCHEDULE-ID ALREADY EXIST";
    
    }
  
        );
  
        
    }

}
