import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signup_data : any;

  signup = new FormGroup({
    username:new FormControl(""),
    password:new FormControl(""),
    confirmpassword:new FormControl(""),

  })
  constructor(private post:CommonService){}

  ngOnInit(): void {
    this.signupdata();
  }

  get add(){
    return this.signup.controls;
  }

  signupdata(){
    this.post.postSignupData(this.signup.value).subscribe((resp) =>{
      console.log(this.signup.value);
      this.signup_data = resp;
    })
}
  

}
