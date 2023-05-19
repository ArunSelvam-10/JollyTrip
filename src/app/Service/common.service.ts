import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  url:string =  'http://localhost:3000';

//  Dashboard 
  postdata(data:any){
    return this.http.post( this.url + '/Dashboard', data);
  }

  // Signup
  postSignupData(data:any){
    return this.http.post( this.url + '/Signup', data);
    
  }

  //Form
  postFormData(data:any){
    return this.http.post( this.url + '/Forms', data);
  }

  //Form2 and Flight booking
  postForm2Data(data:any){
    return this.http.post( this.url + '/Forms2', data);
  }


  //Flight Booking
  postFlightBooking(data:any){
    return this.http.post( this.url +'/FlightBooking', data);
  }

  //Train booking
  postTrainBookingData(data:any){
    return this.http.post( this.url + '/TrainBooking', data);
  }

  //Bus Booking
  postBusBookingData(data:any){
    return this.http.post( this.url + '/BusBooking', data);
  }

  //Hotel Booking
  postHotelBookingData(data:any){
    return this.http.post( this.url + '/HotelBooking', data);
  }
}
