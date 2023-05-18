import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  dashboard = new FormGroup({
    username : new FormControl(""),
    password : new FormControl(""),

  })
  dashboard_data: any;


  constructor(private post:CommonService ){  }

  ngOnInit(): void {
  this.dashboardData();
  }

dashboardData(){
  this.post.postdata(this.dashboard.value).subscribe((resp: any) => {
    console.log(this.dashboard.value);
    this.dashboard_data = resp;
  });
}

}
