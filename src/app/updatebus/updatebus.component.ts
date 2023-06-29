import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Bus } from '../model/bus';
import { BusDto } from '../model/bus-dto';

@Component({
  selector: 'app-updatebus',
  templateUrl: './updatebus.component.html',
  styleUrls: ['./updatebus.component.css']
})
export class UpdatebusComponent{


  busId!:number;
	busNo!:number;
	regNo:string='';
	engineNo!:string;
	busType!:string;
	busName!:string;
	totalSeats!:number;
  bus: Bus = new Bus();
  selectedBus:any;
  errormessage:string='';
  constructor(private serviceService:ServiceService,private router:Router){}
  
  getdetails(regNo:string){
   
    this.serviceService.getBusByRegNo(regNo).subscribe(
      response => {
        this.selectedBus = response;
        console.log(this.selectedBus);
        // this.router.navigate(['/mainhomepage']);
        
        
      },
      
      (error) => {
  
        console.error(error);
  
        this.errormessage = "BUS NOT FOUND";}

    
    );
  }
  updateBus(){
    this.bus = new Bus();
    this.bus.busId=this.selectedBus.busId;
    this.bus.busName=this.selectedBus.busName;
    this.bus.busNo=this.selectedBus.busNo;
    this.bus.busType=this.selectedBus.busType;
    this.bus.regNo=this.selectedBus.regNo;
    this.bus.totalSeats=this.selectedBus.totalSeats;
    this.bus.engineNo=this.selectedBus.engineNo;

    console.log(this.bus);
    
    


    this.serviceService.updateBus(this.bus)

        .subscribe(

          response => {

            console.log('Bus updated successfully:', response);

            alert("Bus updated successfully");

            // Handle any additional logic or UI updates here
            this.router.navigate(['/mainhomepage']);

          }

          

        );
        }
}
