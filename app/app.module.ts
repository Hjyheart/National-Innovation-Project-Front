import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule,JsonpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent }   from './login/login.component';


import { AppRoutingModule }     from './app-routing.module';
import { ClubModule }    from './club/club.module';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    JsonpModule,
    ClubModule,
    AppRoutingModule
   ],
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
