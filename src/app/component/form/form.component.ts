import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // data: any;
  // details:any;

  

  constructor( private link:CommonService){}
  
  ngOnInit(): void {
   
  }

  myForm = new FormGroup({
    title: new FormControl(""),
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    contact: new FormControl(""),
    email: new FormControl(""),
    aadhar: new FormControl(""),
    city: new FormControl(""),

  })

  // get add(){
  //   return this.myForm.controls;
  // }

  // formData(data:any){
  //   this.link.postFormData(data).subscribe((resp :any) =>{
  //     this.data = resp;
  //   })
  // }

  savedata(){
    this.link.postFormData(this.myForm.value).subscribe((resp) =>{
      console.log(resp);
      // this.details = resp;
      alert("Saved Successfully")
    });
  }

}
