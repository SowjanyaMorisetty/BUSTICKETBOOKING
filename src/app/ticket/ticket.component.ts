import { Component } from '@angular/core';

import { ServiceService } from '../service.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  passengers:number[]=[]
  constructor(private service:ServiceService){
    this.passengers=this.service.numofseats
  }
  numofseats: Array<number>=this.service.numofseats;
  source=this.service.fhault
  destination=this.service.thault
  bustype=this.service.s2[0].busType
  busname=this.service.s2[0].busName
  date=this.service.date
  passengerDto=this.service.passengerdto
  fare=this.service.fare*(this.numofseats.length)
  



}