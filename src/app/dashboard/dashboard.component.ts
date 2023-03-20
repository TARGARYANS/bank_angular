import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user: any
  acno:any
  xdate:any

  // acno: any           //here we r initialising the variables given under ngModel in dashboard html"
  // psw: any
  // ant: any

  //we r initilising variables for withdraw

  // acnu: any
  // psd: any
  // ammt: any


  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
    this.user = this.ds.currentuser

    this.xdate=new Date()
  }


  //this is done to make sure if we click back it doesnot redirect to already logout page
  ngOnInit(): void {
    if (!localStorage.getItem("currentAcno")) {
      alert("Please login")
      this.router.navigateByUrl("")

    }
  }

  //we r making model form

  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    ant: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  //Here we initialised a variable called "User" and then injected the data inside the variable "Currentuser" to "User"


  deposit() {
    var acno = this.depositForm.value.acno
    var psw = this.depositForm.value.psw
    var ant = this.depositForm.value.ant

    if (this.depositForm.valid) {
      const result = this.ds.deposit(acno, psw, ant)
      if (result) {
        alert(`Your a/c has been credited with amount ${ant}
        and the available balance is ${result}`)
      }
      else {
        alert("Incorrect acno or password")
      }
    }
    else {
      alert("Transaction invalid")
    }

  }

  //modelform for withdrawal

  withdrawForm = this.fb.group({
    acnu: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    ammt: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })


  //WE ARE CALLING Method for withdraw from dataservice

  withdraw() {
    var acnu = this.withdrawForm.value.acnu
    var psd = this.withdrawForm.value.psd
    var ammt = this.withdrawForm.value.ammt

    if (this.withdrawForm.valid) {
      const result1 = this.ds.withdraw(acnu, psd, ammt)
      if (result1) {
        alert(`Your a/c has been debited with amount ${ammt}
      and your balance is ${result1}`)
      }
      else {
        alert("Incorrect a/c no or password")
      }
    }
    else {
      alert("Transaction invalid")
    }

  }

  //METHOD FOR LOGOUT

  logout() {
    localStorage.removeItem("currentuser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")

  }

  //METHOD FOR DELETE

  deleteAcc(){
    this.acno=JSON.parse(localStorage.getItem("currentAcno") || "")    //local storagil ulla current ac numberine nammal acno ena variableil kodukuvaanu
  }

}
