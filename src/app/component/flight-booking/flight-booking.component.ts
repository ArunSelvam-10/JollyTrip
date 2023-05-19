import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit{

 
  Flight_Booking = new FormGroup({
    departure : new FormControl(""),
    arrival : new FormControl(""),
    flydate : new FormControl(""),
    flytime : new FormControl(""),
    infant : new FormControl(""),
    children : new FormControl(""),
    adult : new FormControl(""),
    class : new FormControl(""),
    faretype : new FormControl(""),

  })

  constructor(private link:CommonService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   saveData(){
    this.link.postFlightBooking(this.Flight_Booking.value).subscribe((resp) =>{
      console.log(resp);
      alert("Flight booked successfully");
    });
  }

}
