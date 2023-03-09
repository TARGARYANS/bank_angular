import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user:any


  constructor(private ds:DataService){
    this.user = this.ds.currentuser
  }

  //Here we initialised a variable called "User" and then injected the data inside the variable "Currentuser" to "User"

}
