import { Component } from '@angular/core';
import {Location} from '@angular/common'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private location:Location) {
  }

  onBackClick() {
    this.location.back();
  }
}
