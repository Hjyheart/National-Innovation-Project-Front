/**
 * Created by hongjiayong on 2017/2/27.
 */
import { NgModule }    from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule,JsonpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { LoginService }  from '../service/login.service';
import { LoginRouteGuard } from '../service/login.route.guard.service';

import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login.routing.module";

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService,
    LoginRouteGuard
  ]
})
export class LoginModule { }