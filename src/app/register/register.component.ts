import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  //model for register form

  registerForm = this.fb.group({
    acnno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psww: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]]
  })

  //injection is succesful.Now we r going to call the "register method" in the dataservice.ts to here

  register() {
    var acnno = this.registerForm.value.acnno
    var psww = this.registerForm.value.psww
    var uname = this.registerForm.value.uname

    //WE ARE CHECKING VALIDATION

    if (this.registerForm.valid) {
      const result = this.ds.register(acnno, uname, psww)
      if (result) {
        alert("registered")
        this.router.navigateByUrl("")
      }
      else {
        alert("user already present")
      }

    }
    else {
      alert("invalid form")
    }



  }

}
