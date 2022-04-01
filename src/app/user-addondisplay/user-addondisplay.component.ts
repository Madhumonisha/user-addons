import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from '../services/admin-api.service';

@Component({
  selector: 'app-user-addondisplay',
  templateUrl: './user-addondisplay.component.html',
  styleUrls: ['./user-addondisplay.component.css']
})
export class UserAddondisplayComponent implements OnInit {

  public planDetails:any = [];

  constructor(
    private route:Router,
    private api: AdminApiService,
    ) { }

  ngOnInit(): void {
    this.getPrePlans();
  }

  getPrePlans(){
    this.api.getPlan()
    .subscribe({
      next:(res)=>{
        this.planDetails = res;
      },
      error:(err)=>{
        alert("error while fetching records")
      }
    })  
  }
  

  onClick(){
    this.route.navigate(['user-display'])
  }

}
