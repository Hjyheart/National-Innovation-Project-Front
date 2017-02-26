import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from '../service/login.service';

@Component({
  moduleId: module.id,
	selector: 'my-login',
	templateUrl: './login.component.html',
  providers: [LoginService]
})

export class LoginComponent implements OnInit{

  private id: string;
  private password: string;
  private state: boolean;

  constructor(
    private loginService: LoginService,
  ){}

  ngOnInit(){
    this.id = '';
    this.password = '';
    this.state = false;
  }

  signIn(form: NgForm){
    console.log(form.value);
    this.loginService.login(this.id, this.password)
                      .subscribe(res => {
                        this.state = res;
                        console.log(this.state);
                      });
  }
}
