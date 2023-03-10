import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser:any


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

  //WE ARE CREATING A METHOD FOR LOGIN

  login(acno:any,psw:any){
    var userDetails = this.userDetails
    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        //store current user
        this.currentuser = userDetails[acno]["username"]
        return true
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }


  //WE ARE CREATING A METHOD FOR DEPOSIT

  deposit(acno:any,psw:any,ant:any){
    var amount = parseInt(ant)        //Here we r converting the "string datatype" ant to an integer and store it into another variable.
    var userDetails = this.userDetails

    if (acno in userDetails) {
      if (psw==userDetails[acno]["password"]) {
        userDetails[acno]["balance"]+=amount           //HERE Amount wil be added to the balance
        return userDetails[acno]["balance"]
      }
      else{
        return false
      }
      
    }
    else{
      return false
    }
  }

  //WE ARE CREATING A LOGIC FOR WITHDRAWAL

  withdraw(acnu:any,psd:any,ammt:any){
    var amount1 = parseInt(ammt)
    var userDetails = this.userDetails

    if (acnu in userDetails) {
      if (psd==userDetails[acnu]["password"]) {
        if (amount1<=userDetails[acnu]["balance"]) {
          userDetails[acnu]["balance"]-=amount1

          return userDetails[acnu]["balance"]
        }
        else{
          alert("Insufficient balance")
        }
      }
      else{
        return false
      }
      
    }
    else{
      return false
    }
  }

  constructor() { }
}
