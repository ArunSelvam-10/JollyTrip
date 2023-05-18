import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit{

  FlightBooking = new FormGroup({
    
  })

  constructor(private link:CommonService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
