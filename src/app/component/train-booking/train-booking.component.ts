import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-train-booking',
  templateUrl: './train-booking.component.html',
  styleUrls: ['./train-booking.component.css']
})
export class TrainBookingComponent implements OnInit {

  TrainBooking = new FormGroup ({
    trainNo : new FormControl(""),
    departure : new FormControl(""),
    arrival : new FormControl(""),
    date : new FormControl(""),
    class : new FormControl(""),
    type : new FormControl("")

  })

  constructor(private link:CommonService){}


  ngOnInit(): void {
  }

  saveData(){
    this.link.postTrainBookingData(this.TrainBooking.value).subscribe((resp) =>{
      console.log(resp);
      alert("Train booked successfully");
    });
  }

}
