import {Component} from '@angular/core';
import {User} from '../model/user';
import {NgForm, NgModel} from '@angular/forms';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model: User = {} as User;

  constructor(private loginService: LoginService,
              private router:Router) {
  }


  onLogin(loginForm: NgForm) {
    const user = loginForm.value as User;
    console.log(user)

    this.loginService.login(user)
      .subscribe(response=>{
        console.log(response)
        this.router.navigate([""]);
      })
  }


  checkInput(email: NgModel) {
    console.log("Inside checkInput")
    console.log(email.value)
    const value = email.value as string;
    if (!value.endsWith('.ibm')) {
      email.control.setErrors({orgEnding: "Email must end with .ibm"})
    }
  }

}
