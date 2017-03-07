/**
 * Created by hongjiayong on 2017/2/28.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from "../service/login.service";

@Component({
  moduleId: module.id,
  selector: 'my-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ){}

  ngOnInit(): void {
  }

  logOut(){
    this.loginService.loginOut();
  }

}