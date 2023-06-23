import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from '../../model/schedule';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent {
  scheduleId!: number;
  date!:string;
  departureTime!:string;
  arrivalTime!:string;
  routeId!: number;
  busId!:number;
  schedule:Schedule=new Schedule();
  constructor(private service:ServiceService,private router: Router) { }
  addschedule(){
      this.schedule.scheduleId=this.scheduleId;
      this.schedule.date=this.date;
      this.schedule.departureTime=this.departureTime;
      this.schedule.arrivalTime=this.arrivalTime;
      this.schedule.busId=this.busId;
      this.schedule.routeId=this.routeId;
      this.service.addscheduleok(this.schedule).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/adminhomepage']);
        }
        );
        alert("Bus Added")
      
  }
}
