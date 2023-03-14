import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser:any
  currentAcno:any


  userDetails:any ={                                                    //Just paste the required data into the service
    1000:{username:"Thomas",acno:1000,password:"ab12",balance:0,transaction:[]},
    1001:{username:"Dante",acno:1001,password:"ab13",balance:0,transaction:[]},
    1002:{username:"Sasha",acno:1002,password:"ab14",balance:0,transaction:[]},
    1003:{username:"Luke",acno:1003,password:"ab15",balance:0,transaction:[]}
  }

  constructor() { }

  //we r creating a method here for "register"

  register(acno:any,unname:any,pssw:any){
    var userDetails= this.userDetails
    if (acno in userDetails) {
      return false
    }
    else{
      userDetails[acno]={username:unname,acno,password:pssw,balance:0,transaction:[]}
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
        //we r storing acno of user whose login is succesful
        this.currentAcno=acno
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

        //Here we are pushing the deposit data to the transaction array
        userDetails[acno]["transaction"].push(
          {
            Type:"Credit",           //element that needs to be pushed is given as an "object with key & values."
            Amount:amount            // Already deposited sum is stored in the variable "amount",so it is given directly as the value of sec key "Amount" 
          }
        )   

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

          // We are pushing withdrawal data to the transaction array

          userDetails[acnu]["transaction"].push(
            {
              Type:"Debit",
              Amount:amount1 
            }
          )  

          // console.log(userDetails);
          

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

  // NOW WE ARE CREATING A METHOD FOR TRANSACTION

  getTransaction(acno:any){

    return this.userDetails[acno].transaction

  }

  
}
