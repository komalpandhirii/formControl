import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

login = new FormGroup({
  userName : new FormControl('',[Validators.required ,Validators.pattern('[a-zA-Z]+$')]),
  password : new FormControl('',[Validators.required,Validators.minLength(7)])
})

onSubmit(){
  console.log(this.login.value);
}

get userName () {
  return this.login.get('userName')
}

get password () {
  return this.login.get('password')
}

}
