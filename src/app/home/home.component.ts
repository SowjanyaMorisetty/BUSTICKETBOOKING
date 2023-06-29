import { Component } from '@angular/core';
import { BusDto } from '../model/bus-dto';
import { Schedule } from '../model/schedule';
import { ServiceService } from '../service.service';
import { Seat } from '../model/seat';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private demosearch:ServiceService,private router:Router,private route:ActivatedRoute){
    this.getDropdownValues();
  }
  
  

  seat:Seat[]=[]
  errorMessage: string='';
  textbox1: string='';
  textbox2: string="textbox2";
  textbox3: string="textbox3";
  schedules: Schedule[]=[];
  busDto: BusDto[]=[];
  dropdownValues: string[]=[];
  fare:number[]=[];
  fareOfSchedule:number=0
 

  
  getDropdownValues(): void {
    this.demosearch.getDropdownValues().subscribe(
      (values: string[]) => {
        this.dropdownValues = values;
      },
      (error: any) => {
        console.log('Error fetching dropdown values:', error);
      }
    );}


  search(): void {
    this.schedules=[];
    this.errorMessage='';
    this.demosearch.search(this.textbox1, this.textbox2, this.textbox3).subscribe(
      (response: any) => {
        if (Array.isArray(response)) {
          this.schedules = response as Schedule[];
        } else {
          console.log("Invalid response format");
        }
      },
      (error) => {
        console.error(error);
        this.errorMessage="BUS NOT FOUND";
      }
    );

      }

      searchbus(): void {
        this.busDto=[]
        this.errorMessage=''
        this.demosearch.searchbus(this.textbox1, this.textbox2, this.textbox3).subscribe(
          (response: any) => {
            if (Array.isArray(response)) {
              this.busDto = response as BusDto[];
            } else {
              console.log("Invalid response format");
            }
          },
          (error) => {
            console.error(error);
            this.errorMessage="BUS NOT FOUND";
          }
        );
    
          }
      getfare(): void {
            
            this.fare=[];
            this.errorMessage='';
            this.demosearch.getfare(this.textbox1, this.textbox2, this.textbox3).subscribe(
              (response: any) => {
                if (Array.isArray(response)) {
                  this.fare = response as  number[];
                } else {
                  console.log("Invalid response format");
                }
              },
              (error) => {
                console.error(error);
                this.errorMessage="BUS NOT FOUND";
              }
            );
        
              }

              getseats(s:number): void {
            
                this.seat=[];
                this.demosearch.scheduleId=s
                this.errorMessage=''  
                this.demosearch.getseats(s).subscribe(
                  (response: any) => {
                    if (Array.isArray(response)) {
                      this.seat = response as  Seat[];
                      console.log(this.seat)
                      this.demosearch.seat=this.seat;
                      // this.callProcessSeats()
                    } else {
                      console.log("Invalid response format");
                    }
                  },
                  (error) => {
                    console.error(error);
                    this.errorMessage = "SEAT NOT FOUND";
                  }
                );
            
                  }    
                  
                  
                  set(){
                    this.demosearch.fare=this.fareOfSchedule;
                    this.demosearch.date=this.textbox1;          
                    this.demosearch.fhault=this.textbox2;
                    this.demosearch.thault=this.textbox3;
                   
                  }

    setfare(f:number)
    {
      this.fareOfSchedule=f
    }

}
