import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusDto } from '../model/bus-dto';
import { Schedule } from '../model/schedule';
import { ServiceService } from '../service.service';
import { Seat } from '../model/seat';
import { fareRunningtimeDto } from '../model/fareRunningtimeDto';




@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})


export class SearchpageComponent {

  
  constructor(private demosearch:ServiceService,private router:Router){
    this.getDropdownValues();
  }


  
  seat:Seat[]=[]
  errorMessage: string='';
  textbox1: string='';
  textbox2: string='';
  textbox3: string='';
  schedules: Schedule[]=[];
  busDto: BusDto[]=[];
  dropdownValues: string[]=[];
  fare:fareRunningtimeDto[]=[];
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

    setfare(f:number)
    {
      this.fareOfSchedule=f
      
    }
  search(): void {
    this.schedules=[]; 
    this.errorMessage=''  
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
        this.errorMessage = "BUS NOT FOUND";
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
              this.demosearch.s2=this.busDto
            } else {
              console.log("Invalid response format");
            }
          },
          (error) => {
            console.error(error);
            this.errorMessage = "BUS NOT FOUND";
          }
        );
    
          }
          getfare(): void {
            
            this.fare=[];
            this.errorMessage=''  
            this.demosearch.getfare(this.textbox1, this.textbox2, this.textbox3).subscribe(
              (response: any) => {
                if (Array.isArray(response)) {
                  this.fare = response as  fareRunningtimeDto[];
                  console.log(this.fare);
                } else {
                  console.log("Invalid response format");
                }
              },
              (error) => {
                console.error(error);
                this.errorMessage = "BUS NOT FOUND";
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
}


