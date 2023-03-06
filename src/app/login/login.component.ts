import { Component } from '@angular/core';

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
  acnum:any
  pass:any

  userDetails:any ={                                                    //This  is a database
    1000:{username:"Thomas",acno:1000,password:"ab12",balance:0},
    1001:{username:"Dante",acno:1001,password:"ab13",balance:0},
    1002:{username:"Sasha",acno:1002,password:"ab14",balance:0},
    1003:{username:"Luke",acno:1003,password:"ab15",balance:0}
  }


  //let us make a method
  login(){
    var acnumb = this.acnum                 //To just avoid calling "this.acnum" everytime,we r storing it inside another variable called "acnumb"
    var userDetails = this.userDetails
    var psw = this.pass
    if (acnumb in userDetails) {
      if(psw==userDetails[acnumb]["password"]){
        alert('Login success')

      }
      else{
        alert('Incorrect password')
      }
    }
    else{
      alert('Incorrect acnum')
    }
  }

  // $event binding

  acnoChange(event:any){            //nammal ivide type "any" aayitu define cheythu
    this.acnum=event.target.value
    //declare cheytha variablene pinneed call cheyumbol "this."  use cheyanam
    }

  passChange(event:any){
    this.pass=event.target.value
    console.log(this.pass);
    
  }  

}
