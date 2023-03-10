import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user:any

  acno:any           //here we r initialising the variables given under ngModel in dashboard html"
  psw:any
  ant:any

  //we r initilising variables for withdraw

  acnu:any
  psd:any
  ammt:any


  constructor(private ds:DataService){
    this.user = this.ds.currentuser
  }

  //Here we initialised a variable called "User" and then injected the data inside the variable "Currentuser" to "User"


  deposit(){
    var acno = this.acno
    var psw = this.psw
    var ant = this.ant
    const result = this.ds.deposit(acno,psw,ant)
    if (result) {
      alert(`Your a/c has been credited with amount ${ant}
      and the available balance is ${result}`)
    }
    else{
      alert("Incorrect acno or password")
    }
  }


  //WE ARE CALLING Method for withdraw from dataservice

  withdraw(){
    var acnu = this.acnu
    var psd = this.psd
    var ammt = this.ammt
    const result1 = this.ds.withdraw(acnu,psd,ammt)
    if(result1){
      alert(`Your a/c has been debited with amount ${ammt}
      and your balance is ${result1}`)
    }
    else{
      alert("Incorrect a/c no or password")
    }
  }

}
