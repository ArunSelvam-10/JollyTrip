import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-bus-booking',
  templateUrl: './bus-booking.component.html',
  styleUrls: ['./bus-booking.component.css']
})
export class BusBookingComponent implements OnInit{

  BusBooking = new FormGroup ({
    passangerName : new FormControl(""),
    gender : new FormControl(""),
    date : new FormControl(""),
    onboard : new FormControl(""),
    drop : new FormControl(""),

  })

  constructor(private link:CommonService){}

  ngOnInit(): void {
  }


  saveData(){
    this.link.postBusBookingData(this.BusBooking.value).subscribe((resp) =>{
        console.log(resp);
        alert("Bus Booked Successfully")
    });
  }
}
