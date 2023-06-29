export class Schedule {
    scheduleId: number =0;
    date: Date ;
    departureTime: Date;
    arrivalTime: Date;
    routeId: number =0;
    busId: number =0;
    constructor(
      scheduleId: number,
      date: Date,
      departureTime: Date,
      arrivalTime: Date,
      routeId: number,
      busId: number
    ) {
      this.scheduleId = scheduleId;
      this.date = date;
      this.departureTime = departureTime;
      this.arrivalTime = arrivalTime;
      this.routeId = routeId;
      this.busId = busId;
    }

}
