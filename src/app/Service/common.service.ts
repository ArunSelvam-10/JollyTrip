import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  url:string =  'http://localhost:3000';

//  dashboard 
  postdata(data:any){
    return this.http.post( this.url + '/Dashboard', data);
  }

  // signup
  postSignupData(data:any){
    return this.http.post( this.url + '/Signup', data);
    
  }

  //form
  postFormData(data:any){
    return this.http.post( this.url + '/Forms', data);
  }

  //form2 and flight booking
  postForm2Data(data:any){
    return this.http.post( this.url + '/Forms2', data);
  }

  //train booking
  postTrainBookingData(data:any){
    return this.http.post( this.url + '/TrainBooking', data);
  }
}
