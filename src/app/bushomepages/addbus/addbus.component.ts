import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../../model/bus';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent {
  busId:string='';
	busNumber:string='';
	regNo:string='';
	engineNumber:string='';
	busType:string='';
	busName:string='';
	totalSeats:string='';
  bus:Bus=new Bus();
  constructor(private service:ServiceService,private router: Router) { }
addbus(){
    this.bus.busName=this.busName;
    this.bus.busNumber=this.busNumber;
    this.bus.busType=this.busType;
    this.bus.regNo=this.regNo;
    this.bus.totalSeats=this.totalSeats;
    this.bus.engineNumber=this.engineNumber;
    this.service.addbusok(this.bus).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/adminhomepage']);
      }
      );
      alert("Bus Added")
    }

}

