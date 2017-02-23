import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from '../service/login.service';

@Component({
  moduleId: module.id,
	selector: 'my-login',
	templateUrl: './login.component.html',
  // providers: [LoginService]
})

export class LoginComponent implements OnInit{
  constructor(
    // private loginService: LoginService,
    private id: string,
    private password: string
  ){}

  ngOnInit(){

  }

  signIn(form: NgForm){
    console.log(form.value);
  }
}
