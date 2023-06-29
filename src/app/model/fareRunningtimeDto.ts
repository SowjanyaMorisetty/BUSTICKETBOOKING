export class fareRunningtimeDto {
    fare: number;
    runningTime: Date;
  
    constructor(fare: number, runningTime: Date) {
      this.fare = fare;
      this.runningTime = runningTime;
    }
  }