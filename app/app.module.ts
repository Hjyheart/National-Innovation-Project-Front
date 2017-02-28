import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule,JsonpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';


import { AppRoutingModule }     from './app-routing.module';
import { ClubModule }    from './club/club.module';

import {LoginModule} from "./login/login.module";
import {LoginRoutingModule} from "./login/login.routing.module";
import {ActivityModule} from "./activity/activity.module";
import {ApiService} from "./service/api.service";
import {LoginComponent} from "./login/login.component";
import {SideBarComponent} from "./sideBar/sidebar.component";

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    ClubModule,
    ActivityModule,
    LoginModule,
    LoginRoutingModule,
    AppRoutingModule
   ],
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    SideBarComponent
   ],
  providers: [
    ApiService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
