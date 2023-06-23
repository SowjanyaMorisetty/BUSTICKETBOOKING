import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-deletebus',
  templateUrl: './deletebus.component.html',
  styleUrls: ['./deletebus.component.css']
})
export class DeletebusComponent {
  id: string='';
  constructor(private service: ServiceService, private router: Router) { }
  delete(){
    this.service.deleteDataById(this.id).subscribe(
      (data) => {
        console.log(data);
        alert("success")
        // Navigate to a success page or perform any other action
        this.router.navigate(['/adminhomepage']);
      }
    );
  }
}

