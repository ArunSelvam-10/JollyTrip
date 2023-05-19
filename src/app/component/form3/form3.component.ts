import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit{

  HotelBooking = new FormGroup ({
    inDate : new FormControl(""),
    outDate : new FormControl(""),
    inTime : new FormControl(""),
    outTime : new FormControl(""),
    type : new FormControl(""),
    food : new FormControl(""),
    floorType : new FormControl(""),

  })

  constructor(private link:CommonService){}


  ngOnInit(): void {
  }

  saveData(){
    this.link.postHotelBookingData(this.HotelBooking.value).subscribe((resp) =>{
      console.log(resp);
    });
  }
  

}
