import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoginChildComponent} from './login-child/login-child.component';

const routes: Routes = [
  {
    path : "login",
    component :LoginComponent,
    children: [
      {
        path: ":id",
        component: LoginChildComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
