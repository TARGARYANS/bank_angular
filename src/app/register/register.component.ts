import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  acnno:any
  psww:any
  uname:any

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder){}

  //model for register form

  registerForm = this.fb.group({
    acnno:[''],
    psww:[''],
    uname:['']
  })

  //injection is succesful.Now we r going to call the "register method" in the dataservice.ts to here

  register(){
    var acnno = this.acnno
    var psww = this.psww
    var uname = this.uname

    const result = this.ds.register(acnno,uname,psww)
    if (result) {
      alert("registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("user already present")
    }
    
  }

}
