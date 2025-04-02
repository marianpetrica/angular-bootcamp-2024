import {Component} from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import {User} from '../model/user';
import {NgForm, NgModel} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model = {} as User;


  constructor(private loginService: LoginService,
              private router: Router,
              private http: HttpClient) {
  }


  checkEmail(email: NgModel) {
    console.log("Email changed")
    console.log(email.value)
    const val = email.value as string;

    if (!val.includes(".ibm")) {
      email.control.setErrors({checkOrg: "Email must end with .ibm"})
    }
  }

  login(mainForm: NgForm) {
    console.log("Login was clicked")
    console.log(mainForm.value)

    this.http.post<User>("http://localhost:9000/api/login", mainForm.value)
      .subscribe(val => {
        console.log(val);
        this.router.navigate([""]);
      })
  }

}
