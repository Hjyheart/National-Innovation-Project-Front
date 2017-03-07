import {Component, OnInit, ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from "../service/login.service";

declare var $:any;

@Component({
  moduleId: module.id,
	selector: 'my-login',
	templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit{

  private id: string;
  private password: string;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router,
  ){}

  ngOnInit(){
    this.id = '';
    this.password = '';
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  signIn(form: NgForm){
    console.log(form.value);
    this.loginService.login(this.id, this.password)
      .subscribe(
        data => {
          if (data === true) {
            this.router.navigate([this.returnUrl]);
          }
        });
  }

  logout(){
    this.loginService.loginOut();
  }

}
