import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  data="Your Perfect Banking Partner"
  data1="enter your ac number"

  //variable declaration can be done by either
  // acno=""   or  acno:any
  acno:any
  psw:any

  // userDetails:any ={                                                    //This  is a database
  //   1000:{username:"Thomas",acno:1000,password:"ab12",balance:0},
  //   1001:{username:"Dante",acno:1001,password:"ab13",balance:0},
  //   1002:{username:"Sasha",acno:1002,password:"ab14",balance:0},
  //   1003:{username:"Luke",acno:1003,password:"ab15",balance:0}
  // }
  constructor(private router:Router,private ds:DataService){}


  //let us make a method
  // login(){
  //   var acnumb = this.acnum                 //To just avoid calling "this.acnum" everytime,we r storing it inside another variable called "acnumb"
  //   var userDetails = this.ds.userDetails
  //   var psw = this.pass
  //   if (acnumb in userDetails) {
  //     if(psw==userDetails[acnumb]["password"]){
  //       alert('Login success')
  //       //redirection
  //       this.router.navigateByUrl("dashboard")
        

  //     }
  //     else{
  //       alert('Incorrect password')
  //     }
  //   }
  //   else{
  //     alert('Incorrect acnum')
  //   }
  // }

  // $event binding

  // acnoChange(event:any){            //nammal ivide type "any" aayitu define cheythu
  //   this.acnum=event.target.value
  //   //declare cheytha variablene pinneed call cheyumbol "this."  use cheyanam
  //   }

  // passChange(event:any){
  //   this.pass=event.target.value
  //   console.log(this.pass);
    
  // }  

  // we r now doing event binding with template rendering.For that purpose we r commenting the above $binding.


  // login(acnumb:any,psw:any){
  //   var acnumb = acnumb.value                 //To just avoid calling "this.acnum" everytime,we r storing it inside another variable called "acnumb"
  //   var userDetails = this.userDetails
  //   var psw = psw.value                           //In template rendering,to console we have to give ".value"
  //   if (acnumb in userDetails) {
  //     if(psw==userDetails[acnumb]["password"]){
  //       alert('Login success')

  //     }
  //     else{
  //       alert('Incorrect password')
  //     }
  //   }
  //   else{
  //     alert('Incorrect acnum')
  //   }
  // }



  //we created login method in data services.Now we can call it here

  login(){
    var acno = this.acno
    var psw = this.psw
    const result=this.ds.login(acno,psw)
    if (result){
      alert("login success")
      this.router.navigateByUrl("dashboard")
    }
    else{
      alert("Incorrect acno or password")
    }
  }






}
