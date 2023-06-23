import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { PassengerDto, RequestDto } from '../model/Request-Dto';

@Component({
  selector: 'app-addpassengerdetailsforbooking',
  templateUrl: './addpassengerdetailsforbooking.component.html',
  styleUrls: ['./addpassengerdetailsforbooking.component.css']
})
export class AddpassengerdetailsforbookingComponent {
  email:string[]=[]

  mobileNo:string[]=[]

  name:string[]=[]

  gender:string[]=[]

  age:number[]=[]

  passengers: number[] = [];




  passengerDto: PassengerDto[] = [];

  requestDto:RequestDto[]=[];

  fhault: string =this.demosearch.fhault;

  thault: string =this.demosearch.thault;

  fare: number = this.demosearch.fare;

  // date : string = this.demosearch.date;




  numofseats: Array<number>=this.demosearch.numofseats;

  date: string = this.demosearch.date;

 




  constructor(private demosearch:ServiceService,private router:Router) {




    this.passengers =Array( this.numofseats.length);




  }




  submitForm() {





    for (let i = 0; i < this.numofseats.length; i++) {

      const passengerDto = new PassengerDto(this.name[i],this.email[i],this.mobileNo[i],this.age[i],this.gender[i])

       this.passengerDto.push(passengerDto);

      //  console.log(this.passengerList);

    }

    const requestDto=new RequestDto(this.fhault,this.thault,this.demosearch.scheduleId,2,this.numofseats.length,this.fare,this.date,this.numofseats,this.passengerDto)

    this.requestDto.push(requestDto);

    console.log(this.requestDto);

    // console.log(this.passengers)

    // console.log(this.passengerList);

   




  }
}