import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  userDetails:any ={                                                    //Just paste the required data into the service
    1000:{username:"Thomas",acno:1000,password:"ab12",balance:0},
    1001:{username:"Dante",acno:1001,password:"ab13",balance:0},
    1002:{username:"Sasha",acno:1002,password:"ab14",balance:0},
    1003:{username:"Luke",acno:1003,password:"ab15",balance:0}
  }

  //we r creating a method here for "register"

  register(acno:any,unname:any,pssw:any){
    var userDetails= this.userDetails
    if (acno in userDetails) {
      return false
    }
    else{
      userDetails[acno]={username:unname,acno,password:pssw,balance:0}
      console.log(userDetails);
      
      return true
    }
  }

  constructor() { }
}
