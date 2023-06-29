import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-viewroute',
  templateUrl: './viewroute.component.html',
  styleUrls: ['./viewroute.component.css']
})
export class ViewrouteComponent {
  constructor(private service:ServiceService){this.getRoute();}


  route: any;
  getRoute(){
    this.service.getRoute().subscribe(
      response => {
        this.route = response;
        console.log(this.route);
        
        
      }
    )
  }
}
