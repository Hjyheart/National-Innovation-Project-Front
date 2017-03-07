import { Component, OnInit } from '@angular/core';
// import ng-bootstrap directives
import {LoginService} from "./service/login.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit{
  name = 'Hjyheart';
  isLoginPage: boolean = false;

  constructor(
    public loginService: LoginService
  ){}

  ngOnInit(){}
}
