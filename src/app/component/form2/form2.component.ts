import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit{

  flightBooking = new FormGroup({
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
  }

  saveData(){
    this.link.postForm2Data(this.flightBooking.value).subscribe((resp) =>{
      console.log(resp);
      alert("Flight booked successfully");
    });
  }

  
}
